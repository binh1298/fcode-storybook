import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

export interface FooterBaseProps {
    bgcolor?: "primary" | "secondary";
}

const FooterBase = (props: FooterBaseProps) => {
    const { bgcolor } = props;

    return (
        <BoxBase
            display="flex"
            justifyContent="space-between"
            bgcolor={bgcolor ? bgcolor : "primary"}
            pt={1}
            pb={1}
            pl={2}
            pr={2}
            data-testid="FooterBase__root"
        >
            <TypographyBase variant="subtitle2">F-Blog</TypographyBase>
            <TypographyBase variant="subtitle2">
                &copy; {new Date().getFullYear()} built by F-Code Inc.
            </TypographyBase>
        </BoxBase>
    );
};

export default FooterBase;
