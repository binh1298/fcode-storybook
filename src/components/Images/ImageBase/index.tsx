import { BaseSyntheticEvent, CSSProperties } from "react";

import BoxBase, { BoxBaseProps } from "src/components/Boxs/BoxBase";

export interface ImageBaseProps extends BoxBaseProps {
    onErrorSrc: string;
    src: string;
    alt?: string;
    styleImage?: CSSProperties;
}

const ImageBase = (props: ImageBaseProps) => {
    const {
        onErrorSrc,
        styleImage,
        src,
        alt,
        sizeWidth = null,
        sizeHeight = null,
        ...rest
    } = props;

    const imageStyle: CSSProperties = {
        width: "inherit",
        height: "inherit",
        ...styleImage,
    };

    const handleErrorWhenLoadImageFail = (e: BaseSyntheticEvent) => {
        e.target.onError = null;
        e.target.src = onErrorSrc;
        e.target.alt = "error";
    };
    return (
        <BoxBase {...rest}>
            <img src={src} alt={alt} style={imageStyle} onError={handleErrorWhenLoadImageFail} />
        </BoxBase>
    );
};

export default ImageBase;
