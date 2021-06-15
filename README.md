# Poketrader API

## About

An API created to calculate trades between pokemons

## Main modules

- **Trade**: this module is responsible for providing the service of trading pokemons
- **Trade History**: this module contains logic to store the result of trades that happened

## How to install

1 - Git clone this repo

```bash
git clone https://github.com/tiagorccabral/poketrader-back.git
```

## Starting the server (With Docker)

1 - Copy the contents of ***env-example*** file into a folder called ***env***.

Make sure you have ***MONGO_INITDB_ROOT_USERNAME*** and ***MONGO_INITDB_ROOT_PASSWORD*** vars on mongo.env ***uncommented***. 

(you can change the other env variables inside these files as needed).

2 - Give the init script permissions to run locally
```bash
chmod +x init.sh
```

3 - Then create the containers with docker-compose
```bash
docker-compose up
```


## Starting the server

1 - Copy the contents of ***env-example*** file into a folder called ***env***.
(use the following script)
```bash
yarn setup
```

***OBS1:*** This command will copy the contents of ***env-example*** file into a new folder ***env*** (change here the variables inside these files as needed).

***OBS2:*** Make sure you have ***MONGO_INITDB_ROOT_USERNAME*** and ***MONGO_INITDB_ROOT_PASSWORD*** vars on mongo.env ***commented***.

2 - To get the project running, first install the dependencies
```bash
yarn install
yarn build
```

3 - Then start the development server
```bash
yarn dev
```