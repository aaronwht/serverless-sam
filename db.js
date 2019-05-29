const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected

module.exports = async = (event) => {
    if (isConnected) return Promise.resolve()
    let conn = process.env.DB
    if (typeof event.headers !== 'undefined' && typeof event.headers["Host"] !== 'undefined' && event.headers["Host"].indexOf('localhost') >= 0) conn = process.env.localDB

    return mongoose.connect(conn, { useNewUrlParser: true })
        .then(db => {
            isConnected = db.connections[0].readyState
        })

}