'use strict';

import uuid from 'uuid/v1';

const storage = {};

const database = {};

storage.find = query => {
  let id = query && query._id;
  return new Promise( (resolve,reject) => {
    console.log(reject);
    if ( id && database[id] ) {
      resolve(database[id]);
    }
    else {
      const results = Object.keys(database).map( key => {
        return database[key];
      });
      resolve(results);
    }

  });
};

storage.delete = id => {
  return new Promise( (resolve,reject) => {
    if ( database[id] ) {
      delete database[id];
      resolve(database[id]);
    }
    else {
      let response = { error: `${id} not found` };
      reject(response);
    }
  });
};

storage.save = (data) => {
  return new Promise( (resolve,reject) => {
    console.log(reject);
    data._id = data._id || uuid();
    let record = Object.assign({}, database[data._id], data);
    database[record._id] = record;
    resolve(database[data._id]);
  });
};

export default storage;
