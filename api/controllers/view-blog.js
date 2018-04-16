module.exports = {


  friendlyName: 'View blog',


  description: 'display feed from medium',


  exits: {

    success: {
     
      
      viewTemplatePath: 'pages/blog.ejs'
    },

    

  },


  fn: async function (inputs, exits) {
    var request = require('request');
    request('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40PatrickRuffini', function (error, response, body) {
      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    return exits.success({feeds: JSON.parse(body)});
    });

    // var feed = require('rss-to-json');
    // var jsonFeed;
    // feed.load('https://medium.com/feed/@PatrickRuffini', function(err, rss){
    // return exits.success({feeds: rss});
    //   });

    


  }


};
