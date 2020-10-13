import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { withStyles, Link, makeStyles } from '@material-ui/core';

const linkStyle = makeStyles((theme) => ({
    root: {
        padding: "15px 10px",
        color: "#000",
        fontSize: "16px",
        textDecoration: "none",
        "&:hover": {
            color: "#0071eb",
            textDecoration: "none"
        }
    },
    listItem: {
        "&:hover": {
            backgroundColor: "#fff"
        }
    }
}))

const StyledMenu = withStyles({
    paper: {
        position: "absolute",
        top: "100%",
        left: "0",
        fontSize: "1.6rem",
        textSlign: "left",
        minWidth: "23rem",
        backgroundColor: "#fff",
        paddingTop: ".5rem",
        borderRadius: "0 0 .4rem .4rem",
        boxShadow: "0 .3rem .4rem 0 rgba(0,0,0,.15)"
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
        {...props}
    />
));

const DropDownItem = ({ MenuName, MenuList }) => {
    let classes = linkStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const preventDefault = (event) => event.preventDefault();
    return (
        <div>
            <button className={clsx({ "nav-item": true, "is-opened": anchorEl })} onClick={handleClick}>
                <span className="nav-item-span">{MenuName}</span>
            </button>
            <StyledMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    MenuList.map((menu, index) => {
                        return (
                            <MenuItem onClick={handleClose} key={'menu-item' + index} className={classes.listItem}>
                                <Link href="/" onClick={preventDefault} className={classes.root}>
                                    {menu}
                                </Link>
                            </MenuItem>
                        );
                    })
                }
            </StyledMenu>
        </div>
    );
};

export default DropDownItem;