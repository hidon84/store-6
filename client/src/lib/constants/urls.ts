const urls = {
  main: '/',
  login: '/login',
  signup: '/signup',
  products: {
    products: '/products',
    detail: '/products/:id',
  },
  myPage: '/me',
  cart: '/cart',
  shipping: '/shipping',
  likeList: '/like',
  oauth: {
    googleCallback: '/oauth/google/callback',
    facebookCallback: '/oauth/facebook/callback',
  },
};

export default urls;
