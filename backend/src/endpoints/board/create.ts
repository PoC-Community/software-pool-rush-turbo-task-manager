import Response from '../../utils/response'
import checkFields from '../../utils/checkFields'
import checkToken from '../../utils/checkToken'
import Board from '../../database/models/board'
import User from '../../database/models/user'

async function create_board(req: any, res: any) {
    const { body, headers } = req

    const response: Response = {
        status: null,
        message: null,
        data: null,
    }

    const bodyIsValid = checkFields(body, ['name'], res)
    const headersAreValid = checkFields(headers, ['token'], res)
    const token = await checkToken(headers.token, res)

    if (!bodyIsValid || !headersAreValid)
        return

    const newBoard = new Board()
    newBoard.name = body.name
    newBoard.author = token.id
    newBoard.users = [ token.id ]
    newBoard.save((error, board) => {
        if (error) {
            response.status = 'error'
            response.message = error.message
            return res.json(response)
        } else {
            User.findById(token.id, (err: any, user: any) => {
                if (err) {
                        response.status = 'error'
                        response.message = error.message
                        return res.json(response)
                }
                if (!user) {
                    response.status = 'fail'
                    response.message = 'no user found'
                    return res.json(response)
                }
                user.boards.push(newBoard._id);
                user.save((error: any, _: any) => {
                    if (error) {
                        response.status = 'error'
                        response.message = error.message
                        return res.json(response)
                    } else {
                        response.status = 'success'
                        response.message = 'board created successfully'
                        response.data = {
                            id: board._id
                        }
                        return res.json(response)
                    }
                })
            })
        }
    })
}

export default create_board
