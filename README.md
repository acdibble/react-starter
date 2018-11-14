# react-starter

This is a basic React app starter which includes a server built with the Express
library and a SQLite3 database. My intention here was to create a full-stack
React starter repo with minimal non-npm dependencies required, e.g. having a
database daemon running on your computer with all the outside setup that comes
with that.

## Beginning development

1. `git clone https://github.com/acdibble/react-starter`
2. `cd react-starter`
3. `cp .env.clean .env`
4. `npm i`
5. `npm run client-dev`
6. Open a new terminal tab or window
7. `npm run server-dev`

You can navigate to `http://localhost:8080` in a browser to view the client.
When you save any files that contain client code, the page will automatically
refresh with those changes. All requests to `/api` endpoints are proxied to the
Node server that is running on port 3000. This port is configurable in the .env
file included with this repo. From this file, you can manage the environment
variables for the project in this file.

## The database

This repo comes with a basic SQLite database. You can view the schema in the
database folder. It is extremely basic to allow basic scaffolding of the app.

There is one database query already written as an example for interacting with
SQLite from Node.

To interact with the sqlite database outside of the app, I recommend getting
the SQLite3 command line shell.

## The client

The front end is built on React 16, Babel 7, and Webpack 4. Linting standards
are enforced according to the Airbnb styleguide.

There is a basic structure in place for displaying todos from the database as
an example of how to pass props down through multiple component levels.

## The server

The server uses the Express library to serve up the static files and includes
one internal API route which is used to fetch todos from the database and
return them back to the front end.

## Tasks

There are some tasks that can be accomplished with what is already in place.
All this app currently does is pull todos from a database and display them to
the user. Improvements that could be made include:

1. Giving todos a completion state and conveying that state to the user
2. Allowing the user to toggle a todo between completion states
3. Giving the user a way to add/remove/edit todos to/from/in the DB
4. Creating a multi-user environment and allowing users to submit personal
todos and managing the various views that that entails

All of these tasks include database migrations. I would recommend finding your
preferred database before getting too deep into migrations or schema design.
