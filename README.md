# social-community
Social Network Community page


### Directory Structure 
    root-directory
    ├── ui
    │   ├── src
    │   │   ├── api //(js utils)
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── config
    │   │   ├── constants
    │   │   ├── containers
    │   │   ├── pages
    │   │   ├── layouts
    │   │   ├── core
    │   │   │   ├── domain
    │   │   │   │   ├── entityName1 //(entity class)
    │   │   │   │   ├── entityName2 //(entity class)
    │   │   │   │   └── ...
    │   │   │   └── services
    │   │   │       ├── entityName1 //(service interface)
    │   │   │       ├── entityName2 //(service interface)
    │   │   │       └── ...
    │   │   ├── data
    │   │   │   ├── webAPI1
    │   │   │   │   ├── services
    │   │   │   │   │   ├── entityName1 //(entity service)
    │   │   │   │   │   ├── entityName2 //(entity service)
    │   │   │   │   │   └── ...
    │   │   │   │   └── ...
    │   │   ├── sotre
    │   │   │   ├── actions
    │   │   │   ├── reducers
    │   │   │   └── sagas
    │   │   │ 
    │   │   └── public
    │   └── docs     
    ├── community //(serverless function)
    │   ├── constants
    │   ├── controllers
    │   │   ├── config
    │   │   ├── handles
    │   │   └── handle.*
    │   ├── services
    │   ├── domain
    │   └── models
    └── docs
