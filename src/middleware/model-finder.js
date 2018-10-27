'use strict';

// import requireAll from 'require-dir';

// const models = requireAll('../models');
const models = { users: require('../models/users.js'), notes: require('../models/notes.js')};

export default (req,res,next) => {
  let model = req.params.model;
  // console.log('models', models);
  if (model && models[model] && models[model].default) {
    // console.log('Successful');
    // console.log('Model', model);
    // console.log('Original URL', req.originalUrl);
    req.model = models[model].default;
    next();
  } else {
    // console.log('Unsuccessful');
    // console.log('Model', model);
    // console.log('Original URL', req.originalUrl);
    next('Invalid Model');
  }
};