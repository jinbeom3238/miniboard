
// 해당 코드는 프론트에드에서 '/api'로 Get, Post요청을 할 때 3000번 포트와 백엔드 톰캣의 8090포트로 연결시켜 요청이 도착하도록 합니다.

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use('/api',
        createProxyMiddleware(
            {
                target: 'http://localhost:8090',
                changeOrigin: true,
            }
        )
    )
}