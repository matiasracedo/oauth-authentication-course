const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const { config } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/auth/token", function(req, res) {
    const { email, username, name } = req.body;
    const token = jwt.sign({ sub: username, email, name }, config.authJwtPrivate, { algorithm: 'RS256'});
    res.json({ access_token: token });
});

app.get("/api/auth/verify", function(req, res, next) {
    const { access_token } = req.query;

    try {
        const decoded = jwt.verify(access_token, config.authJwtSecret, { algorithm: 'RS256'});
        res.json({ message: "The access token is valid", username: decoded.sub })
    } catch (err) {
        next(err);
    }
})

const server = app.listen(5000, function() {
     console.log(`Listening http://localhost:${server.address().port}`);
});