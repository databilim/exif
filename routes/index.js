const express = require('express');
const path = require('path');

const multer  = require('multer');

const router = express.Router();
const ExifImage = require('exif').ExifImage;

const storage = multer.diskStorage({
    destination:'./public/uploads/',
    filename:function (req,file,cb) {

        cb(null, file.fieldname + "-"+Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({
    storage:storage,

}).single("file")
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

    const ExifImage = require('exif').ExifImage;

    try {
        new ExifImage({ image : 'DSC01049.JPG' }, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else
                console.log("exifData"); // Do something with your data!
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }

});

router.post("/upload",(req,res)=>{
    upload(req,res,(err) =>{
        if(err){
            res.send(err);
        }else{
            console.log(req.file)
            res.send("denemem")
        }

    })

})



module.exports = router;
