import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const Save = ({ attributes }) => {
    const {
        imgAlt,
        imgDesktopURL,
        imgTabletURL,
        imgMobileURL
    } = attributes;

    const blockProps = useBlockProps.save({
        className: 'responsive-img-block'
    });

    return (
        <div {...blockProps}>
            <picture>
                {/* Mobile */}
                {imgMobileURL && (
                    <source
                        srcSet={imgMobileURL}
                        media="(max-width: 480px)"
                    />
                )}
                {/* Tablet */}
                {imgTabletURL && (
                    <source
                        srcSet={imgTabletURL}
                        media="(max-width: 768px)"
                    />
                )}
                {/* Desktop domyślny */}
                <img
                    src={imgDesktopURL || imgTabletURL || imgMobileURL}
                    alt={imgAlt}
                />
            </picture>
        </div>
    );
};

export default Save;
