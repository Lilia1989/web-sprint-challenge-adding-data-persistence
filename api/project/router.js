// build your `/api/projects` router here
const express = require('express');
const projects = require('./model');
const router = express.Router();
router.get('/', (req, res, next) => {
  projects.getProjects()
     .then(projects => {
       res.status(200).json(projects)
     })
     .catch(next)
})
router.post('/', (req, res, next ) => {
  const project = req.body
  if (project.project_name) {
    projects.insertProject(project)
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(next) 
  }else {
    next({message:"project_name required", status:400})
  }
})

module.exports = router;