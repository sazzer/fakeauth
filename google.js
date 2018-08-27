const buildUrl = require('build-url');
const uuid = require('uuid/v4');

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
        res.send({
            'access_token': uuid(),
            'token_type': 'Bearer',
            'expires_in': 3600,
            'id_token': 'TODO'
        });
    });
};
