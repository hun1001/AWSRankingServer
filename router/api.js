const router = require('express').Router();
const DBT = require('../DB/DBTest');
const GameID = require('../lib/GameID');
const strJS = require('../lib/string');

router.get('/', (req, res) => {
    res.send(strJS.api);
});
  
router.get('/connect/:productName', (req, res) => {
    res.send(GameID.GetGameID(req.params.productName));
});

router.post('/addRanking', (req, res) => {
    DBT.Add(req.body);
    res.send('result: add ranking');
});

router.get('/getUserRank/:game_id/:user_id', (req, res) => {
    console.log('get user rank, game_id: ', req.params.game_id, ', user_id: ', req.params.user_id);
    res.send('result: get user rank');
});

router.get('/getGameRanking/:game_id/:start/:end', (req, res) => {
    console.log('get user ranking, game_id: ', req.params.game_id, ', page: ', req.params.page, ', pageCnt: ', req.params.pageCnt);
    res.send('result: get user ranking');
});

router.get('/getGameRankingPage/:game_id/:page/:pageCnt', (req, res) => {
    var aaa = DBT.GetGameRankingPage(req.params.game_id, req.params.page, req.params.pageCnt);
    res.send(aaa);
});

module.exports = router;