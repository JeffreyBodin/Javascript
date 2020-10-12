// Embedly Extract JS Project 
  // App 
    // (In Dev?)(2020-10-12)
  // Individual Packaged "<Scripts/>" 
    // (In Dev?)(2020-10-12)



// --> Reference <-- //

// Embedly Docs:
// https://docs.embed.ly/v1.0/docs/extract

// Embedly Libraries:
  // Node
  // https://github.com/embedly/embedly-node

  // jQuery
  // https://github.com/embedly/embedly-jquery
  // https://github.com/embedly/jquery-preview

  // JavaScript
  // https://docs.embed.ly/docs/platformjs

// Test:
  // Test Cases "Example" Generator
  // https://embed.ly/docs/explore/extract

// Authentication
  // Embedly's Auth Doc Page
  // https://docs.embed.ly/docs/authentication

// Authentication - Steps:
  // To auth YOUR requests. Do -> 

  // Step 1 //
  // Include "key". As query parameter. 
  // Add in url call itself

// Authentication - Notes:
  // See -> API Call URL
  // Docs Example
  /* https://api.embedly.com/:version/:endpoint?key=:key&<additional query parameters> */
    
  // See - > API Call URL
  // Breakdown:
    // url into => sections (base)
    
    /* 'https://api.embedly.com/:version/:endpoint?' + 'key=  ' + ':key' */

  // See - > API Call URL
  // Breakdown:
    // url into => sections (notes)
    
    /* | url sec 1 | url sec 2 = key query section | YOUR KEY GOES HERE | */
    
    // url sec 1 
    /* 'https://api.embedly.com/:version/:endpoint?' */
    
      // contains
      // :version
        // Num
        // Pass in -> desired release num 
        // "desired release num" is -> semantic versioning format release number -> [:endpoint] YOUR targeting
      // :endpoint
        // String
        // Pass in -> the desired api endpoint (ie api to use)
        // Endpoints => oembed + extract
      // see,
        // [:version]/[:endpoint]
        // formatting of url path
      // see,
        // [:endpoint] with preceding semantic [:version]
        // 1/oembed
        // and
        // 1/extract
    
    // url sec 2 - query section
    /* 'key=' */

      // contains
      // key=
        // param for query -> 'key='
  
    // url sec 3 = YOUR api key
    /* YOUR api Key HERE */
    
      // replace ":key" 
        // with -> YOUR Key
      // ie, 
        // this => /:endpoint?key=:key
        // becomes this => /:endpoint?key= YOUR Key

// Embedly | plaform.js
// https://docs.embed.ly/docs/platformjs
  // Embedly's JavaScript library for creating cards, buttons, modals and interacting with the player apis.

// Embedly | plaform.js - Install
  // Instructions:
  
  // 1. Copy and Paste -> "<body>" section of "document"
    // if integrating into global object (of html doc) -> use:
    ```HTML
    <script>
    (function(w, d){
    var id='embedly-platform', n = 'script';
    if (!d.getElementById(id)){
      w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
      var e = d.createElement(n); e.id = id; e.async=1;
      e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
      var s = d.getElementsByTagName(n)[0];
      s.parentNode.insertBefore(e, s);
    }
    })(window, document);
    </script>
    ```
    // allows embedly to install platform.js javascript in an async manner
    // still queues ->REQUESTS<- immediately
  
  // 2. Copy and Paste -> "<body>" section of "document"
    // if !integrating the embedly global object. then, use:
    ```HTML
    <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
    ```

// Non-Embedly Libraries | Player.js
  // Player.js
  // https://docs.embed.ly/docs/playerjs
  // http://playerjs.io/
  // https://github.com/embedly/player.js#playerjs

  // Install
  // bower package manager -> https://bower.io/
  /* bower install player.js */ 

  // Install
  // with script tag directly:
  /* <script type="text/javascript" src="//cdn.embed.ly/player-0.0.11.min.js"></script> */

// https://oembed.com/
// https://github.com/iamcal/oembed

// --> Reference <-- //


$.embedly.oembed('url', {});