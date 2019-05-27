# Dead simple RESTful API testing starter project

jest (test runner), jasmine (matchers), json-server (npm server), request (for making http requests), faker (for generating lorem-ipsum JSONs)

## Requirements

You need to have NodeJS installed. These commands should work and show current versions:

`node -v`
`npm -v`

Clone the project and run
`npm install`

## Global npm modules

Install these global modules:

`npm install -g json-server`
`npm install -g jest`

This is how you can check all top level global modules

`npm list -g --depth=0`

## Starting server

Start local sever in a separate terminal window:

`json-server --watch jsons/got.json`

## Running tests

This run all *.spec.js and *.test.js in the current folder and all subfolders
`jest`

This run only `foo` specs if you have `foo.spec.js` and `bar.spec.js`
`jest foo`

That's the beauty of `jest` - zero config, understands regexp to run only subset of tests

## Postman and queries

You can (and probably should) open the local server in Postman, this are the base url and some queries

Home page (by the way, you can customize it -- see the bottom of the home page)
`http://localhost:3000`

All GOT characters
`http://localhost:3000/characters`

Jon Snow
`http://localhost:3000/characters/123`

All Starks (characters filtered by house)
`http://localhost:3000/characters?house=Stark`

## What's next

Create your own JSON, start `json-server` and work on your jasmine specs, no jest config changes (at least not immediately).