// Note this https://github.com/not-an-aardvark/reddit-oauth-helper
// For setting up authentication of reddit accounts was really helpful.


// Notes
// visit https://not-an-aardvark.github.io/snoowrap/snoowrap.html for documentation

// Submitting a link to a subreddit
r.getSubreddit('subreddit example').submitLink({
  title: 'Post title',
  url: 'https://i.imgur.com/n5iOc72.gifv'
});

// Printing a list of the titles on a thread
r.getHot().map(post => post.title).then(console.log);

// Printing the content of a wiki page
r.getSubreddit('AskReddit').getWikiPage('bestof').content_md.then(console.log);

// Extracting every comment on a thread
r.getSubmission('4j8p6d').expandReplies({limit: Infinity, depth: Infinity}).then(console.log)

// Live Threads Notes
// snoowrap assigns each fetched LiveThread object a stream property, which takes the form of an EventEmitter.

// script will stream all livethread updates to the console as they appear
r.getLivethread('whrdxo8dg9n0').stream.on('update', console.log);

// Logs all new livethread updates to the console.
someLivethread.stream.on('update', data => {
  console.log(data.body);
});

// Gets a livethread with the given ID
r.getLivethread('whrdxo8dg9n0')



// getUser()
// Gets information on a reddit user with a given name.

r.getUser('not_an_aardvark')
// RedditUser { name: 'not_an_aardvark' }

r.getUser('not_an_aardvark').link_karma.then(console.log)
// Logs 6

// getMe()
// Gets info on the requester's user profile.

r.getMe().then(console.log);
// Logs RedditUser information { is_employee: false, has_mail: false, name: 'snoowrap_testing', ... }

// getKarma()
// Gets an array of objects of the user's karma distributation by subreddit.

r.getKarma().then(console.log)
// Logs [
//  { sr: Subreddit { display_name: 'redditdev' }, comment_karma: 16, link_karma: 1 },
//  { sr: Subreddit { display_name: 'programming' }, comment_karma: 2, link_karma: 1 },
// ]

// getPreferences()
// Gets the user's preferences 

r.getPreferences().then(console.log)
// => { default_theme_sr: null, threaded_messages: true, hide_downs: false, ... }

// getComment('commentId')
// Gets info on a comment with the given id.

r.getComment('c0b6xx0')
// Comment { name: 't1_c0b6xx0' }

r.getComment('c0b6xx0').author.name.then(console.log)
// Logs 'Kharos'

// getSubreddit('subredditname')
// Gets info on a subreddit.


r.getSubreddit('AskReddit')
// Subreddit { display_name: 'AskReddit' }

r.getSubreddit('AskReddit').created_utc.then(console.log)
// Logs 1201233135

// submitSelfpost({subredditName: '', title: '', body: ''})
// Creates a new selfpost on the given subreddit.

// getHot([subredditName][,options])
// Gets a listing containing the retrieved submissions.

r.getHot('gifs').then(console.log)
// => Listing [
//  Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'gifs' }, ... },
//  Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'gifs' }, ... },
// ]

r.getHot('redditdev', {limit: 1}).then(console.log)
// => Listing [
    //   Submission { domain: 'self.redditdev', banned_by: null, subreddit: Subreddit { display_name: 'redditdev' }, ...}
// ]

// getNew([subredditName][,options])
// Gets a listing of the new submissions on the subreddit.

r.getNew().then(console.log)
// => Listing [
//  Submission { domain: 'self.Jokes', banned_by: null, subreddit: Subreddit { display_name: 'Jokes' }, ... },
//  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
// ]

// getNewComments([subredditName][,options])
// Gets a listing of the new comments on the subreddit.

r.getNewComments().then(console.log)
// => Listing [
//  Comment { link_title: 'What amazing book should be made into a movie, but hasn\'t been yet?', ... }
//  Comment { link_title: 'How far back in time could you go and still understand English?', ... }
// ]

// getRising([subredditName][,options])
// Gets the rising posts on the subreddit.

r.getRising('technology').then(console.log)
// => Listing [
//  Submission { domain: 'thenextweb.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... },
//  Submission { domain: 'pcmag.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... }
// ]

r.submitSelfpost({
  subredditName: 'subredditname',
  title: 'title',
  body: 'body of the selfpost'
}).then(console.log)
// Logs the submission { name: 't3_4abmsz' }

// submitLink({subredditName: '', title: '', url: ''})
// Submits a link to the given subreddit.

r.submitLink({
  subredditName: 'subredditname',
  title: 'title',
  url: 'https://'
}).then(console.log)
// Logs submission { name: 't3_4abnfe' }

// reply(text)
// Replies to the object it targets.
// Takes the form of a comment if the object is a submission/comment.
// Takes the form of a new private message if the object is a private message.

r.getSubmission('4e60m3').reply('This was an interesting post. Thanks.');
// Replies to the post with a comment.

// upvote()
// Upvotes the post/comment.

r.getSubmission('4e62ml').upvote()
// Upvotes the submission.

// downvote()
// Downvotes the post/comment.

r.getSubmission('4e62ml').downvote()
// Downvotes the submission.

// fetch()
// Fetchs content from reddit.
// This will not mutate the original content object. The promise properties will remain as promises after the content has been fetched.
// This information will be cached and may get out of date. Use refresh() to refresh.

r.getUser('not_an_aardvark').fetch().then(userInfo => {
  console.log(userInfo.name); // 'not_an_aardvark'
  console.log(userInfo.created_utc); // 1419104352
});
// Fetchs user info then logs to console.

r.getComment('d1xchqn').fetch().then(comment => comment.body).then(console.log)
// Fetches then logs to console 'This is a little too interesting for my liking'

// refresh()
// Refreshes the content that this module is applied to.

var someComment = r.getComment('cmfkyus');
var initialCommentBody = some_comment.fetch().then(comment => comment.body);

setTimeout(() => {
  someComment.refresh().then(refreshedComment => {
    if (initialCommentBody.value() !== refreshedComment.body) {
      console.log('This comment has changed since 10 seconds ago.');
    }
  });
}, 10000);
// refresh() someComment with interval of 10000