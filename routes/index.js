const brandApi = require('./brand');
const modelApi = require('./model');
const carApi = require('./car');

const setRoutes = app => {
    app.use('/models',modelApi);
    app.use('/brands',brandApi);
    app.use('/cars',carApi);
};

module.exports = {
    setRoutes
}