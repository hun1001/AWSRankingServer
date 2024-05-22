const api = 
    `
    / - info about api\n
    /connect/:productName - get game id\n
    /addRanking - post req add ranking\n
    /getUserRank/:game_id/:user_id - get user rank\n
    /getGameRanking/:game_id/:start/:end - get game ranking by range\n
    /getGameRankingPage/:game_id/:page/:pageCnt - get game ranking by page
    `;

const index = `please request to /api`;

module.exports = { api, index };