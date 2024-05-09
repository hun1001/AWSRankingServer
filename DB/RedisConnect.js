// Redis 클라이언트 불러오기
const redis = require('redis');

// 환경변수에서 ElastiCache Redis 인스턴스의 엔드포인트와 포트 번호 불러오기
// 예시: 'your-redis-endpoint.amazonaws.com', 6379
const REDIS_ENDPOINT = '3.26.163.59';
const REDIS_PORT = 6379;

// Redis 클라이언트 생성
const client = redis.createClient({
    //url: 'redis://rankdb-lnjkn1.serverless.apse2.cache.amazonaws.com:6379'
    host: REDIS_ENDPOINT,
    port: REDIS_PORT
});

// 연결 에러 핸들링
client.on('error', (err) => {
    console.error('Redis 클라이언트 연결 에러', err);
});

// Redis 연결 시도
client.connect();

// 연결이 성공적으로 이루어진 후 실행할 코드
client.on('connect', () => {
    console.log('Redis에 성공적으로 연결됨');

    // Redis 작업 예시 (키 'test'에 값 '123' 저장)
    client.set('test', '123', (err, reply) => {
        if (err) throw err;
        console.log(reply); // 'OK'

        // 저장된 값을 가져오기
        client.get('test', (err, value) => {
            if (err) throw err;
            console.log(value); // '123'
            
            // 모든 작업이 끝난 후 클라이언트 종료
            client.quit();
        });
    });
});
