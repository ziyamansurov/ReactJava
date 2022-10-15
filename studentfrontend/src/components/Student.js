import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import { useState ,useEffect} from 'react'
import Button from '@mui/material/Button';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { EditStudent } from './students/edit';


const studentsDump = [
  {
    id: 1,
    name: 'Ziya',
    surname: 'Mansurov'
  }
]
export default function Student() {
 const paperStyle={padding:'50px 20px',width:600,margin:'30px auto'}
 const myStyle={margin:'15px auto'}
 const [name,setName]=useState('')
 const [surname,setSurname]=useState('')
 const [refetch, setRefetch]=useState(true)
 const [chosenStudent, setChosenStudent] = useState({})
 
 
 const [students,setStudents]=useState([])
const deleteStudent=(e,_id)=>{
  e.preventDefault()
  fetch("http://127.0.0.1:8080/student/delete/"+_id,{
  method:"POST",
  headers:{"Content-Type":"application/json"},



  }).then(async (res)=>{
  
    // console.log( await res.json())
    alert("Student deleted!!!")
    setRefetch(true)
  })

  // fetch("https://oxu.az/").then(()=>{
  //   alert("Student added successfully")
  //  })
  
}

 const onInsert=(e)=>{
e.preventDefault()
const student={name,surname}
// console.log(student)
fetch("http://127.0.0.1:8080/student/save",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(student)

}).then(()=>{
 alert("Student added successfully")
 setRefetch(true)
//  getData()
//  setStudents(...students, {name,surname})
}

)}


const buttonDesign={ backgroundColor: 'red',color:"white",border:'2px',borderRadius:'5px', margin: '5px'}

const getData=()=>{
  fetch("http://127.0.0.1:8080/student/list")

  .then(res=>res.json())
  .then((result)=>{
    setStudents(result)
    setRefetch(false)
  })
}
useEffect(()=>{
 getData()
},[refetch])

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });



const [open, setOpen] = React.useState(false);

let myname
// let myid
let mysurname;

// id,name,surname
const handleClickOpen = (chosenStudent) => {
  setChosenStudent(chosenStudent)
  setOpen(true);
  // myid=id
  // myname=name
  // mysurname=surname

};

const handleClose = () => {
  setOpen(false);
};
 







 


    return (
      <>
      <div>
    {/* <Button variant="outlined" onClick={handleClickOpen}>
      Open form dialog
    </Button> */}
    {open&&<EditStudent open={open} handleClose={handleClose} setRefetch={setRefetch} data={chosenStudent}/>}
  </div>
  <Box 
      component="form"
      display="flex"
     justifyContent="center"
     alignItems="center"
      minHeight="100vh"
      // justifyContent={'center'}
      // alignItems={'center'}
      //  display="flex"
  // justifyContent="center"
  // alignItems="center"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Container >
      
     
      
        <Paper  elevation={3} style={paperStyle}>
          <h1 style={{color:'cyan'}}><u>Add Student</u></h1>
     
    <form  noValidate autoComplete='off'>
       <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
       
       
       <TextField id="filled-basic" style={myStyle} label="Student Surname" variant="outlined" fullWidth m={20}
       value={surname}
       onChange={(e)=>setSurname(e.target.value)}
       />
       {/* {name}
       {surname} */}
       <Button variant="contained" color='success'  onClick={onInsert}>Submit</Button>
 </form>
  </Paper>
  <h1>Students</h1> 

  <Paper elevation={3} style={paperStyle}>
  {students.map(student=>(
    <Paper elevation={6 } style={{margin:"10px",padding:'15px',textAlign:"left", display:'flex', justifyContent: 'space-between'}} key={student.id}>
      <p>Id: {student.id}   {student.name} {student.surname} </p>
       <div>
       <Button style={buttonDesign} onClick={(e)=>deleteStudent(e,student.id)} variant="outlined"> Delete</Button>
    
    
    <Button  style={buttonDesign} onClick={()=>{handleClickOpen(student)}}>
    Edit
  </Button>
       </div>
      {/* onClick={(e)=>editStudent(e,student.id,student.name,student.surname)} */}

      </Paper>
    
  ))}


</Paper> 
    </Container> 

   
      {/* // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      // <TextField id="filled-basic" label="Filled" variant="filled" />
      // <TextField id="standard-basic" label="Standard" variant="standard" /> */}
     </Box>
      </>
   

 





  );
}




