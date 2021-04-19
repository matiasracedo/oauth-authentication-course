require('dotenv').config();

const config = {
    authJwtSecret: process.env.AUTH_JWT_SECRET.replace(/\\n/g, '\n'),
    authJwtPrivate: process.env.AUTH_JWT_PRIVATE.replace(/\\n/g, '\n')
};

module.exports = { config };