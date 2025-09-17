import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
    RichText,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './index.scss';

const Edit = ({ attributes, setAttributes }) => {
    const { title } = attributes;

    const blockProps = useBlockProps({
        className: 'accordion__item',
    });

    return (
        <div {...blockProps}>

            <InspectorControls>
                <PanelBody title={__('Ustawienia akordeonu', 'custom-block-package')}>
                    <TextControl
                        label={__('Tytuł akordeonu', 'custom-block-package')}
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="accordion__title">
                <RichText
                    tagName="h3"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__('Tytuł akordeonu', 'custom-block-package')}
                    className="accordion__title-text"
                />
            </div>
            <div className="accordion__content">
                <div className="accordion__content--box">
                    <InnerBlocks templateLock={false} />
                </div>
            </div>
        </div>
    );
};

export default Edit;
