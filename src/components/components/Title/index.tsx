import React from 'react';

// APIs
import { Typography } from '@mui/material';

interface IProps {
    text: string;
}

const Title: React.FC<IProps> = ({ text }) => (
    <Typography
        variant="h3"
        noWrap
        component="div"
        sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
        }}
    >
        {text}
    </Typography>
);

export default Title;
