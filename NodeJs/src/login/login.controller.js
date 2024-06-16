const userModel = require('./login.model')


class loginController {
    loginUser = async (req, res) => {
        const { name, password } = req.body;
        const user = await userModel.findOne(name,password)
        if(user){
            res.send({
                jwt:`456nkvnskssk`
            });
        } else {
            res.status(403).send({
                error: 'Forbidden'
            })}
    }

}
module.exports = new loginController();