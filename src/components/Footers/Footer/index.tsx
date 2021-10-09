import BoxBase from "src/components/Boxes/BoxBase";
import TypographyBase from "src/components/Typography/TypographyBase";

export interface FooterProps {
    bgcolor?: "primary" | "secondary";
}

const Footer = (props: FooterProps) => {
    const { bgcolor = "primary" } = props;

    return (
        <BoxBase
            display="flex"
            justifyContent="space-between"
            bgcolor={bgcolor}
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
