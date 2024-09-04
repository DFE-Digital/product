module.exports = {

  // Base URL
  baseURL: process.env.BASE_URL || 'https://product.education.gov.uk/',

  // Environment
  env: process.env.NODE_ENV || 'production',

  // Port to run local development server on
  port: process.env.PORT || 3412,
  githubrepo: 'https://github.com/DFE-Digital/product',

  assetPath: process.env.assetPath
};


