import Response from '../../utils/response'
import checkFields from '../../utils/checkFields'
import checkToken from '../../utils/checkToken'
import Task from '../../database/models/task'
import Board from '../../database/models/board'

async function create_task(req: any, res: any) {
    const { body, headers } = req

    const response: Response = {
        status: null,
        message: null,
        data: null,
    }

    const bodyIsValid = checkFields(body, ['content', 'board'], res)
    const headersAreValid = checkFields(headers, ['token'], res)
    const token = await checkToken(headers.token, res)

    if (!bodyIsValid || !headersAreValid)
        return

    const newTask = new Task()
    newTask.content = body.content
    newTask.board = body.board
    newTask.assigned = [ token.id ]
    newTask.save((error, task) => {
        if (error) {
            response.status = 'error'
            response.message = error.message
            return res.json(response)
        } else {
            Board.findById(body.board, (err: any, board: any) => {
                if (err) {
                    response.status = 'error'
                    response.message = error.message
                    return res.json(response)
                } else {
                    if (!board) {
                        response.status = 'fail'
                        response.message = 'no board found'
                        return res.json(response)
                    }
                    board.tasks.push(task._id.toString());
                    board.save((error: any, _: any) => {
                        if (error) {
                            response.status = 'error'
                            response.message = error.message
                            return res.json(response)
                        } else {
                            response.status = 'success'
                            response.message = 'task created successfully'
                            response.data = {
                                id: newTask._id.toString()
                            }
                            return res.json(response)
                        }
                    })

                }
            })
        }
    })
}

export default create_task
