import UserCard, { anonymousAvatarLink, IUserProps } from "..";

import { render } from "@testing-library/react";

describe("<UserCard /> has", () => {
    const reuseProps: IUserProps = {
        email: "binhtt@gmail.com",
        name: "123",
        onUpdate: () => {},
        onChangeStatus: () => {},
        isActive: true,
        userId: "1",
    };
    it("avatar should is anonymous link when avatar is undefine", () => {
        const { getByAltText } = render(<UserCard {...reuseProps} />);
        const image = getByAltText(reuseProps.email);

        expect(image).toHaveAttribute("src", anonymousAvatarLink);
    });

    it("avatar should render image if the avatar is not undefined", () => {
        const demoLink =
            "https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg";
        const { getByAltText } = render(<UserCard {...reuseProps} avatar={demoLink} />);
        const image = getByAltText(reuseProps.email);

        expect(image).toHaveAttribute("src", demoLink);
    });
});
