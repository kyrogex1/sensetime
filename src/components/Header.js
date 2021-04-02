import React from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'

const Header = props => {

    return (
        <Box mb={4}>
            <AppBar position="static" m="20px">
                <Toolbar>      
                        <Button color="inherit">
                            <Link to="/" style={{'textDecoration' : 'none', 'color' : 'inherit'}}>
                            Task 1
                            </Link>
                        </Button>     
                        <Button color="inherit">
                            <Link to="/tree" style={{'textDecoration' : 'none', 'color' : 'inherit'}}>
                            Task 2
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/apiCaller" style={{'textDecoration' : 'none', 'color' : 'inherit'}}>
                            Task 3
                            </Link>
                        </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
