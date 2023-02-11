import User from "../database/models/user"
import SHA256 from 'crypto-js/sha256'
import jwt from 'jsonwebtoken'
import creds from '../../creds.json'
import Response from '../utils/response'

async function checkUsernameTaken(username: string) {
    var user = await User.findOne({name: username})
    if (user)
        return true
    else
        return false
}

async function checkEmailTaken(email: string) {
    var user = await User.findOne({name: email})
    if (user)
        return true
    else
        return false
}

async function register(req: any, res: any) {
    const body = req.body
    var response: Response = {
        status: null,
        message: null,
        data: null
    }

    if (!body.name)
        return res.send('no name given')
    if (!body.email)
        return res.send('no email given')
    if (!body.password)
        return res.send('no password given')

    let usernameTaken = await checkUsernameTaken(body.name)
    let emailTaken = await checkEmailTaken(body.email)
    if (!usernameTaken && !emailTaken) {
        var new_user = new User()
        new_user.name = body.name
        new_user.email = body.email
        new_user.password = SHA256(body.password).toString()
        new_user.save((error, user) => {
            if (error) {
                response.status = 'error'
                response.message = error.message
                res.json(response)
            } else {
                var token = jwt.sign({ id:  user._id}, creds.secret_key);
                response.status = 'success'
                response.message = 'user created successfully'
                response.data = {
                    token: token
                }
                return res.json(response)
            }
        });
    } else {
        response.status = 'fail'
        response.message = 'name or email taken'
        response.data = null
        return res.json(response)
    }
}

export default register
