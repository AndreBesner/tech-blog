const withAuth = (req, res, next) => {
  // Exclude login and signup routes
  if (req.path === '/login' || req.path === '/signup') {
    next();
    return;
  }

  // If the user is not logged in, redirect to the login route
  if (!req.session.logged_in) {
    res.redirect('/signup');
  } else {
    next();
  }
};
  
  module.exports = withAuth;