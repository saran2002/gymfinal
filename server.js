const express=require('express');
const app=express();
const{users}=require('./usermodel');
const{users2}=require('./usermodel2');
const{cust}=require('./um');
const{users3}=require('./usermodel3');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const bp=require('body-parser');
app.use(express.json())
const cors=require('cors');
app.use(bp.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://SARAN1:SARAN1@cluster0.2qx9w.mongodb.net/GYM_DB")
.then(() => {
    console.info('connect successfully')
})
.catch((e) => {
    console.error(e);
});
app.get('/index',async(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get('/add',async(req,res)=>{
    res.sendFile(__dirname+"/adduser.html")
})
app.get('/feedback',async(req,res)=>{
    res.sendFile(__dirname+"/feedback.html")
})
app.get('/register',async(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
app.get('/workout',async(req,res)=>{
    res.sendFile(__dirname+"/workoutdetail.html")
})
app.get('/admin',async(req,res)=>{
    res.sendFile(__dirname+"/admin.html")
})
app.get('/adminpage',async(req,res)=>{
    res.sendFile(__dirname+"/adminpage.html")
})
app.get('/display',async(req,res)=>{

    res.sendFile(__dirname+"/display.html")
})
app.get('/display2',async(req,res)=>{
    res.sendFile(__dirname+"/display2.html")
})
app.get('/display3',async(req,res)=>{
    res.sendFile(__dirname+"/display3.html")
})
app.get("/cust",async(req,res)=>{
    res.sendFile(__dirname+"/customerlogin.html")
})
app.get("/add",async(req,res)=>{
    res.sendFile(__dirname+"/adduser.html")
})
app.get('/:file',async(req,res)=>{
    res.sendFile(__dirname+"/"+req.params.file)
})
app.get("/",async(req,res)=>{
    res.redirect("https://www.google.com")
})
app.post('/get', async (req,res)=>{
   
    // const email=req.body.email;
    const data= await cust.find();
    // {"email":email}
    console.log(data)
   //console.log(data.length);
    res.json(data);
  
})

app.post('/get2', async (req,res)=>{
  console.log("hi");
    // const email=req.body.email;
    const data1= await users2.find();
    // {"email":email}
    console.log(data1)
   //console.log(data.length);
    res.json(data1);
  
})
app.post('/get3', async (req,res)=>{
   console.log("hi")
    // const email=req.body.email;
    const data1= await users.find();
    // {"email":email}
   //console.log(data.length);
   console.log(data1)
    res.json(data1);
  
})


app.post('/del', async (req,res)=>{
    const mrg=req.body.bt;
    console.log(mrg)
    const data= await cust.find({"name":mrg});
    console.log(data)
    const data1=await users.find({"name":mrg});
    await users.deleteMany({"name":mrg})
    await cust.deleteOne(data[0]);
    res.redirect("/display2") 
})
app.post('/view', async (req,res)=>{
    const mrg=req.body.mrg;
    const data= await users.find({"name":mrg});
    console.log(data);
    res.json(data);
})

app.post('/cuslog', async (req,res)=>{
    // console.log("hi")
    const name=req.body.name;
    const pass=req.body.pass;
    console.log(pass,name)
    const data =await cust.find({name:name,pass:pass})
    if(data.length>0){
        res.redirect("/index");
    }
    else{
        res.redirect("/cust");
    }
    
    

})

app.post('/insert4', async (req,res)=>{
    const name=req.body.name;
    const pass=req.body.pass;
    var user=new cust();
    user.name=name;
    user.pass=pass;
    

    console.log(user);
    await user.save();
   
    res.redirect("/adminpage");
})


app.post("/insert",async(req,res)=>
{
    console.log("hi jgre");
    var user=new users();
    user.name=req.body.name;
    user.mrg=req.body.mrg;
    user.aft=req.body.aft;
    user.eve=req.body.eve;
    user.nig=req.body.nig;
    let date_time = new Date();
    let date = ("0" + date_time.getDate()).slice(-2);
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    let year = date_time.getFullYear();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let time=year + "-" + month + "-" + date + " " + hours + ":" + minutes;
    
    user.time=time;
    //console.log(user);
    await user.save();
    ///console.log("done");
});

app.post("/insert3",async(req,res)=>
{
    console.log("hi jgre");
    var user3=new users3();

    user3.name=req.body.name;
    user3.pno=req.body.pno;
    user3.email=req.body.email  ;
    user3.add=req.body.add;
    user3.h1=req.body.h1;
    user3.w1=req.body.w1;
   // user3.dob=req.body.dob;
    console.log(user3);
    await user3.save();
    console.log("done");
});

app.post("/insert2",async(req,res)=>
{
    console.log("hi jgre");
    var user2=new users2();


    user2.fname=req.body.fname;
    user2.lname=req.body.lname;
    user2.email=req.body.email;
    user2.feed=req.body.feed;

    console.log(user2);
    await user2.save();
    ///console.log("done");
});

app.listen(5000,function(){
    console.log("ok1");
})

