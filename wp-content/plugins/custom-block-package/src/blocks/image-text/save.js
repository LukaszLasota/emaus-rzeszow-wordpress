import { RichText, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const Save = (props) => {
    const { attributes } = props;
    const { text, imgAlt, imgURL, linkURL } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="about-one">
            <a href={linkURL || "#"}>
                <figure>
                    {imgURL && <img className="about-one__image" src={imgURL} alt={imgAlt} />}
                    <RichText.Content
                        className="about-one__caption"
                        tagName="h2"
                        value={text}
                    />
                </figure>
                <div className="about-one__overlay"></div>
            </a>
        </div>
    );
};

export default Save;
