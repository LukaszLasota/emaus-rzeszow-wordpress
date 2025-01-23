import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ColorPalette,
    TextControl
} from '@wordpress/components';
import {
    InspectorControls,
    useBlockProps
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useRef, useState } from 'react';
import './editor.scss';

const Edit = ({ attributes, setAttributes }) => {
    const {
        headerBackground,
        headerBorderColor,
        headerTextColor,
        widthDesktop,
        widthTablet,
        widthMobile
    } = attributes;
    const blockProps = useBlockProps();

    const colors = useSelect(
        (select) => select('core/block-editor').getSettings()?.colors || [],
        []
    );

    const onChangeHeaderBackground = (color) => setAttributes({ headerBackground: color });
    const onChangeHeaderBorderColor = (color) => setAttributes({ headerBorderColor: color });
    const onChangeHeaderTextColor = (color) => setAttributes({ headerTextColor: color });

    const onChangeDesktopWidth = (val) => {
        setAttributes({ widthDesktop: val });
    };
    const onChangeTabletWidth = (val) => {
        setAttributes({ widthTablet: val });
    };
    const onChangeMobileWidth = (val) => {
        setAttributes({ widthMobile: val });
    };

    const comparisons = useSelect(
        (select) =>
            select("core").getEntityRecords("postType", "comparison", {
                per_page: -1,
                _fields: ["id", "title.rendered", "content.rendered"],
                orderby: "date",
                order: "asc",
            }),
        []
    );

    const [openAccordions, setOpenAccordions] = useState({});
    const accordionRefs = useRef({});

    const toggleAccordion = (index) => {
        setOpenAccordions((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const parseContent = (content) => {
        try {

            const strippedContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();
            const decodedContent = strippedContent.replace(/&#(\d+);/g, (match, dec) =>
                String.fromCharCode(dec)
            );
            const cleanedContent = decodedContent
                .replace(/'/g, '"')
                .replace(/„/g, '"')
                .replace(/”/g, '"');

            return JSON.parse(cleanedContent);
        } catch (err) {
            console.error("JSON Parsing Error:", err);
            console.error("Invalid content:", content);
            return [];
        }
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Nagłówek Akordeonu", "comparison")} initialOpen={true}>
                    {/* Tutaj Twoje ColorPalette, itd. */}
                </PanelBody>

                <PanelBody title={__("Szerokość Akordeonu", "comparison")} initialOpen={true}>
                    <TextControl
                        label={__("Szer. Desktop", "comparison")}
                        value={widthDesktop}
                        onChange={onChangeDesktopWidth}
                        help={__("np. 80%, 800px, 70vw", "comparison")}
                    />
                    <TextControl
                        label={__("Szer. Tablet", "comparison")}
                        value={widthTablet}
                        onChange={onChangeTabletWidth}
                        help={__("np. 90%, 600px, 70vw", "comparison")}
                    />
                    <TextControl
                        label={__("Szer. Mobile", "comparison")}
                        value={widthMobile}
                        onChange={onChangeMobileWidth}
                        help={__("np. 100%, 300px, 90vw", "comparison")}
                    />
                </PanelBody>
                <PanelBody title={__("Nagłówek Akordeonu", "comparison")} initialOpen={true}>
                    <p>{__("Kolor tła nagłówka", "comparison")}</p>
                    <ColorPalette
                        colors={colors}
                        value={headerBackground}
                        onChange={onChangeHeaderBackground}
                    />
                    <p>{__("Kolor obramowania nagłówka", "comparison")}</p>
                    <ColorPalette
                        colors={colors}
                        value={headerBorderColor}
                        onChange={onChangeHeaderBorderColor}
                    />
                    <p>{__("Kolor tekstu nagłówka", "comparison")}</p>
                    <ColorPalette
                        colors={colors}
                        value={headerTextColor}
                        onChange={onChangeHeaderTextColor}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="comparison-accordion" style={{
                    '--compAccordionDesktop': widthDesktop || '70%',
                    '--compAccordionTablet': widthTablet || '80%',
                    '--compAccordionMobile': widthMobile || '95%',
                }}>
                    {comparisons && comparisons.length > 0 ? (
                        comparisons.map((comparison, index) => {
                            const parsedContent = parseContent(comparison.content.rendered);
                            const isOpen = openAccordions[index];

                            const headingId = `heading-${index}`;
                            const panelId = `panel-${index}`;

                            return (
                                <div key={comparison.id} className="comparison-accordion__item">
                                    <div
                                        className="comparison-accordion__header"
                                        id={headingId}
                                    >
                                        <h2>
                                            <button
                                                className={`comparison-accordion__toggle ${isOpen ? " comparison-accordion__toggle--underline" : "comparison-accordion__toggle--collapsed"}`}
                                                type="button"
                                                onClick={(event) => toggleAccordion(index)}
                                                aria-expanded={isOpen ? "true" : "false"}
                                                aria-controls={panelId}
                                                style={{
                                                    backgroundColor: headerBackground,
                                                    borderTop: `1px solid ${headerBorderColor}`,
                                                    borderRight: `1px solid ${headerBorderColor}`,
                                                    borderLeft: `1px solid ${headerBorderColor}`,
                                                    color: headerTextColor,
                                                }}
                                            >
                                                {comparison.title.rendered}
                                            </button>
                                        </h2>
                                    </div>

                                    <div
                                        id={panelId}
                                        className={`comparison-accordion__content ${isOpen ? "comparison-accordion__content--visible" : ""
                                            }`}
                                        ref={(el) => (accordionRefs.current[index] = el)}
                                        role="region"
                                        aria-labelledby={headingId}
                                        style={{
                                            maxHeight: isOpen
                                                ? `${accordionRefs.current[index]?.scrollHeight || 0}px`
                                                : "0",
                                            opacity: isOpen ? "1" : "0",
                                            transition:
                                                "max-height 0.6s ease-in-out, opacity 0.6s ease-in-out",
                                            overflow: "hidden",
                                            borderLeft: `1px solid ${headerBorderColor}`,
                                            borderRight: `1px solid ${headerBorderColor}`,
                                            borderBottom:
                                                index === comparisons.length - 1
                                                    ? `1px solid ${headerBorderColor}`
                                                    : "none",
                                        }}
                                    >
                                        <div className="comparison-accordion__body">
                                            <div className="comparison-accordion__header-row">
                                                <div className="comparison-accordion__column">
                                                    <h4>{__("Temat", "comparison")}</h4>
                                                </div>
                                                <div className="comparison-accordion__column">
                                                    <h4>{__("Kościół Rzymskokatolicki", "comparison")}</h4>
                                                </div>
                                                <div className="comparison-accordion__column">
                                                    <h4>{__("Kościół Protestancki", "comparison")}</h4>
                                                </div>
                                            </div>

                                            <div className="comparison-accordion__content-flex">
                                                {parsedContent &&
                                                    parsedContent.map((item, itemIndex) => {
                                                        const maxRows = Math.max(
                                                            item.catholic?.length || 0,
                                                            item.protestant?.length || 0
                                                        );

                                                        const rows = Array.from({ length: maxRows }, (_, rowIndex) => ({
                                                            catholic: item.catholic?.[rowIndex] || "",
                                                            protestant: item.protestant?.[rowIndex] || "",
                                                        }));

                                                        return (
                                                            <div key={itemIndex} className="comparison-accordion__row">
                                                                <div className="comparison-accordion__column comparison-accordion__column--topic">
                                                                    <p>{item.topic}</p>
                                                                </div>
                                                                <div className="comparison-accordion__column comparison-accordion__column--combined">
                                                                    {rows.map((row, rowIndex) => (
                                                                        <div
                                                                            key={rowIndex}
                                                                            className="comparison-accordion__combined-row"
                                                                        >
                                                                            <p
                                                                                className={`comparison-accordion__paragraph ${rowIndex === 0
                                                                                    ? "comparison-accordion__paragraph--first"
                                                                                    : ""
                                                                                    }`}
                                                                            >
                                                                                {row.catholic}
                                                                            </p>
                                                                            <p
                                                                                className={`comparison-accordion__paragraph ${rowIndex === 0
                                                                                    ? "comparison-accordion__paragraph--first"
                                                                                    : ""
                                                                                    }`}
                                                                            >
                                                                                {row.protestant}
                                                                            </p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>{__("Brak postów", "comparison")}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Edit;
