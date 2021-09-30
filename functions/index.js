const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

const {
    loginUser
} = require("./APIs/user");

app.post("/logins", loginUser);

exports.api = functions.https.onRequest(app);
