//user has an array property called 'posts'
//posts is an array of post objects
//each post object has an integer property called 'likes'
//sum together the likes from all the post objects
//return the sum

var user = {
  posts: [{post: {likes: 1}},
          {post: {likes: 2}},
          {post: {likes: 3}},
          {post: {likes: 4}},
          {post: {likes: 5}}],
};

console.log(user.posts);


var sum = 0;

for (var i = 0; i < user.posts.length; i++) {
  console.log(user.posts[i].post.likes);  
  sum += user.posts[i].post.likes;
}
// Iterates over user's posts property, which is an array of post objects each containing an integer property named likes.
// Sums the value of each likes property.  
// returns sum 

console.log(sum)