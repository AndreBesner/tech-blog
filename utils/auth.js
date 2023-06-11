// const withAuth = (req, res, next) => {
//     // If the user is not logged in, redirect the request to the login route
//     if (!req.session.logged_in) {
//       res.redirect('/login');
//     } else {
//       next();
//     }
//   };

// const withAuth = (req, res, next) => {
//   // If the user is not logged in and the route is not the signup route, redirect to the login route
//   if (!req.session.logged_in && req.originalUrl !== '/signup') {
//     res.redirect('/login');
//   } else {
//     next();
//   }
// };

// module.exports = withAuth;


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