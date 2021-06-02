import { useState } from "react";

import clsx from "clsx";

import { makeStyles, useTheme, ThemeProvider } from "@material-ui/core";
import {
    Menu as MenuIcon,
    ChevronRight as ChevronRightIcon,
    ChevronLeft as ChevronLeftIcon,
    Inbox as InboxIcon,
    Mail as MailIcon,
} from "@material-ui/icons";

import DrawerBase, { DrawerBaseProps } from ".";
import replyTheme from "../../../theme/replyTheme";
import AppBarBase from "../../AppBars/AppBarBase";
import BoxBase from "../../Boxs/BoxBase";
import IconButtonBase from "../../Buttons/IconButtonBase";
import CssBaselineBase from "../../CssBaselines/CssBaselineBase";
import DividerBase from "../../Dividers/DividerBase";
import ListItemIconBase from "../../ListItemIcons/ListItemIconBase";
import ListItemTextBase from "../../ListItemTexts/ListItemTextBase";
import ListItemBase from "../../ListItems/ListItemBase";
import ListBase from "../../Lists/ListBase";
import ToolbarBase from "../../Toolbars/ToolbarBase";
import TypographyBase from "../../Typography/TypographyBase";

import { Story, Meta } from "@storybook/react";

export default {
    title: "Components/DrawerBase",
    subcomponents: {
        DrawerBase,
        AppBarBase,
        BoxBase,
        IconButtonBase,
        CssBaselineBase,
        ToolbarBase,
        TypographyBase,
    },
    component: DrawerBase,
    decorators: [
        (Story) => {
            return (
                <ThemeProvider theme={replyTheme}>
                    <Story />
                </ThemeProvider>
            );
        },
    ],
} as Meta;

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(10) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(12) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export const MiniVariant: Story<DrawerBaseProps> = (args) => {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BoxBase className={classes.root}>
            <CssBaselineBase />
            <AppBarBase
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <ToolbarBase>
                    <IconButtonBase
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButtonBase>
                    <TypographyBase variant="h6" noWrap>
                        Mini variant drawer
                    </TypographyBase>
                </ToolbarBase>
            </AppBarBase>
            <DrawerBase
                {...args}
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <BoxBase className={classes.toolbar}>
                    <IconButtonBase onClick={handleDrawerClose} color="inherit">
                        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButtonBase>
                </BoxBase>
                <DividerBase />
                <ListBase>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItemBase key={text}>
                            <ListItemIconBase>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIconBase>
                            <ListItemTextBase primary={text} />
                        </ListItemBase>
                    ))}
                </ListBase>
                <DividerBase />
                <ListBase>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItemBase key={text}>
                            <ListItemIconBase>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIconBase>
                            <ListItemTextBase primary={text} />
                        </ListItemBase>
                    ))}
                </ListBase>
            </DrawerBase>
            <BoxBase component="main" className={classes.content}>
                <BoxBase p={3} />
                <TypographyBase paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim
                    praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis
                    tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio
                    aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu
                    scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                    massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi
                    tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </TypographyBase>
                <TypographyBase paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget
                    nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque
                    volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus.
                    Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
                    Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa
                    eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                    tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
                    Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
                    sagittis orci a.
                </TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};
