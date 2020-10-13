import React from 'react';
import { Drawer, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import logo from '../../logo.svg'
import "./MobileNav.scss";
import clsx from 'clsx';
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
        [theme.breakpoints.down('sm')]: {
            paddingTop: ".5rem",
            paddingBottom: ".5rem"
        }
    },
    logo: {
        height: "2.9rem",
        [theme.breakpoints.down('sm')]: {
            height: "2.3rem"
        }
    }
}));

const MobileNav = ({ isOpened, toggleDrawer, MenuList }) => {
    const classes = useStyles();
    return (
        <div className="mobile-nav">
            <Drawer
                anchor={'top'}
                open={isOpened}
                className="mobile-drawer"
                onClose={toggleDrawer()}
            >
                <Toolbar variant="dense" className={classes.toolBar}>
                    <a href="/" title="J.D. Power">
                        <img src={logo} className={classes.logo} alt="J.D. Power" />
                    </a>
                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer()}>
                        <ClearIcon className="menu-icon" />
                    </IconButton>
                </Toolbar>
                <ul className="nav">
                    {
                        MenuList.map((menu, index) => {
                            return (
                                <li className='nav-item-wrap' key={'nav-item-wrap' + index}>
                                    {
                                        menu.subNav.length !== 0 &&
                                        <DropDownList
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
            </Drawer>
        </div>
    )
};

const DropDownList = ({ MenuName, MenuList }) => {
    const [isOpened, setInOpen] = React.useState(false);
    const handleClick = () => {
        setInOpen(!isOpened);
    };
    
    return (
        <div>
            <button className={clsx({ "nav-item": true, "is-opened": isOpened })} onClick={handleClick}>
                <span className="nav-item-span">
                    {MenuName}
                </span>
            </button>
            <ul className={clsx({ "nav-dropdown-list": true, "is-opened": isOpened })}>
                {
                    MenuList.map((menu, index) => {
                        return (
                            <li key={'menu-item' + index}><a href="/" className="drop-down-link">{menu}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MobileNav;