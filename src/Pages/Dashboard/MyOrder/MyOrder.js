import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth/useAuth';



const MyOrder = () => {
    const[orders, setOrders]=useState([])
    const { user } = useAuth();

    useEffect(()=>{
        fetch('http://localhost:5000/myOrder')
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
    console.log(orders);
    return (
        <div>
            <h2>Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow className="text-start">
                            <TableCell>Buyer</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.user}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <button className="btn btn-outline-info">Remove</button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;