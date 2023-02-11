import Response from '../../utils/response'
import checkFields from '../../utils/checkFields'
import checkToken from '../../utils/checkToken'
import Board from '../../database/models/board'

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
    console.log(token)

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
            response.status = 'success'
            response.message = 'board created successfully'
            response.data = {
                id: board._id
            }
            return res.json(response)
        }
    })
}

export default create_board
