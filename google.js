const buildUrl = require('build-url');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');

const idToken = {
    email: 'test@example.com',
    email_verified: true,
    name: 'Test User',
    given_name: 'Test',
    family_name: 'User',
    locale: 'en-GB'
};

const idTokenOptions = {
    expiresIn: '1 hour',
    notBefore: 0,
    audience: uuid(),
    issuer: 'https://accounts.google.com',
    subject: uuid()
};

module.exports = (app) => {
    app.get('/google/o/oauth2/v2/auth', (req, res) => {
        const redirectUri = req.query['redirect_uri'];
        const state = req.query['state'];

        const returnUrl = buildUrl(redirectUri, {
            queryParams: {
                state: state,
                code: uuid()
            }
        });
        return res.redirect(returnUrl);
    });

    app.post('/oauth2/v4/token', (req, res) => {
        const idTokenJwt = jwt.sign(idToken, process.env.GOOGLE_IDTOKEN_SECRET, idTokenOptions);

        res.send({
            'access_token': uuid(),
            'token_type': 'Bearer',
            'expires_in': 3600,
            'id_token': idTokenJwt
        });
    });
};
