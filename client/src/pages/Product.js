import React, { useState, useEffect } from 'react';
import Item from '../components/Card';
import ImageList from '@mui/material/ImageList';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterCriteria, setFilterCriteria] = useState({ category: '', priceRange: '' });
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down('xs')); // True for extra small devices

    useEffect(() => {
        fetchProducts();
    }, [searchKeyword, filterCriteria]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            let url = "/api/getproducts";
            const params = new URLSearchParams({
                search: searchKeyword,
                ...filterCriteria
            });
            const response = await fetch(url + '?' + params.toString());
            const products = await response.json();
            setData(products);
        } catch (error) {
            console.error("DatabaseConnectionException:", error);
        }
        setLoading(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'search') {
            setSearchKeyword(value);
        } else {
            setFilterCriteria(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <Box m={2}>
            <Box display="flex" gap={2} mb={2}>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    value={searchKeyword}
                    onChange={e => handleChange({ target: { name: 'search', value: e.target.value } })}
                />
                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={filterCriteria.category}
                        label="Category"
                        onChange={handleChange}
                        name="category"
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Home">Home</MenuItem>
                        <MenuItem value="Studio">Studio</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                        <MenuItem value="MenuItem_0">MenuItem_0</MenuItem>
                        <MenuItem value="MenuItem_1">MenuItem_1</MenuItem>
                        <MenuItem value="MenuItem_2">MenuItem_2</MenuItem>
                        <MenuItem value="MenuItem_3">MenuItem_3</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={fetchProducts}>Apply Filters</Button>
            </Box>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            ) : (
                <ImageList cols={isXs ? 1 : 4} gap={8} rowHeight='auto'>  {/* Adjust number of columns based on screen size */}
                    {data.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </ImageList>
            )}
        </Box>
    );
}

export default Product;
