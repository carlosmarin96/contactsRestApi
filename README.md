
# Contacts API Description

This API allows you to create, read, update and delete personal contacts. The database stores the following information:

- User first name
- User last name
- User's company
- User's phone number
- User email


The project is hosted on heroku. In the following link: https://secret-shelf-19988.herokuapp.com/api/contacts

# Technologies used

Node.JS, Express.JS, MongoDB Atlas

# API Routes

``` POST /api/contact ```

add new contact to the database

Request example

```
{
        "name": "Victor",
        "lastname": "Faudoa",
        "company": "Self",
        "phone": "72423373389",
        "email": "victor@gmail.com"
}
```
Response example

```
{
    "_id": "60949def6b569a0015920e35",
    "name": "Victor",
    "lastname": "Faudoa",
    "company": "Self",
    "phone": "72423373389",
    "email": "victor@gmail.com",
    "__v": 0
}
```

``` GET /api/contact ```

no request body needed

Response

```
[
    {
        "_id": "609437656c92d8b1eb82d370",
        "name": "Alejandra",
        "lastname": "Cardona",
        "company": "",
        "phone": "6142354389",
        "email": "alejandra@gmail.com",
        "__v": 0
    },
    {
        "_id": "60944920e2b83ab648800c3f",
        "name": "Argelia",
        "lastname": "Cardona",
        "company": "CUU",
        "phone": "6142824794",
        "email": "argelia@gmail.com",
        "__v": 0
    },
    {
        "_id": "60945e5a863d6900150be664",
        "name": "Aracely",
        "lastname": "Ramirez",
        "company": "Ela Vestidos",
        "phone": "6149898794",
        "email": null,
        "__v": 0
    },
    {
        "_id": "60949def6b569a0015920e35",
        "name": "Victor",
        "lastname": "Faudoa",
        "company": "Self",
        "phone": "72423373389",
        "email": "victor@gmail.com",
        "__v": 0
    }
]

```
``` PUT /api/contact/:contactId ```

Request example

```
{
        "name": String,
        "lastname": String,
        "company": String,
        "phone": String,
        "email": String
}
```
Response example

```
{
    "_id": "60949def6b569a0015920e35",
    "name": "Victor",
    "lastname": "Faudoa",
    "company": "Self",
    "phone": "72423373389",
    "email": "victor@gmail.com",
    "__v": 0
}
```


``` DELETE /api/contact/:contactId ```

no request body needed

