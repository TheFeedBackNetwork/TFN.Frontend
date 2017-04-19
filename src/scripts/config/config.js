var developmentEnvironment = require('./config.development.js');
var productionEnvironment = require('./config.production.js');

module.exports = function(){
    //console.log(processenv.NODE_ENV)
    switch(process.env.NODE_ENV){
        case 'development':
            var config = developmentEnvironment;
            return {config};

        case 'production':
            var config = productionEnvironment;
            return {config};

        default:
            var config = developmentEnvironment;
            return {config};
    }
};