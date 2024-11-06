import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls, RichText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { PanelBody, Spinner, TextControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';
import block from "./block.json";
import "./view.js";
import "./editor.scss";

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { numberposts, blockTitle, text } = attributes;
        const blockProps = useBlockProps();

        const meetings = useSelect(
            (select) =>
                select("core").getEntityRecords("postType", "meetings", {
                    per_page: numberposts,
                    _fields: ["id", "title.rendered", "link", "acf", "content.rendered"],
                }),
            [numberposts]
        );

        const sortedMeetings = meetings
            ? [...meetings].sort((a, b) => {
                const aPriority = a.acf?.priority || 0;
                const bPriority = b.acf?.priority || 0;
                return aPriority - bPriority;
            })
            : [];

        return (
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title={__("Ustawienia bloku", "custom-block-package")}>
                        <TextControl
                            label={__("Liczba postów", "custom-block-package")}
                            type="number"
                            value={numberposts}
                            onChange={(value) => setAttributes({ numberposts: parseInt(value, 10) })}
                        />

                    </PanelBody>
                </InspectorControls>


                <RichText
                    tagName="h2"
                    className="block-title"
                    style={{ textAlign: "center", width: "100%" }}
                    placeholder={__("Wpisz tytuł bloku", "custom-block-package")}
                    value={blockTitle}
                    onChange={(newVal) => setAttributes({ blockTitle: newVal })}
                />

                {meetings === null ? (
                    <Spinner />
                ) : sortedMeetings.length === 0 ? (
                    <p>{__("Brak dostępnych spotkań.", "custom-block-package")}</p>
                ) : (
                    <div className="flipping-cards">
                        {sortedMeetings.map((meeting) => (
                            <div key={meeting.id} className="flipping-cards__card">
                                <div className="flipping-cards__card-inner">
                                    <div className="flipping-cards__card-front">
                                        <h3>{meeting.title.rendered}</h3>
                                        <p>{meeting.acf?.day_hour || __("Brak godziny", "custom-block-package")}</p>
                                        <p>{meeting.acf?.place || __("Brak miejsca", "custom-block-package")}</p>
                                    </div>
                                    <div className="flipping-cards__card-back">
                                        <div dangerouslySetInnerHTML={{ __html: meeting.content?.rendered }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    },
    save: () => null,
});
