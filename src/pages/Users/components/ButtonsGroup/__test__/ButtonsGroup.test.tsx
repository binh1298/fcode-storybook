import ButtonGroups, { IActionProps } from "..";

import { fireEvent, render, screen } from "@testing-library/react";

describe("<ButtonsGroup /> has", () => {
    const reuseProps: IActionProps = {
        onUpdate: () => {},
        onChangeStatus: () => {},
        isActive: true,
        userId: "1",
    };
    it("action when click UPDATE button", () => {
        let updatedId: string = "";
        let userId = "user1";
        let props: IActionProps = {
            ...reuseProps,
            userId: userId,
            onUpdate: (userId) => {
                updatedId = userId;
            },
        };
        render(<ButtonGroups {...props} />);
        const UserCardButtons = screen.getByTestId("UserCard__buttons").querySelectorAll("button");
        const UpdateButton = UserCardButtons[0];
        fireEvent.click(UpdateButton!);
        expect(updatedId).toBe(userId);
    });

    it("action when click CHANGE STATUS button", () => {
        let updatedId: string = "";
        let userId = "user1";
        let props: IActionProps = {
            ...reuseProps,
            userId: userId,
            onChangeStatus: (userId) => {
                updatedId = userId;
            },
        };
        render(<ButtonGroups {...props} />);
        const UserCardButtons = screen.getByTestId("UserCard__buttons").querySelectorAll("button");
        const ChangeStatusButton = UserCardButtons[1];
        fireEvent.click(ChangeStatusButton!);
        expect(updatedId).toBe(userId);
    });

    it("label of change status button is ACTIVE when status is deactive", () => {
        render(<ButtonGroups {...reuseProps} isActive={false} />);
        let btnTest = screen.getByRole("button", {
            name: /ACTIVE/i,
        });
        expect(btnTest).toBeInTheDocument();
    });
});
