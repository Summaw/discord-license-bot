const express = require('express')
const app = express.Router()
const Key = require("../models/key");
const User = require("../models/users");
const moment = require('moment');


app.get('/addKey', async (req, res) => {
    const {key,type} = req.query;
    try {
        const keyx = await Key.create({
            key,
            type
          });

          res.status(200).json(keyx)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


app.get('/check', async (req, res) => {
  const { key } = req.query;

    const keyx = await Key.findOne({ key });
    if(!keyx){
        res.status(500).json({message: 'Key not found.'})
    } else {
        res.status(200).json({message: 'Key is valid'})
    }
})


app.get('/userInfo', async (req, res) => {
    const { key } = req.query;

    const keyx = await User.findOne({ key });
    console.log(keyx)
    if(!keyx){
        res.status(500).json({message: 'Key not found.'})
    } else {
        res.status(200).json({message: 'User found!', key: key, user: keyx.username, expiretime: keyx.expiretime, userid: keyx.userid })
    }
})

app.get('/addUser', async (req, res) => {
    const {key,user,userid} = req.query;


    const keyx = await Key.findOne({ key });
    if(!keyx){
        res.status(500).json({message:'key not found'})
    } else {
        console.log(keyx)
        if(keyx.type === 'month') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(30, 'd').format(),
                key:req.query.key,
                userid:userid
              });
              res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
        else if (keyx.type === 'day') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(1, 'd').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
        else if (keyx.type === 'lifetime') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(90*356, 'd').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        } else if (keyx.type === 'week'){
            const userx = await User.create({
                username: user,
                expiretime:moment().add(7, 'd').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
        else if (keyx.type === '5hour') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(5, 'h').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
        else if (keyx.type === '10hour') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(10, 'h').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
        else if (keyx.type === '15hour') {
            const userx = await User.create({
                username:user,
                expiretime:moment().add(15, 'h').format(),
                key:req.query.key,
                userid:userid
            });
            res.status(200).json(userx)
            const removekey = await Key.deleteOne({ key })
            console.log(removekey)
        }
    }


})

module.exports = app