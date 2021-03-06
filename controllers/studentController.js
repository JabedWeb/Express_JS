const fs=require('fs');
const path=require('path');

//student data model
const students=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/students.json')).toString());

//get latest id 
const getLatestId=()=>{
    if(students.length>0){
        return students[students.length-1].id+1 ;
    }
    else{
        return 1;
    }
    
}

//Get All Students
const getAllStudents=(req,res)=>{
    if(students.length>0){
        res.status(200).json(students);
    }
    else{
        res.status(404).json({
            message : 'student data not found'
        })
    }
   
    // res.send('Ami');
}

//Get single Students

const getSingleStudent=(req,res)=>{

    let id=req.params.id;
    if(students.some(data=>data.id==id)){
        res.status(200).json(students.find(data=> data.id==id))
    }
    else{
        res.status(404).json({
            message :'This student data not found'
        })
    }
    
}

const createStudent=(req,res)=>{
    if(req.body.name!= '' || req.body.skill!= '' || req.body.age!=''){
        students.push({
            id : getLatestId(),
            name : req.body.name,
            age : req.body.age,
            skill : req.body.skill
        });
        
    fs.writeFileSync(path.join(__dirname,'../data/students.json'), JSON.stringify(students) );
        
    res.json({
        message : "students data Created successfully"
    });
    }
    else{
        res.status(400).json({
            message : 'You have to put from data'
        })
    }

}
const updateStudent=(req,res)=>{
    res.send('we are updating students Data');
}
const deleteStudent=(req,res)=>{
    let id =req.params.id;
    if(students.some(data=>data.id==id)){
        let students_data=students.filter(data=>data.id!=id);
        fs.writeFileSync(path.join(__dirname,'../data/students.json'),JSON.stringify(students_data))
        res.status(202).json({
            message : " Students Data Deleted"
        })
    }
    else{
        res.status(400).json({
            message :'Students not found'
        })
    }
}
module.exports={
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent
}