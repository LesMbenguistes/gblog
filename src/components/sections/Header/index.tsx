import React from 'react';

// APIs
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Components
import { Title, Searchbar } from '../..';

//  Helpers
import { Routes } from '../../../types';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                style={{ backgroundColor: '#e1dfdd', padding: '15px 0' }}
            >
                <Toolbar>
                    <Title text="Gblog" />

                    <Searchbar />

                    <ButtonAdd text="Create Article" />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;

const ButtonAdd = ({ text }: { text: string }) => (
    <Link to={Routes.DOCUMENTS}>
        <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ marginLeft: 3, backgroundColor: '#000' }}
        >
            {text}
        </Button>
    </Link>
);
