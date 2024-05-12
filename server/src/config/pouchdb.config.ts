import PouchDB from 'pouchdb'

export const db = new PouchDB('http://admin:doom@couchdb:5984/juegos');