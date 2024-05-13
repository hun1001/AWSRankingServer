console.log("set DB");

function Add(json) {
    console.log("add");
    var AddData = JSON.parse(json);

    console.log(`GameID: ${AddData.GameID, AddData.UserID, AddData.Score}`);
}

function GetUserRank(GameID, UserID) {
    console.log("get");
    return "DBTest";
}

function GetGameRanking(GameID, start, end)
{
    console.log("get");
    return "DBTest";
}

function GetGameRankingPage(GameID, page, pageCnt)
{
    console.log("get");
    return "DBTest";
}

module.exports = { Add, GetUserRank, GetGameRanking, GetGameRankingPage };