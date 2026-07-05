const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en', 'ar'],
    localePath: path.resolve('./public/locales'),
  },
  ns: ['common', 'home', 'products', 'cart', 'checkout', 'footer'],
  defaultNS: 'common',
  returnObjects: true,
};
