// Black Mesa Site SEO
// Flat File JSON Object for easy SEO implementation

// Staging Build Flag -------------------------------
// This flag will tell the compiler wether you are working on
// staging or live. If the variable is True it means you are on
// staging build.
//
// This will affect which one of the URL's the builder will append
// to the social media images and the og:url attribute.
//
// This will allow for the staging branch to be tested on
// Facbeook / Twitter debugger panels.
//
// TODO -- Change stagingBuild to FALSE before live deploy.
let stagingBuild = false;

// Template INFO - Dictates slug for title and site URL's
let template = {
  slug: '%s | Generic Landing Page | Front-End Test',
  slugAddon: ' | Generic Landing Page | Front-End Test',
  stageUrl: 'http://localhost:8080/',
  liveUrl: 'http://frontend-test-raceroster.s3-website-us-east-1.amazonaws.com/',
};

// Social Media configuration
let social = {
  appid: 'XXXXXX',
  ogtype: 'website',
  cardtype: 'summary_large_image',
  twsite: '@GenericCoFake',
  ogimage: 'social/facebook.jpg',
  twimage: 'social/twitter.png'
};

// General Site Wide SEO
let general = {
  title: 'Generic Co.',
  desc: 'We are generic AF.'
};

// Export Objects - Add objects as needed
export {
  stagingBuild,
  template,
  social,
  general
};
