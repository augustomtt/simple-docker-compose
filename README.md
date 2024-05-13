# Express + Angular + CouchDB simple docker compose example

Docker Compose is a tool for defining and running multi-container applications. 
In this repository you will find a 3 working services architecture, which include:
- A **CouchDB** database.
- A simple web interface using **Angular CLI**.
- A server using **Express.js**.


## Deployment

To deploy this project:
- Clone this repository
```bash
  git clone 
```
- If you haven't installed Docker and Docker-Compose yet, you should do it now using the package manager your OS provides you, for more info you may want to check [Docker Installation Official Documentation](https://docs.docker.com/engine/install/)

- Run (on Linux systems)
```bash
  sudo docker-compose up
```


## Environment Variables

Disclaimer! As you may see, the database admin credentials are currently located in the _docker-compose.yaml_ file. Althought possible, this project was not created to be run in a real case scenario, it was expected and tested only in local scenarios.  
Please use environment variables for
`COUCHDB_USER` and
`COUCHDB_PASSWORD`.


## Authors

- [@augustomtt](https://github.com/augustomtt)
- [@mateoetchepare](https://github.com/mateoetchepare)

This repository was created as a required project for our [University](https://www.fi.mdp.edu.ar/), we also would like to thank our teachers for giving us the neccesary foundations to develop this.

_________________
