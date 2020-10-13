import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import "./Navigation.css";
import DropDownItem from './DropDownItem';
import clsx from 'clsx';
import MobileNav from './MobileNav';
import logo from '../logo.svg'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        position: "absolute",
        right: "0",
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    toolBar: {
        backgroundColor: "#fff",
        color: "#000",
        justifyContent: "flex-start",
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            paddingTop: ".5rem",
            paddingBottom: ".5rem"
        }
    },
    logo: {
        height: "2.9rem",
        width: "auto",
        [theme.breakpoints.down('sm')]: {
            height: "2.3rem"
        }
    }    
}));

const styleMenu = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    }
}));

const menuList = [
    {
        title: "Awards & Ratings",
        subNav: ["All Ratings", "Award Summaries", "Award Make"]
    },
    {
        title: "Reviews",
        subNav: ["All Reviews", "Customer Reviews", "Expert Reviews"]
    },
    {
        title: "Cars For Sales",
        subNav: []
    },
    {
        title: "Sale My Car",
        subNav: []
    },
    {
        title: "Business",
        subNav: []
    }
]

const Navigation = () => {
    const classes = useStyles();
    const navClasses = styleMenu();
    const [isOpened, setIsOpened] = React.useState(false);

    const toggleDrawer = () => (event) => {
        setIsOpened(false);
    }

    const handleClick = (event) => {
        setIsOpened(true);
    };
    return (
        <AppBar position="relative" className={classes.toolBar}>
            <Toolbar variant="dense" className={classes.toolBar}>
                <a href="/" title="J.D. Power">
                    <img src={logo} className={classes.logo} alt="J.D. Power" />
                </a>
                <IconButton
                    edge="end"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}>
                    <MenuIcon className="menu-icon" />
                </IconButton>
                <ul className={clsx(navClasses.root, 'nav')}>
                    {
                        menuList.map((menu, index) => {
                            return (
                                <li className={clsx('nav-item-wrap')} key={'nav-item-wrap' + index}>
                                    {
                                        menu.subNav.length !== 0 &&
                                        <DropDownItem
                                            MenuName={menu.title}
                                            MenuList={menu.subNav} />
                                    }
                                    {
                                        menu.subNav.length === 0 &&
                                        <a href="/" className="nav-item">
                                            {menu.title}
                                        </a>
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </Toolbar>
            <MobileNav
                isOpened={isOpened}
                toggleDrawer={toggleDrawer}
                MenuList={menuList}
            />

        </AppBar>
    )
}

export default Navigation;