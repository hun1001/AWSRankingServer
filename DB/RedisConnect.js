// Redis 클라이언트 불러오기
const redis = require('redis');
require('dotenv').config();

// Redis 클라이언트 생성
const client = redis.createClient({
    url: process.env.REDIS_URL
});

client.on('error', (err) => {
    console.log('Redis error: ', err);
});

// 연결이 성공적으로 이루어진 후 실행할 코드
client.on('connect', () => {
    console.log('connect success!');
});

client.on('ready', () => {
    console.log('RedisClient is ready');
});

client.connect();

module.exports = client;