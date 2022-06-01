# widget-api
This is the Widget API.

# Installation and Configuration

## Local Run

To run locally, you need to install Node.js and npm:
```
npm install
npm start
```

## Docker

There is a Dockerfile you can use to generate a container image of the application.
```
docker build -t widget-api .
docker run -p 3030:3030 -p 3000:3000 --name widget-api widget-api
```

## Environment Variables

| Variable    | Purpose                                   | Default Value |
|-------------|-------------------------------------------|---------------|
| API_PORT    | Set the port for the API server.          | 3030          |
| HEALTH_PORT | Set the port for the health check server. | 3000          |


# API Docs

## Overview
The Widget API runs two web servers: the API and a health check server. 

The health check server is responsible for providing a health status of the application so that we can
avoid putting bad builds live, and to trigger alerts if anything goes wrong.

The API server is the one that serves up the Widget API that consuming applications can use to build
widgets (this is a fake app, so it barely does any of that, but we can pretend).

## Health Service Routes

### GET /healthz
- Returns 200 OK with a JSON object providing a few details about the host system.
- Health checks should be configured to listen to this endpoint!

## App Service Routes

### POST /widget
- Accepts literally any JSON object
- Creates a unique entry key for it and then adds it to the widget store
- Returns 201 Accepted (unless you break it somehow)

### GET /widget
- Returns all of the widgets currently stored
- Right now, there's no database hooked up to this so if the app restarts, this data is lost!
