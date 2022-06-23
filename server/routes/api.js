const express = require('express');
const focusToolController = require('../controllers/focusToolController');
const router = express.Router();

router.get('/users', focusToolController.getUsers, (req, res) => {
  res.status(200).json(res.locals.users);
});

router.get('/active-inputs', focusToolController.getActiveInputs, (req, res) => {
  res.status(200).json(res.locals.activeInputs);
})

router.get('/non-active-inputs', focusToolController.getNonActiveInputs, (req, res) => {
  res.status(200).json(res.locals.nonActiveInputs);
})

router.get('/completed-inputs', focusToolController.getCompletedInputs, (req, res) => {
  res.status(200).json(res.locals.completedInputs);
})

router.get('/deleted-inputs', focusToolController.getDeletedInputs, (req, res) => {
  res.status(200).json(res.locals.deletedInputs);
})

module.exports = router;