// build your `/api/tasks` router here
const express = require('express');
const helpers = require('./model');
const router = express.Router();
router.get('/tasks', (req, res, next) => {
  helpers.getTasks() //INCLUDING PROJECTS NAME
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
  });
router.post('/task', (req, res, next) => { 
  helpers.createTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next);
});
module.exports = router;