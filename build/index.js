"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("./src/logger"));
const routes_1 = __importDefault(require("./src/routes"));
const globalErrorHandler_1 = __importDefault(require("./src/middlewares/globalErrorHandler"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/db"));
const routeLogger_1 = require("./src/middlewares/routeLogger");
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
// middlewares 
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/api/delux/v1', routeLogger_1.logRouteVerbs, (req, res) => {
    res.send('hello');
});
app.use('/api/delux/v1', routeLogger_1.logRouteVerbs, routes_1.default);
// error handler
app.use('*', routeLogger_1.logRouteVerbs, globalErrorHandler_1.default);
(0, db_1.default)().then(res => {
    app.listen(PORT, () => logger_1.default.info('Server Started successfully! on port ' + PORT));
}).catch(error => {
    logger_1.default.error(error.message);
});
//  app.listen(PORT, ()=> logger.info('Server Started successfully! on port ' + PORT))
