import {
    useBlockProps,
    InspectorControls,
    InnerBlocks,
    MediaUpload,
    MediaUploadCheck,
    ColorPalette
} from "@wordpress/block-editor";
import {
    PanelBody,
    RangeControl,
    SelectControl,
    Button,
    TextControl,
    ToggleControl
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import "./index.scss";

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
        gridGap,
        justifyItems,
        justifyContent,
        alignContent,
        layoutType,
        flexWrap,
        flexDirection,
        alignItems,
        toggleClass
    } = attributes;


    const TagName = tagName;

    const blockProps = useBlockProps({
        className: `cbp-block section-block ${layoutType === "grid" ? "is-grid" : layoutType === "flex" ? "is-flex" : ""} ${toggleClass ? 'width-settings' : ''}`,
        style: {
            background: backgroundColor || undefined,
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            padding: padding || undefined,
            margin: margin || undefined,
            ...(layoutType === "grid" && {
                "--columns-mobile": `${columnsMobile}`,
                "--columns-small-tablet": `${columnsSmallTablet}`,
                "--columns-large-tablet": `${columnsLargeTablet}`,
                "--columns-desktop": `${columnsDesktop}`,
                "--grid-gap": `${gridGap}px`,
                "--justify-items": justifyItems,
                "--align-content": alignContent,
            }),
            ...(layoutType === "flex" && {
                "--display": "flex",
                "--flex-wrap": flexWrap || "nowrap",
                "--flex-direction": flexDirection || "row",
                "--align-items": alignItems || "stretch",
                "--justify-content": justifyContent || "flex-start",
            }),
        },
    });




    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Widok responsywny", "custom-block-package")} initialOpen={false}>

                    <SelectControl
                        label={__("Typ układu", "custom-block-package")}
                        value={attributes.layoutType}
                        options={[
                            { label: __("Brak", "custom-block-package"), value: "none" },
                            { label: __("Grid", "custom-block-package"), value: "grid" },
                            { label: __("Flex", "custom-block-package"), value: "flex" },
                        ]}
                        onChange={(value) => setAttributes({ layoutType: value })}
                    />

                    {attributes.layoutType === "grid" && (
                        <>
                            <RangeControl
                                label={__("Kolumny (Komputer)", "custom-block-package")}
                                value={attributes.columnsDesktop}
                                onChange={(value) => setAttributes({ columnsDesktop: value })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Kolumny (Duży tablet)", "custom-block-package")}
                                value={attributes.columnsLargeTablet}
                                onChange={(value) => setAttributes({ columnsLargeTablet: value })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Kolumny (Mały tablet)", "custom-block-package")}
                                value={attributes.columnsSmallTablet}
                                onChange={(value) => setAttributes({ columnsSmallTablet: value })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Kolumny (Urządzenie mobilne)", "custom-block-package")}
                                value={attributes.columnsMobile}
                                onChange={(value) => setAttributes({ columnsMobile: value })}
                                min={1}
                                max={6}
                            />
                            <RangeControl
                                label={__("Odstęp między elementami (Grid Gap)", "custom-block-package")}
                                value={attributes.gridGap}
                                onChange={(value) => setAttributes({ gridGap: value })}
                                min={0}
                                max={50}
                            />
                            <SelectControl
                                label={__("Justify Items", "custom-block-package")}
                                value={attributes.justifyItems}
                                options={[
                                    { label: __("Start", "custom-block-package"), value: "start" },
                                    { label: __("End", "custom-block-package"), value: "end" },
                                    { label: __("Center", "custom-block-package"), value: "center" },
                                    { label: __("Stretch", "custom-block-package"), value: "stretch" },
                                ]}
                                onChange={(value) => setAttributes({ justifyItems: value })}
                            />
                            <SelectControl
                                label={__("Align Content", "custom-block-package")}
                                value={attributes.alignContent}
                                options={[
                                    { label: __("Start", "custom-block-package"), value: "start" },
                                    { label: __("End", "custom-block-package"), value: "end" },
                                    { label: __("Center", "custom-block-package"), value: "center" },
                                    { label: __("Stretch", "custom-block-package"), value: "stretch" },
                                    { label: __("Space Between", "custom-block-package"), value: "space-between" },
                                    { label: __("Space Around", "custom-block-package"), value: "space-around" },
                                    { label: __("Space Evenly", "custom-block-package"), value: "space-evenly" },
                                ]}
                                onChange={(value) => setAttributes({ alignContent: value })}
                            />
                        </>
                    )}

                    {attributes.layoutType === "flex" && (
                        <>
                            <SelectControl
                                label={__("Flex Wrap", "custom-block-package")}
                                value={attributes.flexWrap}
                                options={[
                                    { label: __("No Wrap", "custom-block-package"), value: "nowrap" },
                                    { label: __("Wrap", "custom-block-package"), value: "wrap" },
                                    { label: __("Wrap Reverse", "custom-block-package"), value: "wrap-reverse" },
                                ]}
                                onChange={(value) => setAttributes({ flexWrap: value })}
                            />
                            <SelectControl
                                label={__("Flex Direction", "custom-block-package")}
                                value={attributes.flexDirection}
                                options={[
                                    { label: __("Row", "custom-block-package"), value: "row" },
                                    { label: __("Row Reverse", "custom-block-package"), value: "row-reverse" },
                                    { label: __("Column", "custom-block-package"), value: "column" },
                                    { label: __("Column Reverse", "custom-block-package"), value: "column-reverse" },
                                ]}
                                onChange={(value) => setAttributes({ flexDirection: value })}
                            />
                            <SelectControl
                                label={__("Align Items", "custom-block-package")}
                                value={attributes.alignItems}
                                options={[
                                    { label: __("Stretch", "custom-block-package"), value: "stretch" },
                                    { label: __("Start", "custom-block-package"), value: "flex-start" },
                                    { label: __("End", "custom-block-package"), value: "flex-end" },
                                    { label: __("Center", "custom-block-package"), value: "center" },
                                    { label: __("Baseline", "custom-block-package"), value: "baseline" },
                                ]}
                                onChange={(value) => setAttributes({ alignItems: value })}
                            />
                            <SelectControl
                                label={__("Justify Content", "custom-block-package")}
                                value={attributes.justifyContent}
                                options={[
                                    { label: __("Start", "custom-block-package"), value: "start" },
                                    { label: __("End", "custom-block-package"), value: "end" },
                                    { label: __("Center", "custom-block-package"), value: "center" },
                                    { label: __("Space Between", "custom-block-package"), value: "space-between" },
                                    { label: __("Space Around", "custom-block-package"), value: "space-around" },
                                    { label: __("Space Evenly", "custom-block-package"), value: "space-evenly" },
                                ]}
                                onChange={(value) => setAttributes({ justifyContent: value })}
                            />
                        </>
                    )}
                </PanelBody>

                <PanelBody title={__("Znacznik", "custom-block-package")} initialOpen={false}>
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
                        onChange={(color) => {
                            setAttributes({ backgroundColor: color });
                            if (color) {
                                setAttributes({ gradient: "" });
                            }
                        }}
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

                <PanelBody title={__("Ustawienia szerokosći bloku", "custom-block-package")}>
                    <ToggleControl
                        label={__("Przełącz szerokosć strony", "custom-block-package")}
                        checked={toggleClass}
                        onChange={(value) => setAttributes({ toggleClass: value })}
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
