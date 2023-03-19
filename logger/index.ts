import { Logger } from "winston"
import appLogger from "./app.logger"
import productionLogger from "./production.logger"
let logger: Logger

if (process.env.NODE_ENV !== 'production'){
    logger = appLogger()
}else {
    logger = productionLogger()
}

export default logger
