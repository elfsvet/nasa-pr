const http = require('http');
const app = require('./app');
const colors = require('colors');

const {loadPlanetsData} = require('./models/planets.model');

// we don't want to conflict with front end PORT
const PORT = process.env.PORT || 8000;
// allows respond to http requests and websockets not only express. express is middleware for node http server here.
const server = http.createServer(app);

async function startServer(){

    await loadPlanetsData();
    
    server.listen(PORT, () => {
     console.log(`Listen on port http://localhost:${PORT}`.magenta);
    });
}

// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on port http://localhost:${PORT}`);
// });

startServer();
// ....