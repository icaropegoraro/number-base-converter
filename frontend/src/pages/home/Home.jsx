import { Box, TextField } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'

export const Home = () => {

    const [number, setNumber] = useState()
    const [base, setBase] = useState()
    const [newBase, setNewBase] = useState()
    const [result, setResult] = useState()

    

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
            }}
        >
            <TextField
                label="Número"
                variant="outlined"
                fullWidth
                sx={{ maxWidth: 250 }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <TextField
                label="Base"
                variant="outlined"
                sx={{ width: 80 }}
                value={base}
                onChange={(e) => setBase(e.target.value)}
            />

            <ArrowForwardIcon sx={{ fontSize: 40, color: "#555" }} />

            <TextField
                label="Nova base"
                variant="outlined"
                sx={{ width: 80 }}
                value={newBase}
                onChange={(e) => setNewBase(e.target.value)}
            />

            <TextField
                label="Resultado"
                variant="outlined"
                fullWidth
                sx={{ maxWidth: 250 }}
                value={result}
                disabled
            />
        </Box>
    )
}