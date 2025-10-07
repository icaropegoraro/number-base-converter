import { Box, TextField, Paper, Typography, Stack } from '@mui/material'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { useState, useEffect } from 'react'
import { convertNumber } from '../../services/index.js'

export const Home = () => {
    const [number, setNumber] = useState('1010')
    const [base, setBase] = useState('2')
    const [newBase, setNewBase] = useState('10')

    const [result, setResult] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        const handler = setTimeout(() => {
            const {
                result: convertedResult,
                error: conversionError
            } = convertNumber(number, base, newBase)

            setResult(convertedResult)
            setError(conversionError)
        }, 300)

        return () => {
            clearTimeout(handler)
        }
    }, [number, base, newBase])

    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    borderRadius: 4,
                    width: '100%',
                    maxWidth: 1100,
                    backgroundColor: '#ffffff',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom align="center" fontWeight="bold" color="primary">
                    Conversor de bases 🔢
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
                    <Stack spacing={2} sx={{ flex: 1 }}>
                        <TextField
                            label="Número"
                            value={number}
                            onChange={(e) => {
                                const valorLimpo = e.target.value.replace(/[^0-9a-zA-Z]/g, '').toUpperCase()
                                setNumber(valorLimpo)
                            }}
                            error={!!error}
                            helperText={error || ' '}
                        />
                        <TextField
                            label="Base"
                            type="number"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                        />
                    </Stack>

                    <SyncAltIcon color="action" sx={{ fontSize: 40 }} />

                    <Stack spacing={2} sx={{ flex: 1 }}>
                        <TextField
                            label="Resultado"
                            value={result}
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                    color: 'green',
                                },
                            }}
                            helperText={error || ' '} 
                        />
                        <TextField
                            label="Nova Base"
                            type="number"
                            value={newBase}
                            onChange={(e) => setNewBase(e.target.value)}
                        />
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    )
}