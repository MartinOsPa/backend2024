const { Router, request, response } = require('express');

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Martin Ospa' },
    { id: 3, name: 'BobSmith' },
];

const getAll = (req = request, res = response) => {
    res.send(users);

}

const getById = (req = request, res = response) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    };

    const user = users.find(user => user.id === +id);
    if (!user) {
        res.status(404).send('user not found');
        return;
    }

    res.send(user);
}



/*const getMessage = (req = request, res = response) => {
    res.send('Helllo from the users conrtoller!');

}

module.exports = { getMessage};
*/

module.exports = { getAll, getById };