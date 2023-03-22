import express, {Application, Response, Request} from 'express'
import cors from 'cors'
import 'express-async-error'
import logger from './src/logger';
import router from './src/routes';
import errorHandler from './src/middlewares/globalErrorHandler';
import dotenv from 'dotenv'
import connect from './src/db';
dotenv.config()

const PORT = process.env.PORT
const app: Application = express()
// middlewares 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/delux/v1', router)

 app.get('/', (req: Request, res: Response)=> {
    res.send('hello')
 })
 
// error handler
 app.use('*', errorHandler)

 connect().then(res => {
    app.listen(PORT, ()=> logger.info('Server Started successfully! on port ' + PORT))
 }).catch(error => {
   logger.error(error.message)
 })
