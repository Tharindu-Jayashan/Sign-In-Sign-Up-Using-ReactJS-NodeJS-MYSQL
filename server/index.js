const e = require('express')
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

const bcrypt = require('bcrypt')
const saltRounds=10;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const mysql=require('mysql')

app.listen(3002, ()=>{
    console.log('server running at port number 3002')
})

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root123',
    database:'database1'
})

app.post('/signUp',(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    const password=req.body.password;

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        db.query('INSERT INTO users (firstName,lastName,email,password) VALUES(?,?,?,?)',[firstName,lastName,email,hash],(err,result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                console.log('Sign Up Successful')
            }
        })
    })
    
})

app.post('/signIn',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    db.query('SELECT password from USERS WHERE email=?',[email],(err,result)=>{
        bcrypt.compare(password,result[0].password,(err2,result2)=>{
            if(result2){
                console.log('Sign In successful')
                res.send('Sign In successful')
            }
            if(err2){
                console.log(err2)
            }
        })
    })
})