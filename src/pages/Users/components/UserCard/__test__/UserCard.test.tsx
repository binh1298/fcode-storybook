import UserCard, { anonymousAvatarLink, IUserProps } from "..";

import { fireEvent, render, screen } from "@testing-library/react";

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

    it("label of change status button is DEACTIVE when status is active", () => {
        render(<UserCard {...reuseProps} />);
        let btnTest = screen.getByRole("button", {
            name: /DEACTIVE/i,
        });
        expect(btnTest).toBeInTheDocument();
    });

    it("label of change status button is ACTIVE when status is deactive", () => {
        render(<UserCard {...reuseProps} isActive={false} />);
        let btnTest = screen.getByRole("button", {
            name: /ACTIVE/i,
        });
        expect(btnTest).toBeInTheDocument();
    });

    it("action when click UPDATE button", () => {
        let updatedId: string = "";
        let userId = "user1";
        let props: IUserProps = {
            ...reuseProps,
            userId: userId,
            onUpdate: (userId) => {
                updatedId = userId;
            },
        };
        render(<UserCard {...props} />);
        const UserCardButtons = screen.getByTestId("UserCard__buttons").querySelectorAll("button");
        const UpdateButton = UserCardButtons[0];
        fireEvent.click(UpdateButton!);
        expect(updatedId).toBe(userId);
    });

    it("action when click CHANGE STATUS button", () => {
        let updatedId: string = "";
        let userId = "user1";
        let props: IUserProps = {
            ...reuseProps,
            userId: userId,
            onChangeStatus: (userId) => {
                updatedId = userId;
            },
        };
        render(<UserCard {...props} />);
        const UserCardButtons = screen.getByTestId("UserCard__buttons").querySelectorAll("button");
        const ChangeStatusButton = UserCardButtons[1];
        fireEvent.click(ChangeStatusButton!);
        expect(updatedId).toBe(userId);
    });
});
