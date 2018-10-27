'use strict';

const {server} = require('../../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/api/v1/notes/12')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond properly on request to /api/v1/users', () => {

    return mockRequest
      .get('/api/v1/users')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        console.error(err);
        expect(err).not.toBeDefined();
      });
  });

  it('should respond properly on request to /api/v1/notes', () => {

    return mockRequest
      .get('/api/v1/notes')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        console.error(err);
        expect(err).not.toBeDefined();
      });
  });

  it('should be able to post to /api/v1/users', () => {

    let obj = {firstname:'Ashley',lastname:'Breunich',email:'ashleybreunich@gmail.com',role:'admin', _id:1};

    return mockRequest
      .post('/api/v1/users')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.title).toEqual(obj.title);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });
  });

  it('should be able to post to /api/v1/notes', () => {

    let obj = {title:'test',text:'foo', _id:3};

    return mockRequest
      .post('/api/v1/notes')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.title).toEqual(obj.title);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });
  });

  it('should respond be able to put to /api/v1/users', () => {

    let userUrl = '/api/v1/users/1';

    return mockRequest
      .put(userUrl)
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        console.error(err);
        expect(err).not.toBeDefined();
      });
  });

  it('should respond be able to delete from /api/v1/users', () => {

    let userUrl = '/api/v1/users/1';

    return mockRequest
      .delete(userUrl)
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        console.error(err);
        expect(err).not.toBeDefined();
      });
  });

  it('should respond be able to delete from /api/v1/notes', () => {

    let userUrl = '/api/v1/notes/3';

    return mockRequest
      .delete(userUrl)
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        console.error(err);
        expect(err).not.toBeDefined();
      });
  });

});
