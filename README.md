# User Management .. 

This web application serves as the frontend for managing user data. It provides endpoints to handle Create, Update Retrieve and Delete operations on submission data.



## Technologies Used

 * React.js

 * Tailwind Css

 * Restfull API

 * npm (Node Package Manager)


## Prerequisites

 * React.js

 * npm (Node Package Manager)

## Getting Started

To get the project up and running, follow these steps:


1. Clone the Repository:

```bash
  git clone https://github.com/Rishabhsharma2004/Global_Limited_frontend.git
  cd assignentg
```
2. Install dependencies:
```bash
 npm install
```
3. Run the server:
```bash
 npm start
```





...........................................................


#### GET / login

Login to the account.

Parameters
* email 
* password


[https://global-limited.onrender.com/login](https://global-limited.onrender.com/login)

  * Request Body
```bash
{
  "email":"eve.holt@reqres.in",
    "password":" cityslicka"
}

```
* Response Body
```bash
{
    "token": "QpwL5tke4Pnpja7X4"
}
```


#### PUT / update


Parameters
* first name  (optional)
* last name  (optional)
* email  (mandatory)



[https://global-limited.onrender.com/users/{id}](https://global-limited.onrender.com/users)


* Request Body
```bash
{
 
    "email":"tester@gmail.com",
    "first_name":"Tester Rename",
    "last_name":"Tester Rename",

}
```
* Response Body
```bash
{
    "name": "morpheus",
    "job": "zion resident",
    "updatedAt": "2024-10-09T05:11:59.841Z"
}
```

..................................................................................................................................................

#### DELETE / delete

Delete User details.


[https://global-limited.onrender.com/users/{id}](https://global-limited.onrender.com/users)
  

* Request Body
```bash
{
  "email":"tester@gmail.com",
    "password":"tester1"
}
```
* Response Body
```bash
{
    "message": "User deleted successfully",
    "success": true
}
```

..................................................................................................................................................











* All the links are of deployment version

 
*  Error Handling : 
   Errors are returned with appropriate HTTP status codes and messages.
