class UserService{
    createUser(userData){
        return{
            id: 20,
            ...userData,
        }
    }
}

module.exports = new UserService();