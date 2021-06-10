import { useEffect } from "react";

import BoxBase from "src/components/Boxs/BoxBase";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TextFieldBase from "src/components/Textfields/TextFieldBase";
import TypographyBase from "src/components/Typography/TypographyBase";

function UpSertPost() {
    useEffect(() => {}, []);
    return (
        <BoxBase width={1} pl={20} pr={20} pt={2} boxSizing="border-box">
            <BoxBase width={1} pt={3}>
                <TypographyBase align="left" variant="h3">
                    Create Blog
                </TypographyBase>
            </BoxBase>
            <BoxBase width={1} pt={5}>
                <TextFieldBase variant="outlined" label="Title" fullWidth required />
            </BoxBase>
            <BoxBase width={1} pt={5} display="flex" justifyContent="flex-end">
                <BoxBase p={1}>
                    <ButtonBase variant="contained" size="large" color="primary">
                        Create Blog
                    </ButtonBase>
                </BoxBase>
                <BoxBase p={1}>
                    <ButtonBase variant="contained" size="large" color="secondary">
                        Cancel
                    </ButtonBase>
                </BoxBase>
            </BoxBase>
        </BoxBase>
    );
}

export default UpSertPost;
