let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('../index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    req.check('Email','Invalid email address').isEmail();
    req.check('Password','Password is invalid').isLength({min: 8}).equals(req.body.ConfirmPassword);
    req.check('DateOfBirth','Date of birth invalid').isISO8601();
    req.check('Country','Not a country').isISO31661Alpha2();
    let errors = req.validationErrors();
    if(errors) {
        res.redirect('/');
        res.send(errors);
    }
});

module.exports = router;