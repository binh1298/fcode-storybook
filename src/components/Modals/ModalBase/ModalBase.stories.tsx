import { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TypographyBase from "src/components/Typography/TypographyBase";

import ModalBase, { ModalBaseProps } from ".";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/Modals/ModalBase",
    component: ModalBase,
} as Meta;
const useStyles = makeStyles(() => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: "#fff",
        border: "2px solid #000",
    },
}));
const Template: Story<ModalBaseProps> = (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <BoxBase maxWidth={500}>
            <ModalBase {...args} open={isOpen} onClose={() => setIsOpen(false)}>
                <BoxBase
                    border
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
