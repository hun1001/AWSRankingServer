const router = require('express').Router();
const DBT = require('../DB/DBTest');

router.get('/', (req, res) => {
    console.log('API 종류 및 기본 정보');

    res.send('API 종류 및 기본 정보');
});
  
router.get('/connect/:game_id', (req, res) => {
    console.log('connect request id');
    res.send(DBT.Get());
});

router.post('/addRanking', (req, res) => {
    console.log('add ranking, request body: ', req.body);
    res.send('result: add ranking');
});

router.get('/getUserRank/:game_id/:user_id', (req, res) => {
    console.log('get user rank, game_id: ', req.params.game_id, ', user_id: ', req.params.user_id);
    res.send('result: get user rank');
});

router.get('/getUserRanking/:game_id/:page/:pageCnt', (req, res) => {
    console.log('get user ranking, game_id: ', req.params.game_id, ', page: ', req.params.page, ', pageCnt: ', req.params.pageCnt);
    res.send('result: get user ranking');
});

module.exports = router;