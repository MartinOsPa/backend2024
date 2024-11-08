const usersQueries = {
    getAll: 'SELECT * FROM users',
    getById: 'SELECT * FROM users WHERE id=?',
    getByUsername: 'SELECT * FROM users WHERE username =?',
    create: 'INSERT INTO users (username, password, email) VALUES (?,?,?)',
    update: 'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?',
    delete: 'DELETE FROM users WHERE id = ?',
};

module.exports={usersQueries};