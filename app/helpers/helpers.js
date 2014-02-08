
const APP_PATH = process.env.ILG_CLIENT_PATH;

module.exports =  function Ilg_json() {


    var fs = require('fs');

    /** A class to read/write files outside the sandbox of webkit **/


    this.getThemesDB = function (themePath, type) {
    	/**type = gtk, icons or shell; we dont need type for now **/

		var db = fs.readFileSync(themePath, 'utf-8', function (err, data) {
  			if (err) throw err;
  				console.log(data);
		});

      	return JSON.parse(db);

    };

    this.getAppConfig = function () {

    	/* Use it later */
    	var configPath=APP_PATH+'config.json';
    	var config = fs.readFileSync(configPath, 'utf-8', function (err, data) {
  			if (err) throw err;
  				console.log(data);
		});

      	var configJson=JSON.parse(config);
    };

    this.getAppPath = function() {
    	return APP_PATH;
    };

    this.getDataPath = function () {
    	return APP_PATH+"data/";
    };
    //** Warn user in case of different Home & App Path **//
    this.getHomePath = function () {
    	return process.env.HOME;
    }

}



