
# Todo List Laravel/Vue App

A simple Todo-List app with Laravel/Vue.js


## Acknowledgements
## API Reference

#### Get all items

```http
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [@phemorah](https://www.github.com/phemorah)


## Deployment

To deploy this project run

```bash
    - Clone/download the project on your local pc

    - Open up your terminal and cd to the project directory

    - Run composer install to setup all required laravel libraries and packages

    - Start up the laravel server by running php artisan serve

    - Rename .env.example to .env

    - Open the new .env file

    - To generate the App key in the (.env) file,
    simply type the following command in the terminal:
    php artisan key:generate

    - Create a database and add the name to .env environment

    - Run php artisan migrate command to migrate the
    database tables

    - Run yarn install the setup node modules

    - Run yarn watch to complie and watch the node dependencies.

    You are all set.. Goodluck!


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

SESSION_DRIVER=cookie
SANCTUM_STATEFUL_DOMAINS=localhost:8000
SESSION_DOMAIN=localhost
## Documentation


## Demo

Insert gif or link to demo

