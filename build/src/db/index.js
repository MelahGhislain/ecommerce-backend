"use strict";
const config = require('config');
const mongoURI = config.get('mongoURI');
const port = config.get('port');
const mongoose = require('mongoose');
// module.exports = (app)=>{
//     mongoose.connect(mongoURI, 
//         {
//             // useUrlParser: true,
//             useUnifiedTopology: true
//         },
//         (err)=>{
//         if(err) return console.log("Connection failed")
//         console.log("DB Connected")
//         app.listen(port, ()=>console.log(`Server running on port ${port}`))
//     })
// }
