import express, {Application, Response, Request} from 'express'
import cors from 'cors'
import logger from './logger';
import router from './routes';

const app: Application = express()
// middlewares 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/delux/v1', router)

 app.get('/', (req: Request, res: Response)=> {
    res.send('hello')
 })

app.listen(5000, ()=> logger.info('Server Started successfully!'))