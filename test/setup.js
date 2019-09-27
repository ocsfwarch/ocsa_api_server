const { API_TOKEN } = require('../src/config');
process.env.NODE_ENV = 'test';
process.env.API_TOKEN = API_TOKEN;

const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;
