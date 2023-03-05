const sha256 = require('js-sha256')

module.exports.users = [
    {
        _id: '1234567xyz',
        email: 'luka77@gmail.com',
        password: sha256('123456'),
        fisrtName: 'Luka',
        lastName: 'Doncic',
        phone: '0547669355',
    },
    {
        _id: '0000000',
        email: 'lebron@gmail.com',
        password: sha256('123456'),
        fisrtName: 'LeBron',
        lastName: 'James',
        phone: '000000000',
    },
]

