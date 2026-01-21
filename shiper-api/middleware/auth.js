const jwt = require("jsonwebtoken")

module.exports = function auth(req, res, auth) {
    const token = req.cookies.token

    if(!token) return res.status(401).json({msg: "Unauthorized"})

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({msg: "Invalid Token"})
    }
}