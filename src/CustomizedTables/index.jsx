import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: 15,
        padding: "5px"
    },
    body: {
        fontSize: 15,
        padding: "15px 5px 16px 5px"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({  
    tableContainer: {
        position: 'relative'
    },
    table: {
        minWidth: 700,
        [theme.breakpoints.down('sm')]: {
            minWidth: 'auto'
        },
    }, 
    swipBox: {
        position: 'absolute',
        padding: '10px',
        width: '70px',
        height: '50px',
        right: "10px",
        top: "140px",
        textAlign: 'center',
        backgroundColor: '#0071EB',
        boxShadow: '0px 2px 8px 0 rgba(0,0,0,0.5)',
        color: "#ffffff",
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    iconGroup: {
        textAlign: "center"
    },
    handIcon: {
        height: '30px',
        width: '30px'
    },
    arrowIcon: {
        width: "20px"
    }, 
    typography: {
        fontSize: "15px",
        lineHeight: "18px",
        fontFamily: 'Roboto'
    }   
}));

const CustomizedTables = () => {
    const classes = useStyles();
    
    const [ hideSwipeBox, setHideSwipeBox] = useState(localStorage.getItem('hideSwipeBox') && localStorage.getItem('hideSwipeBox') === '1' ? true : false);
    const handleTouchEvent = (event) => {
        localStorage.setItem('hideSwipeBox', 1);
        setHideSwipeBox(true);
    };
    return (
        <TableContainer className={classes.tableContainer} onTouchStart={handleTouchEvent}>
            <Fade timeout={100} in={!hideSwipeBox}>
                <div className={classes.swipBox}>
                    <div className={classes.iconGroup}>
                        <ArrowBackIcon className={classes.arrowIcon}/>
                        <TouchAppOutlinedIcon className={classes.handIcon}/>
                        <ArrowForwardIcon className={classes.arrowIcon}/>
                    </div>
                    <Typography>Swipe</Typography>
                </div>
            </Fade>
            
            <Table aria-label="customized table" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                        <StyledTableCell align="right">Calories</StyledTableCell>
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomizedTables;