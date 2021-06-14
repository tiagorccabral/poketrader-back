import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from '@/main/routes/v1'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// adds helmet HTTP protection
app.use(helmet())

// Sets CORS and Accepted Origins
app.use(cors())
app.options('*', cors())

app.use(router)

export default app
