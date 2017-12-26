let Request = require('../Request');

module.exports = class Estimate_Messages {

    constructor(options) {
        this.name = 'messages';
        this.baseUri = 'https://api.harvestapp.com/v2/estimates/';
        this.options = options;
    }

    list(id, cb) {
        this.options.url = this.baseUri + id + '/' + this.name;

        new Request(this.options, cb);
    }
}