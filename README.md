# Implementation Details:

## General Approach
 
## Architecture Diagram

## API
- `GET /api/v1/hello` -> returns a reply for the given message.

  Sample Request Body
  ```
  {
    "data": {
        "type": "replies",
        "attributes": {
          "message": "hello"
        }
    }
  }
  ```

  Sample Response Body
  ```
  {
    "meta": {},
    "data": {
        "type": "replies",
        "attributes": {
            "reply": "Hello there! How are you?"
        }
    }
  }
  ```

## How to run
Create a mysql db and update the configs accordingly.
Build the project
```sh
yarn build
```

Runs the migrations

```sh
yarn db migration:run
```

Start the server in watch mode

```sh
yarn start
```

Run tests

```sh
yarn test

yarn test:coverage #for test coverage report
```

Linting

```sh
yarn lint

yarn lint --fix #for fixing all the lint errors
```

## Folder Structure
### A top level brief of structure
    src
    ├── controllers            # All the controllers
    ├── db                     # Migrations and orm config
    ├── entity                 # Typeorm entities
    ├── errors                 # Custom errors
    ├── lib                    # Any third party and first party integrations
    ├── middlewares            # Just middlewarawes
    ├── routes                 # Register all the controller with express
    ├── schema                 # Joi schema definitions
    ├── serializers            # JSONAPI serilizer files
    ├── services               # Core business logic
    ├── types                  # Type definitions
    └── config files

## Architecture Notes

- ### API Design: 
  - Follows REST standarads.
  - Future scope for versioning of APIs. 
  - I wanted to write something more standardised so I chose to follow https://jsonapi.org standards. The API expects and also reponds back accoding to the jsonapi standards.

- ### Database
  
- ### Exception Handling

- ### Specs

- ### Request/Response Validations:
  - Joiful schema is used to validate the requests and any repsonses from third part APIs.

- ### Github Actions
  - Currenlty there's one workflow, which is triggered on push to master, to build and run the tests in github actions


## ToDo
- Logging
- Authorization
- Dockerize the application
- API documentation (Swagger)

## Things I am contemplating 
- Deployment strategy
- Rate limiting
- Load testing
