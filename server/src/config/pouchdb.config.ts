var PouchDB = require('pouchdb');

export const db = new PouchDB('http://localhost:5984/juegos');