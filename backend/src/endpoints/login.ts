import User from "../database/models/user"
import SHA256 from 'crypto-js/sha256'
import jwt from 'jsonwebtoken'
import creds from '../../creds.json'
import Response from '../utils/response'

async function checkCredentials(email: string, password: string) {
    const hashedPassword = SHA256(password).toString()
    var user = await User.findOne({email: email})
    if (user) {
        if (user.password === hashedPassword)
            return user._id.toString()
        else
            return 0
    } else
        return 0
}

async function login(req: any, res: any) {
    const body = req.body
    var response: Response = {
        status: null,
        message: null,
        data: null
    }

    if (!body.email) {
        response.status = 'fail'
        response.message = 'no email given'
        return res.json(response)
    }
    if (!body.password) {
        response.status = 'fail'
        response.message = 'no password given'
        return res.json(response)
    }

    var id = await checkCredentials(body.email, body.password)
    let credentialsAreValid = id != 0

    if (credentialsAreValid) {
        var token = jwt.sign({ id:  id}, creds.secret_key);
        response.status = 'success'
        response.message = 'user logged in successfully'
        response.data = {
            token: token
        }
        return res.json(response)
    } else {
        response.status = 'fail'
        response.message = 'credentials are not valid'
        return res.json(response)
    }
}

export default login
