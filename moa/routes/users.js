var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});


router.post('/', function (req, res) {

    var query = url.parse(req.url, true).query;
    console.log(query);
    var skip = query.skip || 0;
    var limit = query.limit;

    skip = Number(skip);
    limit = Number(limit);

    var users = [];
    for (var i = skip; i < skip+limit; i++) {
        users.push({
            code: 'code_' + i,
            name: 'name_' + i
        });
    }

    if(skip > 20){
        users.shift();
    }

    console.log(users.length);
    res.send(users);

});

module.exports = router;
