import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './style.scss'; // Import stylów dla frontendu

const Save = ({ attributes }) => {
    const { title } = attributes;

    const blockProps = useBlockProps.save({
        className: 'cbp-block accordion__item',
    });

    return (
        <div {...blockProps}>
            <div
                className="accordion__title"
                role="button"
                tabIndex="0"
                aria-expanded="false"
            >
                <h3 className="accordion__title-text">
                    <RichText.Content value={title} />
                </h3>
            </div>
            <div
                className="accordion__content"
                hidden
            >
                <div className="accordion__content--box">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default Save;
