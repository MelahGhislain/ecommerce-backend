import express, {Application, Response, Request} from 'express'
import cors from 'cors'
import logger from './src/logger';
import router from './src/routes';
import errorHandler from './src/middlewares/globalErrorHandler';
import dotenv from 'dotenv'
import connect from './src/db';
import { logRouteVerbs } from './src/middlewares/routeLogger';
dotenv.config()

const PORT = process.env.PORT
const app: Application = express()

// middlewares 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/delux/v1', logRouteVerbs, (req: Request, res: Response)=> {
  res.send('hello')
})

app.use('/api/delux/v1', logRouteVerbs, router)

// error handler
 app.use('*', logRouteVerbs, errorHandler)

 connect().then(res => {
    app.listen(PORT, ()=> logger.info('Server Started successfully! on port ' + PORT))
 }).catch(error => {
   logger.error(error.message)
 })

//  app.listen(PORT, ()=> logger.info('Server Started successfully! on port ' + PORT))
