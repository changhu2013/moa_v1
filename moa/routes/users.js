var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});


router.post('/', function (req, res) {

    var users = [];
    for (var i = 0; i < 20; i++) {
        users.push({
            code: 'code_' + i,
            name: 'name_' + i
        });
    }

    res.send(users);

});

module.exports = router;
