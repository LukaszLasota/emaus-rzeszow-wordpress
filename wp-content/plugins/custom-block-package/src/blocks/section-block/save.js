import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./style.scss";

const Save = ({ attributes }) => {
    const {
        columnsMobile,
        columnsSmallTablet,
        columnsLargeTablet,
        columnsDesktop,
        backgroundImage,
        backgroundColor,
        padding,
        margin,
        tagName,
        gridGap,
        justifyItems,
        justifyContent,
        alignContent,
    } = attributes;

    const TagName = tagName;

    const blockProps = useBlockProps.save({
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
            "--grid-gap": `${gridGap}px`,
            "--justify-items": justifyItems,
            "--justify-content": justifyContent,
            "--align-content": alignContent,
        }
    });

    return (
        <TagName {...blockProps} >
            <InnerBlocks.Content />
        </TagName>
    );
};

export default Save;
