const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;



const CLIENT_ID = '80023736792-4d6r6oijv22p3cjce3o6gj0u949j5fn.apps.googleusercontent.com';
const client = new auth.OAuth2(CLIENT_ID, '', '');

module.exports.validToken = function(req, res){
    console.log('validate token', CLIENT_ID);
  // req.body{
  //   token: string;
  // }
    const token = req.body.token;

    client.verifyIdToken(token, CLIENT_ID, (err, data) => {
        if (err) {
            res.status(401).send(err);
        } else {
            res.json(data);
        }
    });
};
