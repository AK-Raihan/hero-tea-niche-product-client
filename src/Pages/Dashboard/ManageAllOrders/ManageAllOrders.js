import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth/useAuth';
import { TextField } from '@mui/material';

const ManageAllOrders = () => {

    const[allOrders, setAllOrders]=useState([])
    const[status, setStatus]=useState('')
    const { user } = useAuth();

    const handleStatus = (e)=>{
        setStatus(e.target.value);
    }

    useEffect(()=>{
        fetch('http://localhost:5000/myOrder')
        .then(res=>res.json())
        .then(data=>setAllOrders(data));
    },[]);


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert('successfully deleted');
            }
          });
        console.log(id);
      };

      const handleUpdate= (id)=>{
          fetch(`http://localhost:5000/updateStatus/${id}`, {
              method: "PUT",
              headers: {"content-type" : "application/json"},
              body: JSON.stringify({status}),
          })

      }
    return (
        <div>
        <h2>Orders: {allOrders.length}</h2>
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
                <TableHead>
                    <TableRow className="text-start">
                        <TableCell>Buyer</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allOrders.map((row) => (
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
                            <TableCell align="right">
                            <TextField
                            sx={{ width: '25%', m: 1 }}
                            id="standard-basic"
                            onBlur={handleStatus}
                            defaultValue={row.status}
                            variant="standard" />
                            </TableCell>
                            <button onClick={() => handleDelete(row?._id)} className="btn btn-outline-danger">Remove</button>
                            <button onClick={()=> handleUpdate(row?._id)}   className="btn btn-outline-success">Update</button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
};

export default ManageAllOrders;