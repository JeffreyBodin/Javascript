// Embedly Extract JS Project 
  // App 
    // (In Dev?)(2020-10-12)
  // Individual Packaged "<Scripts/>" 
    // (In Dev?)(2020-10-12)



// --> Reference <-- //

// Embedly Libraries:
  // Node
  // https://github.com/embedly/embedly-node

  // jQuery
  // https://github.com/embedly/embedly-jquery
  // https://github.com/embedly/jquery-preview

// Authentication
  // Embedly's Auth Doc Page
  // https://docs.embed.ly/docs/authentication

// Authentication - Steps:
  // To auth YOUR requests. Do -> 

  // Step 1 //
  // Include "key". As query parameter. 
  // Add in url call itself
  
  // See -> Embedly API URL Call
    // Docs Example
    /* https://api.embedly.com/:version/:endpoint?key=:key&<additional query parameters> */
    
  // See - > Embedly API Call URL
  // Breakdown
    // by sections
    
    /* 'https://api.embedly.com/:version/:endpoint?' + 'key=  ' + ':key' */

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

// Reference - Docs / Resources //

// Embedly Docs:
// https://docs.embed.ly/v1.0/docs/extract

// --> Reference <-- //


$.embedly.oembed('url', {});