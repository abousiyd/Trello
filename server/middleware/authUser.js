const jwt = require('jsonwebtoken');

function authUser(req, res, next) {

    const token = req.get("Authorization");

    if (!token) {
        res.json({ success: false, message: "No token provided" });
    } else {
        jwt.verify(token, '123', (err, decoded) => {
            if (err) {
                res.json({ success: false, message: "Token is invalid" + err });
            } else {
                req.user = decoded;
                next();
            }
             });
    }
    }
    
module.exports = authUser;