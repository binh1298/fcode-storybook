import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

export interface FooterProps {
    bgcolor?: "primary" | "secondary";
}

const Footer = (props: FooterProps) => {
    const { bgcolor } = props;

    return (
        <BoxBase
            display="flex"
            justifyContent="space-between"
            bgcolor={bgcolor ? bgcolor : "primary"}
            py={1}
            px={2}
            data-testid="Footer__root"
        >
            <TypographyBase variant="subtitle2">F-Blog</TypographyBase>
            <TypographyBase variant="subtitle2">
                &copy; {new Date().getFullYear()} built by F-Code Inc.
            </TypographyBase>
        </BoxBase>
    );
};

export default Footer;
