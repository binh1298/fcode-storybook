import { GridSize } from "@material-ui/core";

import GridBase, { GridBaseProps } from ".";
import BoxBase from "../Boxs/BoxBase";

import { Story } from "@storybook/react";

export default {
    title: "Components/GridBase",
    component: GridBase,
    subcomponents: {
        BoxBase,
    },
};

export const BasicGrid: Story<GridBaseProps> = (args) => {
    const gridItemsList = [
        {
            content: "xs=12",
            width: 12,
        },
        {
            content: "xs=6",
            width: 6,
        },
        {
            content: "xs=6",
            width: 6,
        },
        {
            content: "xs=3",
            width: 3,
        },
        {
            content: "xs=3",
            width: 3,
        },
        {
            content: "xs=3",
            width: 3,
        },
        {
            content: "xs=3",
            width: 3,
        },
    ];

    return (
        <GridBase {...args}>
            {gridItemsList.map((item, index) => (
                <GridBase key={index} item xs={item.width as GridSize}>
                    <BoxBase textAlign="center" bgcolor="primary" py={3}>
                        {item.content}
                    </BoxBase>
                </GridBase>
            ))}
        </GridBase>
    );
};

BasicGrid.args = {
    container: true,
    spacing: 2,
};
