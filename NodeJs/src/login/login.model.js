class LoginModel {
    constructor(users) {
        this.users = users;
    }

    findOne(name, password) {
        return this.users.find(user => user.name === name && user.password === password);
    }
}

const loginInfo = [
    { name: 'Ivan', password: '4444' },
    { name: 'Nikita', password: '2222' },
    { name: 'Lila', password: '8888' }
];

module.exports = new LoginModel(loginInfo);