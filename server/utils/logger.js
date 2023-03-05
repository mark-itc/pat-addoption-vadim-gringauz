const logger = (where, msg, severity = 'medium') => {
    console.log(`in ${where}: ${msg}`)
}

module.exports = logger