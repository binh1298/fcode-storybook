import { useState } from "react";

import BoxBase from "src/components/Boxes/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import ModalBase, { ModalBaseProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/Modals/ModalBase",
    component: ModalBase,
} as Meta;

const Template: Story<ModalBaseProps> = (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <BoxBase maxWidth={500}>
            <ModalBase {...args} open={isOpen} onClose={() => setIsOpen(false)}>
                <BoxBase
                    bgcolor="primary"
                    width={500}
                    height={300}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <TypographyBase>This is a modal</TypographyBase>
                </BoxBase>
            </ModalBase>
            <ButtonBase color="secondary" variant="contained" onClick={() => setIsOpen(!isOpen)}>
                Click to open!!
            </ButtonBase>
        </BoxBase>
    );
};
export const Modal = Template.bind({});
Modal.args = {
    open: false,
};
