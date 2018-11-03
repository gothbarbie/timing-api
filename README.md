# Timing-API

This is an API for the [Timing Application](https://github.com/gothbarbie/timing-2).

## Pre-requisits

You need credentials in the file `config/keys.js`. Ask administrator for these as they are not commited to file history.

In order to run `npm run dev` you need Nodemon installed, globally, or you can add it to the project (it's not included in dependencies per default).

## Start

`node index.js`

## Routes

`/auth`

`/categories/new`

`/categories/$id/edit`

`/categories/$id/delete`

## Deployment

This API is set up to run on Heroku with MongoDB.
