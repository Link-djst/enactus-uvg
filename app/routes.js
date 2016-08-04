// app/routes.js
var JSX = require('node-jsx').install();
var React = require('react');

module.exports = {
  index: function(req, res){
    var markup = React.createClass({displayName: 'CommentBox',
      render: function() {
        return (
          React.createElement('div', {className: "commentBox"},
            "Hello, world! I am a CommentBox."
          )
        );
      }
    });

  res.render('home',{
    markup: markup,
    state: 'hi'
  });
  },

  page: function(req, res) {
    // Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

      // Render as JSON
      res.send(tweets);

    });
  }
}
