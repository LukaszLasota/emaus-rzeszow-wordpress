import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const Save = ({ attributes }) => {
    const { text, imgAlt, imgURL, postURL } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div className="about-one" {...blockProps}>
            {postURL && postURL.url ? (
                <a href={postURL.url}>
                    <figure>
                        {imgURL && <img className="about-one__image" src={imgURL} alt={imgAlt} />}
                        <h2 className='about-one__caption'>{text}</h2>
                    </figure>
                    <div className="about-one__overlay"></div>
                </a>
            ) : (
                <figure>
                    {imgURL && <img className="about-one__image" src={imgURL} alt={imgAlt} />}
                    <h2 className='about-one__caption'>{text}</h2>
                    <div className="about-one__overlay"></div>
                </figure>
            )}
        </div>
    );
};

export default Save;
