module.exports = {
    appPort: 8080,
    mongoUrl: 'mongodb://localhost:27017/HR-questions',
    jwt: {
        secret: 'HR',
        tokens: {
            access: {
                type: 'access',
                expiresIn: '30m'
            },
            refresh: {
                type: 'refresh',
                expiresIn: '60m'
            }
        }
    }
};