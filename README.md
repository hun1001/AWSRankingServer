# AWSRankingServer

## 개요
AWSRankingServer는 n개의 게임에 동시에 사용가능한 랭킹을 위해 개발된 프로젝트입니다. http get, post를 통해 Redis에 새로운 랭킹 정보를 추가 및 불러올 수 있습니다.

## 주요 기능

### /api - api들의 기능 및 설명을 확인 할 수 있습니다.
- post
    - /addRanking - 유저의 점수를 등록합니다. `{ GameID : string, UserName : string, Score : number }` json 형식으로 값을 전송합니다.
- get
    - /getUserRank/:game_id/:user_id - 유저의 순위를 가져옵니다.
    - /getUserScore/:game_id/:user_id - 유저의 점수를 가져옵니다.
    - /getGameRanking/:game_id/:start/:end - start 부터 end까지 유저 순위를 가져옵니다. 순위는 0부터 시작되며 end에 -1입력시 전체 데이터를 불러옵니다.

## 참고사항
사용시 최상위 폴더에 config.js, .env 파일을 추가해야 됩니다.

```env
REDIS_URL=[래디스_주소]
```
```javascript
const GameID = {
    '게임 이름': '게임 고유ID'
};

module.exports = GameID;
```