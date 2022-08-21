import React from 'react';

// APIs
import { Typography } from '@mui/material';

interface IProps {
    text: string;
}

const Subtitle: React.FC<IProps> = ({ text }) => (
    <Typography variant="h4">{text}</Typography>
);

export default Subtitle;
