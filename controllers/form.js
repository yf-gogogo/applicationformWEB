var DataTypes = require('sequelize');
var sequelizedb = require('../db').sequelizeDB;
var f_form = require('../models/form');
var s_form = f_form(sequelizedb,DataTypes);
var conf = require('../configure');

async function submitform(req,res) {
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
        file_path= conf.path.ip + "/files/" + req.file.filename;
    }else {
        file_path = '';
    }
    body['file_path'] = file_path;
    let result = await s_form.findOne({
        where:{
            userid:req.body.userid,
        }
    });
    let result1 = null;
    if(result == null){
        result1 = await s_form.create(body);
    }else{
        result1 = await s_form.update(
            body,{
                where:{
                    userid:req.body.userid,
                }
            }
            );
    }
    res.json(result1);
}
async function getSubmitInfoByuserid(req,res){
    let userid = req.query.userid;
    let result = await s_form.findOne({
        where:{
            userid:userid
        }
    });
    res.json(result);
}
module.exports = {
    submitform,
    getSubmitInfoByuserid,
}