import { BaseSyntheticEvent, CSSProperties } from "react";

import { styled } from "@mui/material/styles";
import BoxBase, { BoxBaseProps } from "src/components/Boxes/BoxBase";

export interface ImageBaseProps extends Omit<BoxBaseProps, "sizeWidth" | "sizeHeight"> {
    onErrorSrc: string;
    src: string;
    alt?: string;
    styleImage?: CSSProperties;
}

interface ImageProps extends Omit<ImageBaseProps, "onErrorSrc"> {
    onError: (e: BaseSyntheticEvent) => void;
}

const Image = styled("img", { shouldForwardProp: (prop) => prop !== "styleImage" })<ImageProps>(
    ({ styleImage }) => ({
        width: "inherit",
        height: "inherit",
        ...styleImage,
    })
);

const ImageBase = (props: ImageBaseProps) => {
    const { onErrorSrc, styleImage, src, alt, ...rest } = props;

    const handleErrorWhenLoadImageFail = (e: BaseSyntheticEvent) => {
        e.target.onError = null;
        e.target.src = onErrorSrc;
        e.target.alt = "error";
    };

    return (
        <BoxBase {...rest}>
            <Image
                src={src}
                alt={alt}
                styleImage={styleImage}
                onError={handleErrorWhenLoadImageFail}
            />
        </BoxBase>
    );
};

export default ImageBase;
