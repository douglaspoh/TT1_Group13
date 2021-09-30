const { admin, db } = require('../util/admin');
const config = require('../util/config');

const firebase = require('firebase');
var admin = require('firebase-admin');

firebase.initializeApp(config);

const { validateLoginData, validateSignUpData } = require('../util/validators');

// Login
exports.loginUser = (request, response) => {
    const user = {
        email: request.body.username + "@fakeemail.com",
        password: request.body.password
    }

    // const { valid, errors } = validateLoginData(user);
	// if (!valid) return response.status(400).json(errors);


    admin.auth().getUser("1")
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })


    // firebase
    //     .auth()
    //     .signInWithEmailAndPassword(user.email, user.password)
    //     .then((data) => {
    //         return data.user.getIdToken();
    //     })
    //     .then((token) => {
    //         return response.json({ token });
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         return response.status(403).json({ general: 'Wrong credentials, please try again'});
    //     })
};