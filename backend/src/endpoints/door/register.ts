import SHA256 from 'crypto-js/sha256'
import jwt from 'jsonwebtoken'
import User from '../../database/models/user'
import creds from '../../../creds.json'

import Response from '../../utils/response'
import checkFields from '../../utils/checkFields'

async function checkUsernameTaken(username: string) {
    const user = await User.findOne({ name: username })
    if (user) return true
    return false
}

async function checkEmailTaken(email: string) {
    const user = await User.findOne({ name: email })
    if (user) return true
    return false
}

async function register(req: any, res: any) {
    const { body } = req
    const response: Response = {
        status: null,
        message: null,
        data: null,
    }

    const bodyIsValid = checkFields(body, ['name', 'email', 'password'], res)
    if (!bodyIsValid)
        return

    const usernameTaken = await checkUsernameTaken(body.name)
    const emailTaken = await checkEmailTaken(body.email)
    if (!usernameTaken && !emailTaken) {
        const newUser = new User()
        newUser.name = body.name
        newUser.email = body.email
        newUser.password = SHA256(body.password).toString()
        newUser.save((error, user) => {
            if (error) {
                response.status = 'error'
                response.message = error.message
                res.json(response)
            } else {
                const token = jwt.sign({ id: user._id }, creds.secret_key)
                response.status = 'success'
                response.message = 'user created successfully'
                response.data = {
                    token,
                }
                return res.json(response)
            }
        })
    } else {
        response.status = 'fail'
        response.message = 'name or email taken'
        response.data = null
        return res.json(response)
    }
}

export default register
