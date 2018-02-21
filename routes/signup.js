let express = require('express');
let router = express.Router();
let Schema = require('../database/schema');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('../index', { title: 'Express' });
});

router.post('/',function (req,res) {
    console.log(req.body);
    req.check('Email','Invalid email address').isEmail();
    req.check('Password','Password is invalid').isLength({min: 8}).equals(req.body.ConfirmPassword);
    //req.check('DateOfBirth','Date of birth invalid').isDataURI();
    // req.check('Country','Not a country').isISO31661Alpha2();
    let errors = req.validationErrors();
    if(errors) {
        res.status(500);
        res.render('invalidForm',{title: 'Invalid Inputs'})
    }
    else {
        let user = Schema.Users({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            DateOfBirth: req.body.DateOfBirth,
            Country: req.body.Country,
            MobileNumber: req.body.MobileNumber,
            Gender: req.body.Gender,
            Address: req.body.Address,
            UserName: req.body.UserName,
            Email: req.body.Email,
            Password: req.body.Password
        });
        user.save(function (err,data) {
            if(err) throw err;
        });
        res.send("done");
    }
});

module.exports = router;


