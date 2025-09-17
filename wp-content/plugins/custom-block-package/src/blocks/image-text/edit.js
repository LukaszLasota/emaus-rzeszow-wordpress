import { __ } from '@wordpress/i18n';
import {
    RichText,
    useBlockProps,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    __experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    Popover
} from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import './index.scss';

const Edit = ({ attributes, setAttributes }) => {
    const { text, imgID, imgAlt, imgURL, postURL } = attributes;
    const blockProps = useBlockProps({
        className: "about-one",
    });

    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__("Ustawienia", "custom-block-package")}>

                    <h2>{__("Zmień/dodaj obraz", "custom-block-package")}</h2>

                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ imgID: media.id, imgURL: media.url, imgAlt: media.alt })}
                            allowedTypes={["image"]}
                            value={imgID}
                            render={({ open }) => (
                                <Button
                                    onClick={open}
                                    className="select-button"
                                >
                                    {!imgID ? __("Wybierz obraz", "custom-block-package") : __("Wybierz obraz", "custom-block-package")}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    <h2>{__("Opcje odnośnika", "custom-block-package")}</h2>
                    <Button
                        onClick={() => setIsLinkPickerVisible(true)}
                        className="select-button"
                    >
                        {__("Wybierz link", "custom-block-package")}
                    </Button>

                    {isLinkPickerVisible && (
                        <Popover
                            position="middle left"
                            onClose={() => setIsLinkPickerVisible(false)}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <LinkControl
                                    searchInputPlaceholder="Search here..."
                                    value={postURL || {}}
                                    settings={[
                                        {
                                            id: 'opensInNewTab',
                                            title: 'Otworzyć w nowym oknie',
                                        }
                                    ]}
                                    onChange={(newPostURL) => setAttributes({ postURL: newPostURL })}
                                    withCreateSuggestion={true}
                                    createSuggestion={(inputValue) => setAttributes({
                                        postURL: {
                                            ...postURL,
                                            title: inputValue,
                                            type: "page",
                                            id: Date.now(),
                                            url: inputValue
                                        }
                                    })}
                                    createSuggestionButtonText={(newValue) => `${__("Nowa: ")} ${newValue}`}
                                />

                                {postURL.url && (
                                    <Button
                                        isDestructive
                                        onClick={() => setAttributes({ postURL: { url: "" } })}
                                        className="remove-link-button"
                                    >
                                        {__("Usuń link", "custom-block-package")}
                                    </Button>
                                )}

                                <Button
                                    onClick={() => setIsLinkPickerVisible(false)}
                                    className="select-button"
                                >
                                    {__("Zamknij", "custom-block-package")}
                                </Button>
                            </div>
                        </Popover>

                    )}

                    <h2>{__("Tekst na obrazie", "custom-block-package")}</h2>

                    <RichText
                        tagName="h2"
                        placeholder={__("Wpisz tekst", "custom-block-package")}
                        value={text}
                        onChange={(newVal) => setAttributes({ text: newVal })}
                    />

                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
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


        </Fragment>
    );
};

export default Edit;
