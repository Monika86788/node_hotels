const express=require('express')
const router=express.Router()
const Menu=require('./../models/menuitem')
router.post('/', async (req,res)=>{
    try{
      
        const data=req.body//Assuming the request body contains the person data

        //create a new person document using the Mongoose model
        const newmenu=new Menu(data)

        const response=await newmenu.save()
        console.log('menu data saved');
        res.status(200).json(response)
    }
    catch(err)
    {
      console.log(err)
      res.status(500).json({error:'Internal server error'})
    }
})


router.get('/',async (req,res)=>{
    try{
        const data= await Menu.find()
        console.log('menu data fetched');
        res.status(200).json(data)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})
module.exports=router



