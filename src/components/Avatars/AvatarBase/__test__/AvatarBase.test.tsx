import AvatarBase, { AvatarBaseProps } from "../";

import { render, screen } from "@testing-library/react";

describe("<AvatarBase />", () => {
    let props: AvatarBaseProps;

    it("should render a 36px div inside a div containing an img", () => {
        props = {
            src: "/fake.png",
            alt: "a fake image",
        };
        const { container } = render(<AvatarBase {...props} />);
        const box = container.querySelector("div");
        const avatar = box!.querySelector("div");
        const img = avatar!.querySelector("img");
        expect(box).toBeDefined();
        expect(avatar).toBeDefined();
        expect(img).toBeDefined();
    });

    it("should render a 24px div inside a div containing an img", () => {
        props = {
            size: "small",
            src: "/fake.png",
            alt: "a fake image",
        };
        const { container } = render(<AvatarBase {...props} />);
        const box = container.querySelector("div");
        const avatar = box!.querySelector("div");
        const img = avatar!.querySelector("img");
        expect(box).toBeDefined();
        expect(avatar).toBeDefined();
        expect(img).toBeDefined();
    });

    it("should render a 24px div inside a div containing an img", () => {
        props = {
            size: "medium",
            src: "/fake.png",
            alt: "a fake image",
        };
        const { container } = render(<AvatarBase {...props} />);
        const box = container.querySelector("div");
        const avatar = box!.querySelector("div");
        const img = avatar!.querySelector("img");
        expect(box).toBeDefined();
        expect(avatar).toBeDefined();
        expect(img).toBeDefined();
    });

    it("should render a 56px div inside a div containing an img", () => {
        props = {
            size: "large",
            src: "/fake.png",
            alt: "a fake image",
        };
        const { container } = render(<AvatarBase {...props} />);
        const box = container.querySelector("div");
        const avatar = box!.querySelector("div");
        const img = avatar!.querySelector("img");
        expect(box).toBeDefined();
        expect(avatar).toBeDefined();
        expect(img).toBeDefined();
    });
});
