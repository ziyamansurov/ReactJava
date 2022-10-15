import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export function EditStudent({open, handleClose, data, setRefetch}){
    const [name,setName] = useState(data.name)
    const [surname, setSurname] = useState(data.surname)

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleSurnameChange=(e)=>{
        setSurname(e.target.valur)
    }
    const handleSave=()=>{
        let student={
            name, surname
        }
       
        fetch(`http://127.0.0.1:8080/student/update/${data.id}`,{
             method:"POST",
            headers:{"Content-Type":"application/json"},
             body:JSON.stringify(student)

        }).then(()=>{
        alert("Student edit successfully")
        setRefetch(true)
        handleClose()
        //  setStudents(...students, {name,surname})
        })  
    }

    return (
        <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Student Data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter student name and surname
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          value={name}
          onChange={handleNameChange}
          id="name"
          label="Student Name"
          type="text"
          fullWidth
          variant="standard"
        />
         <TextField
         
          margin="dense"
          id="surname"
          value={surname}
          onChange={handleSurnameChange}
          label="Student Surname"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
    )
}