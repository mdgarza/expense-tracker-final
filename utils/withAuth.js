module.exports = (req, res, next) => {
  if (!req.session.logged_in) {
    req.session.loginMessage = 'Please log in to view your dashboard.';
    return res.redirect('/login');
  }
  next();
};
