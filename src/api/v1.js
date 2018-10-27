'use strict';

import express from 'express';

import modelFinder from '../middleware/model-finder.js';

const router = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

const notes = {};
console.log(notes);

router.param('model', modelFinder);

// router.param('model', (req,res,next) => {
//   console.log('You want to use', req.params.model);
// });

// router.get('/*', (request,response,next) => {
//   console.log(request);
//   request.model.find()
//     .then(data => {
//       const output = {
//         count: data.length,
//         results: data,
//       };
//       sendJSON(output, response);
//     })
//     .catch(next);
// });

router.get('/api/v1/:model', (request,response,next) => {
  // console.log(request);
  request.model.find()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      sendJSON(output, response);
    })
    .catch(next);
});

router.get('/api/v1/:model/:id', (request,response,next) => {
  request.model.find({_id:request.params.id})
    .then(result => sendJSON(result, response))
    .catch(next);
});

router.post('/api/v1/:model', (request,response,next) => {
  request.model.save(request.body)
    .then(result => sendJSON(result, response))
    .catch(next);
});

router.put('/api/v1/:model/:id', (request,response,next) => {
  request.model.put(request.params.id, request.body)
    .then(result => sendJSON(result, response))
    .catch(next);
});

router.patch('/api/v1/:model/:id', (request,response,next) => {
  request.model.patch(request.params.id, request.body)
    .then(result => sendJSON(result, response))
    .catch(next);
});

router.delete('/api/v1/:model/:id', (request,response,next) => {
  request.model.delete(request.params.id)
    .then(() => {
      response.statusCode = 200;
      response.end();
    })
    .catch(next);
});

export default router;

// models from now on need to be in the models folder, have same structure and exports default
