const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // return all users
  });
  
  router.get('/:id', (req, res) => {
    // return a specific user
  });
  
  router.post('/', (req, res) => {
    // create a new user
  });
  
  router.put('/:id', (req, res) => {
    // update a specific user
  });
  
  router.delete('/:id', (req, res) => {
    // delete a specific user
  });

module.exports = router;
