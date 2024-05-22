const router = require('express').Router();
const DB = require('../DB/RedisConnect.js');
const GameID = require('../lib/GameID');
const strJS = require('../lib/string');

router.get('/', (req, res) => {
    res.send(strJS.api);
});
  
router.get('/connect/:productName', (req, res) => {
    res.send(GameID.GetGameID(req.params.productName));
});

router.post('/addRanking', (req, res) => {

    let data = req.body;
    let game_id = data.GameID;
    let user_id = data.UserName;
    let score = data.Score;

    var rank = DB.zAdd(game_id, {score: score, value: user_id});

    rank.then((result) => {
        res.send(`add ranking success ${result}`);
    }).catch((err) => {
        console.error('add ranking error: ', err);
        res.status(500).send('Internal Server Error');
    });
});

router.get('/getUserRank/:game_id/:user_id', (req, res) => {

    let game_id = req.params.game_id;
    let user_id = req.params.user_id;

    var rank = DB.zRevRank(game_id, user_id);

    rank.then((result) => {
        if (result === null) {
            res.send('User rank not found');
        } else {
            // Redis는 0부터 시작
            result += 1;
            res.send(`${result}`);
        }
    }).catch((err) => {
        console.error('get user rank error: ', err);
        res.status(500).send('Internal Server Error');
    });
});

router.get('/getGameRanking/:game_id/:start/:end', (req, res) => {

    let game_id = req.params.game_id;
    let start = parseInt(req.params.start);
    let end = parseInt(req.params.end);

    var dbReq = DB.zRangeWithScores(game_id, start, end);

    dbReq.then((result) => {
        // redis에 zRevRange가 없는 함수라 해서 일단은 이렇게 처리 sendcommand도 안됨
        result.sort((a, b) => {
            return b.score - a.score;
        });

        res.send(result);
    }).catch((err) => {
        console.error('get game ranking error: ', err);
        res.status(500).send('Internal Server Error');
    });
});

router.get('/getGameRankingPage/:game_id/:page/:pageCnt', (req, res) => {
    res.send('getGameRankingPage is not implemented yet');
});

router.get('/getUserScore/:game_id/:user_id', (req, res) => {
    let game_id = req.params.game_id;
    let user_id = req.params.user_id;

    var dbReq = DB.zScore(game_id, user_id);

    dbReq.then((result) => {
        res.send(`${result}`);
    }).catch((err) => {
        console.error('get user score error: ', err);
        res.status(500).send('Internal Server Error');
    });
});

module.exports = router;