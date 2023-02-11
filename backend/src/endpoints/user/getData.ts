import Response from '../../utils/response'
import checkFields from '../../utils/checkFields'
import checkToken from '../../utils/checkToken'
import User from '../../database/models/user'

async function get_user_data(req: any, res: any) {
    const { headers } = req

    const response: Response = {
        status: null,
        message: null,
        data: null,
    }

    const headersAreValid = checkFields(headers, ['token'], res)
    const token = await checkToken(headers.token, res)

    if (!headersAreValid)
        return

    User.findById(token.id, (err: any, user: any) => {
        if (err) {
                response.status = 'error'
                response.message = err.message
                return res.json(response)
        }
        if (!user) {
            response.status = 'fail'
            response.message = 'no user found'
            return res.json(response)
        } else {
            response.status = 'success'
            response.message = 'user data retrieved successfully'
            user.password = null
            response.data = user
        }
    })
}

export default get_user_data
