import AvatarBase, { AvatarBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<AvatarBase />", () => {
    let props: AvatarBaseProps;

    it("should render image with default stats", () => {
        props = {
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<AvatarBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        const avatar = screen.getByTestId("muiAvatar");
        const img = avatar!.querySelector("img");
        expect(muiBox).toBeDefined();
        expect(muiBox).toHaveStyle("width: 36px");
        expect(avatar).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with small size", () => {
        props = {
            size: "small",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<AvatarBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        const avatar = screen.getByTestId("muiAvatar");
        const img = avatar!.querySelector("img");
        expect(muiBox).toBeDefined();
        expect(muiBox).toHaveStyle("width: 24px");
        expect(avatar).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with medium size", () => {
        props = {
            size: "medium",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<AvatarBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        const avatar = screen.getByTestId("muiAvatar");
        const img = avatar!.querySelector("img");
        expect(muiBox).toBeDefined();
        expect(muiBox).toHaveStyle("width: 36px");
        expect(avatar).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with large size", () => {
        props = {
            size: "large",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<AvatarBase {...props} />);
        const muiBox = screen.getByTestId("muiBox");
        const avatar = screen.getByTestId("muiAvatar");
        const img = avatar!.querySelector("img");
        expect(muiBox).toBeDefined();
        expect(muiBox).toHaveStyle("width: 56px");
        expect(avatar).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });
});
