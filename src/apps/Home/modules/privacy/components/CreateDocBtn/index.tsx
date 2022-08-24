import React from 'react';

// APIs
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

interface IProps {
    text: string;
}

export default function CreateDocBtn({ text }: IProps) {
    return (
        <Button
            variant="contained"
            startIcon={<Add />}
            sx={{ marginLeft: 3, backgroundColor: '#000' }}
        >
            {text}
        </Button>
    );
}
