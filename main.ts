import express, {Application, Response, Request} from 'express'
import cors from 'cors'
import logger from './src/logger';
import router from './src/routes';
import errorHandler from './src/middlewares/globalErrorHandler';

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

app.listen(5000, ()=> logger.info('Server Started successfully!'))