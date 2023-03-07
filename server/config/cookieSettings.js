const cookieSettings = {
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: 'none',
    path: '/',
  }
  
  module.exports = cookieSettings