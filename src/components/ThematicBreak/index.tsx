import BoxBase from "../Boxes/BoxBase";
import TypographyBase from "../Typography/TypographyBase";

export interface ThematicBreakProps {
    caption?: string;
    width?: number;
    height?: number;
}

const ThematicBreak = (props: ThematicBreakProps) => {
    const { caption, width = 80, height = 40 } = props;
    return (
        <BoxBase
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            height={height}
        >
            <hr
                style={{
                    border: "solid 1px",
                    margin: "auto 20px",
                    width: `${width}px`,
                }}
            />
            <TypographyBase variant="caption">{caption}</TypographyBase>
            <hr
                style={{
                    border: "solid 1px",
                    margin: "auto 20px",
                    width: `${width}px`,
                }}
            />
        </BoxBase>
    );
};

export default ThematicBreak;
