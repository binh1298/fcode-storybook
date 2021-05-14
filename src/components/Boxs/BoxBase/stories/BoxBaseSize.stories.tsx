import BoxBase, { BoxBaseProps } from "..";
import { argTypes } from "./ArgTypes.BoxBase.component";

import { Story } from "@storybook/react";

export default {
    title: "Components/BoxBase/Size/Size",
    component: BoxBase,
    argTypes: {
        ...argTypes,
    },
};

const Template: Story<BoxBaseProps> = (args) => {
    return <BoxBase {...args} />;
};

export const WidthLessThan1 = Template.bind({});
WidthLessThan1.args = {
    minHeight: 300,
    width: 3 / 4,
    bgcolor: "primary",
    children: "Width: 75% (width={3 / 4})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const WidthEqual1 = Template.bind({});
WidthEqual1.args = {
    minHeight: 300,
    width: 1,
    bgcolor: "primary",
    children: "Width: 100% (width={1})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const WidthBiggerThan1 = Template.bind({});
WidthBiggerThan1.args = {
    minHeight: 300,
    width: 200,
    bgcolor: "primary",
    children: "Width: 200px (width={200})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeighttLessThan1 = Template.bind({});
HeighttLessThan1.args = {
    height: 3 / 4,
    width: 1,
    bgcolor: "primary",
    children: "height: 75% (height={3 / 4})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeightEqual1 = Template.bind({});
HeightEqual1.args = {
    height: 1,
    width: 1,
    bgcolor: "primary",
    children: "height: 100% (height={1})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

export const HeightBiggerThan1 = Template.bind({});
HeightBiggerThan1.args = {
    height: 200,
    width: 1,
    bgcolor: "primary",
    children: "height: 200px (height={200})",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};
