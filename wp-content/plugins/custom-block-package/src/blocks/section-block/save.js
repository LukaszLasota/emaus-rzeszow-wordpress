import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import './style.scss';

const Save = ({ attributes }) => {
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

    const blockProps = useBlockProps.save({
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
                "--flex-wrap": flexWrap,
                "--flex-direction": flexDirection,
                "--align-items": alignItems,
                "--justify-content": justifyContent,
            }),
        },
    });

    return (
        <TagName {...blockProps}>
            <InnerBlocks.Content />
        </TagName>
    );
};

export default Save;
