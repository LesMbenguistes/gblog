import React from 'react';

// APIs
import { Route, Routes } from 'react-router-dom';

// Pages
import { Home, Article, NotFound } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<Article />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
