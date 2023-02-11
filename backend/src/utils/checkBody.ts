import Response from './response'

function checkBody(body: any, fields: string[], res: any) {
    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        if (!body.hasOwnProperty(field)){
            var response: Response = {
                status: 'fail',
                message: `missing property: ${field}`,
                data: null
            }
            res.json(response)
            return false
        }
    }
    return true
}

export default checkBody
