
const express=require('express')
const router=express.Router();
const Person = require('./../models/person');

router.post('/', async (req,res)=>{
    try{
      
        const data=req.body//Assuming the request body contains the person data

        //create a new person document using the Mongoose model
        const newperson=new Person(data)

        const response=await newperson.save()
        console.log('data saved');
        res.status(200).json(response)
    }
    catch(err)
    {
      console.log(err)
      res.status(500).json({error:'Internal server error'})
    }
})

//get method to get the person

router.get('/',async (req,res)=>{
    try{
        const data= await Person.find()
        console.log('data fetched');
        res.status(200).json(data)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})


router.get('/:workType',async (req,res)=>{

    try{
    const workType=req.params.workType
    if(workType=='chef'||workType=='manager'||workType=='waiter')
    {
       const response=await Person.find({work:workType})
       console.log('response fetched')
       res.status(200).json(response); 
    }
    else
    {
      res.status(404).json({error:'Invalid work type'})
    }
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})


router.put('/:id', async (req,res)=>{
    try{
         const personid=req.params.id;
         const updatedpersondata=req.body;

         const response=await Person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,
            runValidators:true
         })

         if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        
         console.log('data updated')
         res.status(200).json(response); 
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({err:'Internal server error'})
    }
})


router.delete('/:id',async (req,res)=>{
try{
    const personid=req.params.id;
    const response=await Person.findByIdAndDelete(personid)
    
    if (!response) {
        return res.status(404).json({ error: "Person not found" });
    }
    
     console.log('data deleted')
     res.status(200).json({"message": 'Person deleted successfully'});
}
catch(err){
    
        console.log(err)
        res.status(500).json({err:'Internal server error'})    
}
})

module.exports=router

//comments added