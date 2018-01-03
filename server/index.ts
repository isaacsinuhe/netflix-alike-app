import * as path from 'path'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import schema from  './schema'

const { PORT = 8000, PWD = __dirname } = process.env
const app = express()

app.use('/q', graphqlHTTP({
    schema
}))

app.use('/dist', express.static(path.resolve(PWD, 'build', 'public')))

// app.use('/build/:file', (req, res) => {
//   res.sendFile(req.params.file, {
//     root: path.resolve(PWD, 'build')
//   })
// })

app.use('*', (req, res) => {
    res.sendFile('index.html', {
        root: PWD
    })
})

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))
