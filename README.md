# nodejs-c1
Node Js ExpressJS SQLite3 is used to make API call and CRUD operations to SQL Database.

## CAUTION!!
1. Always put the database in project root directory. The paths that are used in this project will follow the guideline.
2. sqlite3 connector is used for this project.
3. You can use `better-sqlite3` also. It's faster than sqlite3 connector.

# How to start
- Clone the repo
- Go to project root directory
- Run `npm install`
- Then for dev run `nodemon index.js`
- For normal testing `node index.js`

# Database Structure
- DB Name = boards.db
- Table Name = boards
- Column Name = id,stage,title
