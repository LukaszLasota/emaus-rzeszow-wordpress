import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './style.scss';

const Save = () => {
    const blockProps = useBlockProps.save({
        className: 'cbp-block',
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;
