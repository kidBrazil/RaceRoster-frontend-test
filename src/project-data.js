// [ FLAT FILE DB ]
// This file is intended to serve as a flat file DB to centralize
// some of the repeated app data. This is not a substitute for a
// Dynamic DB but can work well for non-dynamic features and for
// brochure websites
//
// 1. Create variables to contain JSON objects with data.
// 2. Export the variable so it can be imported by components.
// 3. Import the JSON Objects that you need for the given component.

// Main Navigation Links
let navigation = {
  // Refer to routes.js file for available routes.
  links: [
    {
      linkName: 'Log-In',
      linkTitle: 'Login to your account.',
      linkClass: false,
      route: '#'
    },
    {
      linkName: 'Sign-Up',
      linkTitle: 'Sign Up to our service.',
      linkClass: 'blk-base-btn --pill --med --primary-g',
      route: '#'
    },
  ]
};

// General App data
let generalApp = {
  homeLink: '#',
  homeTitle: 'Back to Home.',
  homeBrand: 'mainLogo.png'
};

// Social media
let socialMedia = {
  links: [
    {
      a11y: 'Facebook',
      route: 'https://facebook.com',
      iconClass: 'fab fa-facebook-square'
    },
    {
      a11y: 'Twitter',
      route: 'https://twitter.com',
      iconClass: 'fab fa-twitter-square'
    },
    {
      a11y: 'Instagram',
      route: 'https://Instagram.com',
      iconClass: 'fab fa-instagram'
    },
  ]
}

// Export named variables
export { navigation, generalApp, socialMedia };
