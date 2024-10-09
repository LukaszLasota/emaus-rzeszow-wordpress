import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    URLInput
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button
} from '@wordpress/components';
import './editor.scss';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { text, imgID, imgAlt, imgURL, linkURL } = attributes;
    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Settings", "custom-block-package")}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ imgID: media.id, imgURL: media.url, imgAlt: media.alt })}
                            allowedTypes={["image"]}
                            value={imgID}
                            render={({ open }) => (
                                <Button onClick={open}>
                                    {!imgID ? __("Upload Image", "custom-block-package") : __("Change Image", "custom-block-package")}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    <PanelBody title={__("Link", "custom-block-package")}>
                        <URLInput
                            label={__("URL", "custom-block-package")}
                            value={linkURL}
                            onChange={(newVal) => setAttributes({ linkURL: newVal })}
                        />
                    </PanelBody>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps} className="about-one">
                <a href={linkURL || "#"}>
                    <figure>
                        {imgURL && <img className="about-one__image" src={imgURL} alt={imgAlt} />}
                        <RichText
                            className="about-one__caption"
                            tagName="h2"
                            placeholder={__("Enter caption", "custom-block-package")}
                            value={text}
                            onChange={(newVal) => setAttributes({ text: newVal })}
                        />
                    </figure>
                    <div className="about-one__overlay"></div>
                </a>
            </div>
        </>
    );
};

export default Edit;
