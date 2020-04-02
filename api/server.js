const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../auth/users-router.js');
const artRouter = require('../artwork/artwork-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/artwork', artRouter);
server.get('/', (req, res) => {
  res.send("api up-Welcome to GCSE-Portfolio");
});

module.exports = server;
