const { query } = require('express');
const db = require('../models/focusToolModels');

const focusToolController = {};

// remember query parameters (/xxx?xxx=xxx) vs path parameters (/:xxx)

focusToolController.getUsers = async (req, res, next) => {
  const queryString = `SELECT * from users`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.users = data;
    })
    .catch(err => {
      err.log = 'getUsers error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getUsers' };
      return next(err);
    });

  return next();
};

focusToolController.getAllInputs = async (req, res, next) => {
  // need to add to queryString SELECT condition where user_id equals current user id
  const queryString = `SELECT * from inputs`;

  await db.query(queryString)
    .then(res => res.rows)
    .then(data => {
      res.locals.allInputs = data;
    })
    .catch(err => {
      err.log = 'getAllInputs error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getAllInputs' };
      return next(err);
    });

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
    .catch(err => {
      err.log = 'getActiveInputs error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getActiveInputs' };
      return next(err);
    });

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
    .catch(err => {
      err.log = 'getNonActiveInputs error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getNonActiveInputs' };
      return next(err);
    });

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
    .catch(err => {
      err.log = 'getCompletedInputs error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getCompletedInputs' };
      return next(err);
    });

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
    .catch(err => {
      err.log = 'getDeletedInputs error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at getDeletedInputs' };
      return next(err);
    });

  return next();
};

focusToolController.createInput = async (req, res, next) => {
  const queryString = `INSERT INTO inputs (user_id, input, active, priority, reason, type, completed_or_deleted)
                        VALUES ($1, $2, $3, $4, $5, $6, $7)
                        RETURNING *`;

  const { user_id, input, active, priority, reason, type, completed_or_deleted } = req.body;
  const values = [ user_id, input, active, priority, reason, type, completed_or_deleted ];

  await db.query(queryString, values)
    .then(result => result.rows)
    .then(data => res.locals.newInput = data[0])
    .catch(err => {
      err.log = 'createInput error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at createInput' };
      return next(err);
    });

  return next();
};

focusToolController.deleteInput = async (req, res, next) => {
  const queryString = `DELETE FROM inputs
                      WHERE _id=$1
                      RETURNING *`;
  const inputId = req.params.inputId;

  await db.query(queryString, [inputId])
    .then(result => result.rows)
    .then(data => res.locals.deletedInput = data[0])
    .catch(err => {
      err.log = 'deleteInput error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at deleteInput' };
      return next(err);
    });

  return next();
}

focusToolController.updateInput = async (req, res, next) => {
  const queryString = `UPDATE inputs
                      SET user_id=$1, input=$2, active=$3, priority=$4, reason=$5, type=$6, completed_or_deleted=$7
                      WHERE _id=$8
                      RETURNING *`;

  const inputId = req.params.inputId;
  const { user_id, input, active, priority, reason, type, completed_or_deleted } = req.body;
  const values = [ user_id, input, active, priority, reason, type, completed_or_deleted, inputId ];

  await db.query(queryString, values)
    .then(result => result.rows)
    .then(data => res.locals.updatedInput = data[0])
    .catch(err => {
      err.log = 'updateInput error in focusToolController';
      err.status = 400;
      err.message = { err: 'An error occurred in focusToolController at updateInput' };
      return next(err);
    });

    return next();

}

module.exports = focusToolController;