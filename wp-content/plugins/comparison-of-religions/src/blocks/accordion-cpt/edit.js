import { __ } from '@wordpress/i18n';
const { useSelect } = wp.data;
const { useBlockProps } = wp.blockEditor;
import './editor.scss';
import { useRef } from 'react';

const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();

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

    const [openAccordions, setOpenAccordions] = React.useState({});
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
        <div {...blockProps}>
            <div className="comparison-accordion">
                {comparisons && comparisons.length > 0 ? (
                    comparisons.map((comparison, index) => {
                        const parsedContent = parseContent(comparison.content.rendered);
                        const isOpen = openAccordions[index];

                        return (
                            <div key={comparison.id} className="comparison-accordion__item">
                                <div className="comparison-accordion__header" id={`heading-${index}`}>
                                    <button
                                        className={`comparison-accordion__toggle ${isOpen ? "" : "comparison-accordion__toggle--collapsed"}`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {comparison.title.rendered}
                                    </button>
                                </div>

                                <div
                                    id={`collapse-${index}`}
                                    className={`comparison-accordion__content ${isOpen ? "comparison-accordion__content--visible" : ""}`}
                                    ref={(el) => (accordionRefs.current[index] = el)}
                                    style={{
                                        maxHeight: isOpen
                                            ? `${accordionRefs.current[index]?.scrollHeight || 0}px`
                                            : "0",
                                        transition: "max-height 0.6s ease-in-out",
                                    }}
                                >
                                    <div className="comparison-accordion__body">
                                        <div className="comparison-accordion__header-row">
                                            <div className="comparison-accordion__column">
                                                <h4>{__("Topic", "text-domain")}</h4>
                                            </div>
                                            <div className="comparison-accordion__column">
                                                <h4>{__("Roman Catholic Church", "text-domain")}</h4>
                                            </div>
                                            <div className="comparison-accordion__column">
                                                <h4>{__("Pentecostal Church", "text-domain")}</h4>
                                            </div>
                                        </div>

                                        <div className="comparison-accordion__content-grid">
                                            {parsedContent &&
                                                parsedContent.map((item, itemIndex) => {
                                                    const maxRows = Math.max(item.catholic.length, item.protestant.length);

                                                    const rows = Array.from({ length: maxRows }, (_, rowIndex) => ({
                                                        catholic: item.catholic[rowIndex] || "",
                                                        protestant: item.protestant[rowIndex] || "",
                                                    }));

                                                    return (
                                                        <div key={itemIndex} className="comparison-accordion__row">
                                                            <div className="comparison-accordion__column comparison-accordion__column--topic">
                                                                <p className="comparison-accordion__topic">{item.topic}</p>
                                                            </div>
                                                            <div className="comparison-accordion__column comparison-accordion__column--combined">
                                                                {rows.map((row, rowIndex) => (
                                                                    <div key={rowIndex} className="comparison-accordion__combined-row">
                                                                        <p className="comparison-accordion__paragraph">{row.catholic}</p>
                                                                        <p className="comparison-accordion__paragraph">{row.protestant}</p>
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
                    <p>{__("No data available to display.", "text-domain")}</p>
                )}
            </div>
        </div>
    );
};

export default Edit;
