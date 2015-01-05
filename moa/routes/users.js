var express = require('express');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('users');
});

//显示某用户信息
router.get('/:code', function(req, res){
    var code = req.params.code;
    res.render('user', {
        code : code,
        name : '测试数据_' + code
    });
});

//获取用户列表
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
            name: '张三_' + i,
            photo : i % 2 == 1 ? '/images/farmer.jpg' : '/images/game.jpg',
            desc : '张三是个好同志，张三是个好同志，张三是个好同志'
            + '张三是个好同志，张三是个好同志，张三是个好同志'
            + '张三是个好同志，张三是个好同志，张三是个好同志'
            + '张三是个好同志，张三是个好同志，张三是个好同志'
            + '张三是个好同志，张三是个好同志，张三是个好同志'
        });
    }

    if(skip > 20){
        users.shift();
    }

    console.log(users.length);
    res.send(users);

});

//获取用户信息
router.post('/dept', function(req, res){
    var query = url.parse(req.url, true).query;
    console.log(query);
    var pid = query.pid;

    var nodes = [];
    for(var i = 0 ; i < 6; i++){
        nodes.push({
            id : pid + ' ' + i,
            text : 'node_' + pid + ' ' + i,
            leaf : i > 4
        });
    }
    res.send(nodes);
})

module.exports = router;
