import React from 'react';

// APIs
import { Route, Routes } from 'react-router-dom';

// Apps
import { Home } from '../apps';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Router;
