// NPM Activity

//create an npm project : npm init
//install the 'moment'package : npm install moment
//examine the directory
//delete the node_modules : npm uninstall
//install again : npm install -> both these action removed the unnecessary folders
//updated the package.json by adding 'start' to the script.
//created a .gitignore file to ignore node_modules


// Require or import the 'moment' modules in your application.
 const Moment = require('moment');

// Use 'moment' to output the time stamp for when the response arrives using the format h:mm:ss a
 const myMoment = new Moment();
 console.log(myMoment.format('h:mm:ss a'));

 


