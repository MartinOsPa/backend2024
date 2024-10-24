const { Router, request, response } = require('express');

const getMessage = (req = request, res = response) => {
    res.send('Helllo from the users conrtoller!');

}



module.exports = { getMessage };