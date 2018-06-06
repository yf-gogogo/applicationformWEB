var express = require('express');
var router = express.Router();
var conf = require('../configure');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // res.send('respond with a resource');
    var options = {
        root:conf.path.root + '/public/',
        dotfiles:'deny',
        headers:{

        }
    }
  res.sendFile('admin.html',options,function (err) {
      if(err){
        console.log(err);
        res.sendStatus(404).end();
      }else {
        console.log()
      }
  })
});


module.exports = router;
