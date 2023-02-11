import User from "../database/models/user"

function usernameTaken(username: string): boolean {
    User.findOne({name: username}, (error, user) => {
        if (error)
            return true
        if (user)
            return true
        else
            return false
    })
    return true
}

function emailTaken(email: string): boolean {
    User.findOne({name: email}, (error, user) => {
        if (error)
            return true
        if (user)
            return true
        else
            return false
    })
    return false
}

function register(req, res) {
    var body = req.body

    if (!body.name)
        return res.send('no name given')
    if (!body.email)
        return res.send('no email given')

        
    if (!usernameTaken(body.name) && !emailTaken(body.email))
    var user = new User()
    user.name = body.name
    user.email = body.email
    user.save(error => {
        if (error)
            res.json(error)
        else
            res.send('user created successfully')
    });
}

export default register
