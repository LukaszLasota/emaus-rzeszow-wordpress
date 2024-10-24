import {
    useBlockProps,
    InspectorControls,
    InnerBlocks,
    MediaUpload,
    MediaUploadCheck,
    ColorPalette,
} from "@wordpress/block-editor";
import {
    PanelBody,
    RangeControl,
    SelectControl,
    Button,
    TextControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
    const {
        columnsMobile,
        columnsSmallTablet,
        columnsLargeTablet,
        columnsDesktop,
        tagName,
        backgroundImage,
        backgroundColor,
        padding,
        margin,
    } = attributes;

    const TagName = tagName;

    const blockProps = useBlockProps({
        className: `section-block`,
        style: {
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            backgroundColor: backgroundColor || undefined,
            padding: padding || undefined,
            margin: margin || undefined,
            "--columns-mobile": `${columnsMobile}`,
            "--columns-small-tablet": `${columnsSmallTablet}`,
            "--columns-large-tablet": `${columnsLargeTablet}`,
            "--columns-desktop": `${columnsDesktop}`,
        }
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Widok responsywny", "custom-block-package")}>
                    <RangeControl
                        label={__("Kolumny (Komputer)", "custom-block-package")}
                        value={columnsDesktop}
                        onChange={(value) => setAttributes({ columnsDesktop: value })}
                        min={1}
                        max={6}
                    />
                    <RangeControl
                        label={__("Kolumny (Duży tablet)", "custom-block-package")}
                        value={columnsLargeTablet}
                        onChange={(value) => setAttributes({ columnsLargeTablet: value })}
                        min={1}
                        max={6}
                    />
                    <RangeControl
                        label={__("Kolumny (Mały tablet)", "custom-block-package")}
                        value={columnsSmallTablet}
                        onChange={(value) => setAttributes({ columnsSmallTablet: value })}
                        min={1}
                        max={6}
                    />
                    <RangeControl
                        label={__("Kolumny (Urządzenie mobilne)", "custom-block-package")}
                        value={columnsMobile}
                        onChange={(value) => setAttributes({ columnsMobile: value })}
                        min={1}
                        max={6}
                    />
                    <SelectControl
                        label={__("Znaczniki HTML", "custom-block-package")}
                        value={tagName}
                        options={[
                            { label: __("div", "custom-block-package"), value: "div" },
                            { label: __("section", "custom-block-package"), value: "section" },
                            { label: __("article", "custom-block-package"), value: "article" },
                            { label: __("main", "custom-block-package"), value: "main" },
                            { label: __("header", "custom-block-package"), value: "header" },
                            { label: __("footer", "custom-block-package"), value: "footer" },
                            { label: __("aside", "custom-block-package"), value: "aside" },
                        ]}
                        onChange={(tagName) => setAttributes({ tagName })}
                    />
                </PanelBody>

                <PanelBody title={__("Obraz tła", "custom-block-package")} initialOpen={false}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ backgroundImage: media.url })}
                            allowedTypes={["image"]}
                            value={backgroundImage}
                            render={({ open }) => (
                                <>
                                    {!backgroundImage ? (
                                        <Button onClick={open} isSecondary>
                                            {__("Wybierz obraz tła", "custom-block-package")}
                                        </Button>
                                    ) : (
                                        <>
                                            <img
                                                src={backgroundImage}
                                                style={{ width: "100%", height: "auto" }}
                                            />
                                            <Button onClick={open} isSecondary>
                                                {__("Zmień obraz tła", "custom-block-package")}
                                            </Button>
                                            <Button
                                                onClick={() => setAttributes({ backgroundImage: "" })}
                                                isLink
                                                isDestructive
                                            >
                                                {__("Usuń obraz tła", "custom-block-package")}
                                            </Button>
                                        </>
                                    )}
                                </>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>

                <PanelBody title={__("Kolor tła", "custom-block-package")} initialOpen={false}>
                    <ColorPalette
                        label={__("Kolor tła", "custom-block-package")}
                        value={backgroundColor}
                        onChange={(backgroundColor) => setAttributes({ backgroundColor })}
                        clearable
                    />
                    {backgroundColor && (
                        <Button
                            onClick={() => setAttributes({ backgroundColor: "" })}
                            isLink
                            isDestructive
                        >
                            {__("Usuń kolor tła", "custom-block-package")}
                        </Button>
                    )}
                </PanelBody>

                <PanelBody title={__("Odstępy", "custom-block-package")} initialOpen={false}>
                    <TextControl
                        label={__("Dopełnienie (Padding)", "custom-block-package")}
                        value={padding}
                        onChange={(value) => setAttributes({ padding: value })}
                        help={__("Wprowadź wartości odstępu, np. '10px 20px' lub '10px 15px 20px 25px'", "custom-block-package")}
                    />
                    <TextControl
                        label={__("Margines", "custom-block-package")}
                        value={margin}
                        onChange={(value) => setAttributes({ margin: value })}
                        help={__("Wprowadź wartości marginesu, np. '10px 0' lub '5px 10px 15px 20px'", "custom-block-package")}
                    />
                </PanelBody>
            </InspectorControls>

            <TagName {...blockProps}>
                <InnerBlocks orientation="horizontal" />
            </TagName>
        </>
    );
};

export default Edit;
