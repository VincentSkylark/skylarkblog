const GoogleAuth = require('google-auth-library');
const auth = new GoogleAuth;



const CLIENT_ID = '80023736792-s4d6r6oijv22p3cjce3o6gj0u949j5fn.apps.googleusercontent.com';
const token = 'token';
const client = new auth.OAuth2(CLIENT_ID, '', '');
client.verifyIdToken(
  token,
  CLIENT_ID,
  // Or, if multiple clients access the backend:
  //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
  function(e, login) {
    // var payload = login.getPayload();
    // var userid = payload['sub'];
    // If request specified a G Suite domain:
    //var domain = payload['hd'];
  });
