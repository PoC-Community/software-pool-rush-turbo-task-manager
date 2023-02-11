import jwt from 'jsonwebtoken'
import creds from '../../creds.json'
import Response from './response';

async function checkToken(token: string, res: any) {
    try {
        var decoded = jwt.verify(token, creds.secret_key)
        return decoded
    } catch (error) {
        var response: Response = {
            status: 'fail',
            message: 'invalid token',
            data: null
        }
        res.json(response)
        return error

    }
}

export default checkToken
