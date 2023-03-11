const cookieSettings = {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: 'none',
    path: '/',
  }
  
  module.exports = cookieSettings