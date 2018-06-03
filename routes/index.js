var express = require('express');
var router = express.Router();

var DataTypes = require('sequelize');
var sequelizedb = require('../db').sequelizeDB;
var f_form = require('../models/form');
var s_form = f_form(sequelizedb,DataTypes);
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
        fileSize:5*1024*1024
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send('index.html')
});

router.post('/formsubmit',disk.single('file'),async function (req,res) {
    let body = req.body;
    let address = body.input_province+body.input_city+body.input_area+body.detailaddress;
    delete body.input_province;
    delete body.input_city;
    delete body.input_area;
    delete body.detailaddress;
    body['address'] = address;
    console.log(body);
    let file_path;
    if(req.file != null){
        file_path= "http://localhost:3000/files/" + req.file.filename;
    }else {
        file_path = '';
    }
    body['file_path'] = file_path;

    let result = await s_form.create(body);
    res.json(result);
});
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
module.exports = router;
