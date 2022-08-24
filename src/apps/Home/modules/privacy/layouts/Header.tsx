import React from 'react';

// APIs
import { Box, AppBar, Toolbar } from '@mui/material';

// Components
import { Title, Searchbar, CreateDocBtn } from '../components';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                style={{ backgroundColor: '#e1dfdd', padding: '12px 0' }}
            >
                <Toolbar>
                    <Title text="Gblog" />

                    <Searchbar />

                    <CreateDocBtn text="Create Article" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
