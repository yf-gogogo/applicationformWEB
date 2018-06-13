var express = require('express');
var router = express.Router();

var conf = require('../configure');
var api_user = require('../controllers/user');
var api_form = require('../controllers/form');

var DataTypes = require('sequelize');
var sequelizedb = require('../db').sequelizeDB;
var f_form = require('../models/form');
var s_form = f_form(sequelizedb,DataTypes);
var crypto = require('crypto');
/**
 * 上传文件定义
 */
var multer = require('multer');
var diskstorage = multer.diskStorage({
    destination:function (req,file,cb) {
        if(file != null){
            cb(null,'public/files/')
        }
    },
    filename:function (req,file,cb) {
        if(file != null){
            cb(null,req.body.name +'-'+ file.originalname)
        }
    }
});
var disk = multer({
    storage:diskstorage,
    limits:{
        fieldNameSize:255,
        fileSize:10*1024*1024
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send('index.html')

});
/* 报名界面 */
router.get('/form/:id',function (req,res) {

    var options = {
        root:conf.path.root + '/public/',
        dotfiles:'deny',
        headers:{

        }
    };
    res.sendFile('form.html',options,function (err) {
        if(err){
            console.log(err);
            res.sendStatus(404).end();
        }else {
            console.log()
        }
    });

});
/*管理员界面*/
router.get('/manage/:id',function (req,res) {
    let id = req.params.id;
    console.log(id);
    if(id != crypto.createHash('md5').update('nercel2018').digest('hex')){
        res.send('Not Found');
    }else {
        var options = {
            root:conf.path.root + '/public/',
            dotfiles:'deny',
            headers:{

            }
        };
        res.sendFile('admin.html',options,function (err) {
            if(err){
                console.log(err);
                res.sendStatus(404).end();
            }else {
                console.log()
            }
        });
    }
});
router.post('/formsubmit',disk.single('file'),api_form.submitform);
router.get('/allinfo',async function (req,res) {
    console.log(req.query)
    let limit = req.query.pageSize;
    let offset = req.query.offset;
    let result = await s_form.findAndCountAll({
        // attributes:['id','name','gender'],
        limit:limit*1,
        offset:offset*1,
        order:[['id','ASC']]
    });
    // console.log(result.rows)
    let total = result.count;

    res.json({'total':total,'rows':result.rows});
});
//用户注册
router.post('/adduser',api_user.addUser);
//用户登录
router.get('/login',api_user.login);
//管理员登陆
router.get('/manage',api_user.managelogin);
//获取是否提交过信息
router.get('/getsubmit',api_form.getSubmitInfoByuserid);
//发送验证码
router.get('/getvertifycode',api_user.sendVertifyCode);
//发送密码
router.get('/getpwd',api_user.sendPWD);

module.exports = router;
