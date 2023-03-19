import express, {Application, Response, Request} from 'express'
import cors from 'cors'
import logger from './logger';

const app: Application = express()
// middlewares 
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
 app.get('/', (req: Request, res: Response)=> {
    res.send('hello')
 })

app.listen(5000, ()=> logger.info('Server Started successfully!'))