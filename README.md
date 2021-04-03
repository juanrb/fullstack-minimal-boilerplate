# fullstack-minimal-boilerplate

## Description ##

Backend/frontend architecture automatically set up and easy to scale.

**Frontend:** Single page app with a template for creating scenes, routing already implemented, navigation automatically added, using `react`, `react-helmet-async`, `react-router-dom`.

**Backend:** Backend architecture in Node using `express`, `compression`, `cors` and `response-time` (pretty useful lib to include the response time in the response header for each request).

## Installation and execution ##

Rename `.env.example` to `.env`

Run `npm install`

Run frontend: `npm run front`

Run backend: `npm run back`

> ####  Important
> For the following steps, please install this extension for **VSCode**: https://marketplace.visualstudio.com/items?itemName=yuanhjty.code-template-tool, and follow the instructions in `src/templates/readme.txt` to set up the templates path.

## Backend: how to create an API endpoint ##

* right click on `src/backend/api` and name a new folder naming it as the endpoint in lowercase (e.g.: `posts`).
* right click on the created folder, and choose *New File / Folder From Template* from the context menu.
* choose the option *Api template (no-db)*
* type the API name in camelcase (endpoint name)
* follow the steps in the file `add_manually_then_remove_me.js`

Once that's done, run the backend project and just make a GET request with postman to `localhost:3001/api/posts`, the response should be a JSON as follows:
```
[
    {
        "message": "posts-one"
    },
    {
        "message": "posts-two"
    }
]
```

## Frontend: how to create a scene ##

* right click on `src/frontend/scenes` and name a new folder naming it as the scene in camelcase (e.g.: `About`).
* right click on the created folder, and choose *New File / Folder From Template* from the context menu.
* choose the option *Scene template*
* type the API scene name in camelcase
* follow the steps in the file `add_manually_then_remove_me.js`

Once that's done, run the frontend project and you'll see the scene referenced from the SidebarNav component.

In the created scene (About.js in the example) there'll be an async function called `fetchData()` inside a `useEffect()`, it's basically using the api abstraction from `api.js` in the same folder, which creates CRUD requests to *jsonplaceholder* by default (when the backend is not needed), or a request to the backend (option initially commented out).

> ####  Notes
> In the next release I'll be including ContextAPI and Redux as two different alternatives for state management

> ####  Notes
> To debug the frontend, you must first install the Chrome extension *Debugger for Chrome*, run `npm start` first, then (F5 / Start Debugging).
> To degub the backend, set the setting Auto Attach to `smart`, then run `node server`.

## Deploy to Heroku
* Add env var REACT_APP_API1_URL = 'https://jsonplaceholder.typicode.com/' to Heroku settings
* Add env var PUBLIC_URL = '[heroku deployment url]'
