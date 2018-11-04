const passport = require('passport')

module.exports = app => {
  // 1. Initiate authentication
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )

  // 2. Callback URL when returning from Google
  app.get('/auth/google/callback', passport.authenticate('google'))

  app.get('/api/user/current', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/user/logout', (req, res) => {
    req.logout()
  })
}
