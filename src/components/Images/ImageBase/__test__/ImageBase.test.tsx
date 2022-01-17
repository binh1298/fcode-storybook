import ImageBase, { ImageBaseProps } from "../";

import { fireEvent, render } from "@testing-library/react";

const anonymousAvatarLink =
    "https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg";

describe("<ImageBase />", () => {
    it("should show onError Image when src is not render", () => {
        const props: ImageBaseProps = {
            onErrorSrc: anonymousAvatarLink,
            src: "",
            alt: "demo",
        };
        const onError = jest.fn();
        const { getByAltText } = render(<ImageBase {...props} onError={onError} />);
        fireEvent.error(getByAltText("demo"));
        const image = getByAltText("error");
        expect(image).toHaveAttribute("src", anonymousAvatarLink);
    });
});
