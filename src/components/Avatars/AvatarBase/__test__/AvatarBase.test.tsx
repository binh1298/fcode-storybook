import AvatarBase, { AvatarBaseProps } from "../";

import { render, screen } from "@testing-library/react";
import TestThemeProvider from "src/test-utils/TestThemeProvider";
import replyTheme from "src/theme/replyTheme";

describe("<AvatarBase />", () => {
    let props: AvatarBaseProps;

    const TestComponent = (props: AvatarBaseProps) => (
        <TestThemeProvider>
            <AvatarBase {...props} />
        </TestThemeProvider>
    );

    it("should render image with default stats", () => {
        props = {
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<TestComponent {...props} />);
        const avatarBaseRoot = screen.getByTestId("AvatarBase_root");
        const img = avatarBaseRoot.querySelector("img");

        expect(avatarBaseRoot).toHaveStyle(`
            width: 36px;
            height: 36px;
            borderWidth: 1px;
            borderColor: ${replyTheme.palette.primary.light};
        `);
        expect(img).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with small size", () => {
        props = {
            size: "small",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<TestComponent {...props} />);
        const avatarBaseRoot = screen.getByTestId("AvatarBase_root");
        const img = avatarBaseRoot.querySelector("img");

        expect(avatarBaseRoot).toHaveStyle(`
            width: 24px;
            height: 24px;
            borderWidth: 1px;
            borderColor: ${replyTheme.palette.primary.light};
        `);
        expect(img).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with medium size", () => {
        props = {
            size: "medium",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<TestComponent {...props} />);
        const avatarBaseRoot = screen.getByTestId("AvatarBase_root");
        const img = avatarBaseRoot.querySelector("img");

        expect(avatarBaseRoot).toHaveStyle(`
            width: 36px;
            height: 36px;
            borderWidth: 1px;
            borderColor: ${replyTheme.palette.primary.light};
        `);
        expect(img).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });

    it("should render image with large size", () => {
        props = {
            size: "large",
            src: "/fake.png",
            alt: "a fake image",
        };
        render(<TestComponent {...props} />);
        const avatarBaseRoot = screen.getByTestId("AvatarBase_root");
        const img = avatarBaseRoot.querySelector("img");

        expect(avatarBaseRoot).toHaveStyle(`
            width: 56px;
            height: 56px;
            borderWidth: 1px;
            borderColor: ${replyTheme.palette.primary.light};
        `);
        expect(img).toBeDefined();
        expect(img).toHaveAttribute("alt", "a fake image");
        expect(img).toHaveAttribute("src", "/fake.png");
    });
});
