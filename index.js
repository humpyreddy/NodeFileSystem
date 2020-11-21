const fs = require('fs')
const express = require('express')
const dayjs = require('dayjs');
const { Dayjs } = require('dayjs');
const app = express();
const currentTimeStamp = dayjs().format("YYYY-MM-DD")+'_'+dayjs().format("HH")+'-'+dayjs().format("mm")+'-'+dayjs().format('ss')
const timeStamp = dayjs().format("dddd, MMMM D YYYY")+' '+dayjs().format("h:mm:ss a")



app
    .get("/createFile",(req,res)=>{
        fs.writeFile(`timestamps/${currentTimeStamp}.txt`,timeStamp,(err)=>{
            if(err) throw err;
            console.log('save/created')
        })
        res.status(200).send(`<h1>File Created<h1>`)

     })
     .get("/retrieveFiles",(req,res)=>{
         fs.readdir('./timestamps/',(err,files)=>{
             files.forEach(file=>{
                 console.log(file)
             })
         })
         res.status(200).send(`<h1>Retrieved Files<h1>`)

     })
    .listen(7000)