export const argTypes = {
    bgcolor: {
        control: {
            type: "radio",
            default: "default",
            options: ["default", "primary", "secondary", "info", "error", "warning", "success"],
        },
    },
    colorProps: {
        control: {
            type: "radio",
            options: ["main", "light", "dark"],
        },
    },
    color: {
        table: {
            disable: true,
        },
    },
    m: {
        description: "margin = m * theme spacing (depends on theme), same with mt, mr, mb, ml",
    },
    p: {
        description: "padding = m * theme spacing (depends on theme), same width pt, pr, pb, pl",
    },
    width: {
        description:
            "(0 < width <= 1) <=> percent | width > 1 <=> pixel, same width minWidth, maxWidth",
    },
    height: {
        description:
            "(0 < height <= 1) <=> percent | height > 1 <=> pixel, same width minHeight, maxHeight",
    },
};
