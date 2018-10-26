'use strict';

import memoryStorage from './memory.js';

import fileStorage from './file.js';

let dataStorageModule = {};
console.log(dataStorageModule);

switch(process.env.STORAGE) {
case 'filesystem':
  dataStorageModule = fileStorage;
  break;
default:
  dataStorageModule = memoryStorage;
  break;
}

export default dataStorageModule;
