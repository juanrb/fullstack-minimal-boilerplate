# fullstack-minimal-boilerplate

## Description ##
Backend/frontend architecture automatically set up and easy to scale

## Installation and execution ##

Rename ```.env.example``` to ```.env```

Run ```npm install```

Run frontend: ```npm start```

Run backend: ```nodemon server```

> ####  Notes
> To take advantage of the templates, please install this extension for **VSCode**: https://marketplace.visualstudio.com/items?itemName=yuanhjty.code-template-tool, and follow the instructions in ```src/templates/readme.txt``` to set up the templates path.

## To create an API endpoint: ##

* right click on ```src/backend/api``` and name a new folder naming it as the endpoint in lowercase (e.g.: ```posts```).
* right click on the created folder, and choose *New File / Folder From Template* from the context menu.
* choose the option *Api template (no-db)*
* type the API name in camelcase (endpoint name)
* follow the steps in the file ```add_manually_then_remove_me.js```

Once that's done, run the backend project and just make a GET request with postman to ```localhost:3001/api/posts```, the response should be a JSON as follows:
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

## To create a scene: ##

* right click on ```src/frontend/scenes``` and name a new folder naming it as the scene in camelcase (e.g.: ```About```).
* right click on the created folder, and choose *New File / Folder From Template* from the context menu.
* choose the option *Scene template*
* type the API scene name in camelcase
* follow the steps in the file ```add_manually_then_remove_me.js```

Once that's done, run the frontend project and you'll see the scene referenced from the SidebarNav component

