# mongodb-crud

Access the API via http://localhost:3000/api

***List of books route:***

| Route      | HTTP   | Header(s) | Body                                                         | Description             |
| ---------- | ------ | --------- | ------------------------------------------------------------ | ----------------------- |
| /books     | GET    | none      | none                                                         | Find all books          |
| /books/:id | GET    | none      | none                                                         | Find a single book      |
| /books     | POST   | none      | isbn: String (Required),<br/>title: String (Required)<br/>author: String (Required)<br/>category: String (Required)<br/>stock: Number (Required) | Create a single book    |
| /books/:id | PUT    | none      | author: String (Required)                                    | Update book author name |
| /books/:id | PATCH  | none      | author: String (Required)                                    | Update book author name |
| /books/:id | DELETE | none      | none                                                         | Delete a single book    |

