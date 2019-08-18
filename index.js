const http = require("http");
const express = require("express");
const status = require("http-status");
const router = require("./src/rotas/index");
const sequelize = require("./src/database/index");

const app = express();

app.use(express.json());

app.use('/api', router);

app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send();
  });

app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
  });

sequelize.sync({force: true}).then(() => {
    const port =process.env.PORT || 3000;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
})
