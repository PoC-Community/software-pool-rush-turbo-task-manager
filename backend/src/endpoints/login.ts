import SHA256 from 'crypto-js/sha256'
import jwt from 'jsonwebtoken'
import User from '../database/models/user'
import creds from '../../creds.json'

import Response from '../utils/response'
import checkBody from '../utils/checkBody'

async function checkCredentials(email: string, password: string) {
    const hashedPassword = SHA256(password).toString()
    const user = await User.findOne({ email })
    if (user) {
        if (user.password === hashedPassword) return user._id.toString()
        return 0
    }
    return 0
}

async function login(req: any, res: any) {
    const { body } = req
    const response: Response = {
        status: null,
        message: null,
        data: null,
    }

    const bodyIsValid = checkBody(body, ['email', 'password'], res)
    if (!bodyIsValid)
        return

    const id = await checkCredentials(body.email, body.password)
    const credentialsAreValid = id != 0

    if (credentialsAreValid) {
        const token = jwt.sign({ id }, creds.secret_key)
        response.status = 'success'
        response.message = 'user logged in successfully'
        response.data = {
            token,
        }
        return res.json(response)
    }
    response.status = 'fail'
    response.message = 'credentials are not valid'
    return res.json(response)
}

export default login
