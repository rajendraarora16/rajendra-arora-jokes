var request = require("request");
const spinner = require('ora');
const end = process.exit;

spinner().start(" Generating Rajendra Arora jokes ...");

request('http://api.icndb.com/jokes/random?firstName=Rajendra&lastName=Arora', function( err, res, body ) {
    
    if( !err && res.statusCode == 200) {
        spinner().stop();
        spinner().clear();
        var obj = JSON.parse(res["body"]);
        console.log(obj["value"]["joke"]);
    }
    end(1);
});  
