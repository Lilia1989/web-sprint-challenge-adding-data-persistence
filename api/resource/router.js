// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const router = express.Router();
router.get('/', (req, res, next) => {
  Resources.getResources() 
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(next);
});
router.post('/', (req, res, next) => { 
  const resource = req.body
  if (resource.resource_name) {
    Resources.createResource(resource)
      .then(newResource => {
        res.status(201).json(newResource)
      })
      .catch(next)
  }else {
    next({message:"resource_name required", status:400})
  }
});
module.exports = router;