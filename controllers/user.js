var DateType = require('sequelize');
var db_seq = require('../db').sequelizeDB;
var f_user = require('../models/user');
var s_user = f_user(db_seq,DateType);
const Op = DateType.Op;
var crypto = require('crypto');
var nodemailer = require('nodemailer');

async function addUser(req,res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let emailReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    let userinfo = req.body;
    userinfo['token_exptime'] = new Date().getTime();
    if(emailReg.test(email)){
        let result1 = await s_user.findOne({
            where:{
                email:email
            }
        });
        if(result1!=null){
            res.json({"errcode":1});
        }else {
            let result = await s_user.create(userinfo);
            // console.log(result);
            res.json({"errcode":0});
        }
    }else {
        res.json({"errcode":1});
    }

}
async function login(req,res){
    console.log(req.ip);
    let username = req.query.username;
    let password = req.query.password;

    let result = await s_user.findOne({
        where:{
            [Op.or]:[{username:username},{email:username}],
            password:password
        }
    });
    // console.log(result);
    if(result != null){
        let md5_userid = crypto.createHash('md5').update(result.dataValues.userid.toString()).digest('hex');
        console.log(md5_userid);
        res.json({'errcode':0,'md5':md5_userid});
    }else {
        res.json({'errcode':1});
    }

}
//发送验证码
async function sendVertifyCode(req,res) {
    console.log(req.query);
    let verifyemail = req.query.verifyemail;
    let code = "";
    for(let i=0;i<6;i++){
        code+=Math.floor(Math.random()*10);
    }
    let result = await s_user.update({
        acticode:code,
        token_exptime:new Date().getTime()
    },{
        where:{
            email:verifyemail,
        }
    });
    console.log(result[0]);
    sendEmail('验证码',code,verifyemail);
    res.json({'msg':result[0]});
}
//发送密码
async function sendPWD(req,res) {
    let verifyemail = req.query.verifyemail;
    let verifycode = req.query.verifycode;
    let result = await s_user.findOne({
        where:{
            email:verifyemail,
            acticode:verifycode,
        }
    });
    if(result == null){
        res.json({'errcode':1})
    }else{
        sendEmail('找回密码',result.dataValues.password,verifyemail);
        res.json({'errcode':0})
    }
}
//发送邮件
function sendEmail(title,content,email){
    const params = {
        host: 'smtp.163.com', // 设置服务
        port: 465, // 端口
        sercure: true, // 是否使用TLS，true，端口为465，否则其他或者568
        auth: {
            user: '13477036346@163.com', // 邮箱和密码
            pass: 'wy13477036346'
        }
    }

// 邮件信息
    const mailOptions = {
        from: '"工程中心"13477036346@163.com', // 发送邮箱
        to: email, // 接受邮箱
        subject: title, // 标题
        text: content // 内容
    }

// 发送邮件
    const transporter = nodemailer.createTransport(params)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    })
}
module.exports = {
    addUser,
    login,
    sendVertifyCode,
    sendPWD
}