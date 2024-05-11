const express = require("express");
const router = express.Router();
const user = require("../models/userSchema")


// router.get("/",(req,res)=>{
//     console.log("connect");
// }); 

router.post("/register", async (req, res) => {
    const { name, status, performance, desc } = req.body;

    if (!name || !status||!performance|| !desc) {
        res.status(422).json("please fill the data in all columns");
    }

    try {

        const preuser = await user.findOne({ name: name });
        console.log(preuser);

        if (preuser) {
            res.status(422).json("this user is already present");
        }
        else {
            const adduser = new user({
                name, status, performance, desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
});

// get user data

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await user.find();
        console.log(userdata);
        res.status(201).json(userdata);
    } catch (error) {
        res.status(422).send(error);
    }
})

// get individual user data

router.get("/getuser/:id", async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const userindividual =  await user.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateuser = await user.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateuser);
        res.status(201).json(updateuser);
    } catch (error) {
        res.status(422).json(error);
    }
})

// delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleteuser = await user.findByIdAndDelete({_id:id});

        console.log(deleteuser);
        res.status(201).json(deleteuser);
    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router;
