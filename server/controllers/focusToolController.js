const { query } = require('express');
const db = require('../models/focusToolModels');

const focusToolController = {};

focusToolController.getUsers = async (req, res, next) => {
  const queryString = `SELECT * from users`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.users = data;
    })
    .catch(err => next(err));

  return next();
};

focusToolController.getActiveInputs = async (req, res, next) => {
  // need to add to queryString SELECT condition where user_id equals current user id
  const queryString = `SELECT * from inputs WHERE active=true`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.activeInputs = data;
    })
    .catch(err => next(err));

  return next();
};

focusToolController.getNonActiveInputs = async (req, res, next) => {
  // need to add to queryString SELECT condition where user_id equals current user id
  const queryString = `SELECT * from inputs WHERE active=false`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.nonActiveInputs = data;
    })
    .catch(err => next(err));

  return next();
};

focusToolController.getCompletedInputs = async (req, res, next) => {
  // need to add to queryString SELECT condition where user_id equals current user id
  const queryString = `SELECT * from inputs WHERE completed_or_deleted='completed'`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.completedInputs = data;
    })
    .catch(err => next(err));

  return next();
};

focusToolController.getDeletedInputs = async (req, res, next) => {
  // need to add to queryString SELECT condition where user_id equals current user id
  const queryString = `SELECT * from inputs WHERE completed_or_deleted='deleted'`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.deletedInputs = data;
    })
    .catch(err => next(err));

  return next();
};

module.exports = focusToolController;