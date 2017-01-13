# Using Mongo in Node

## Research questions - To the docs!

- http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/
- https://www.npmjs.com/package/mongodb

How do you add MongoDB to a Node project?
```
npm install mongodb 

```

How do you connect to MongoDB through Node?
```
Through a MongoDB node.js driver

```

Do you still need to run a MongoDB server?
```
YES

```

If we were to build an Express app that persists data, where would
we use the MongoDB Node client?
```
On the node (client) side 

```

If we asked an express server to return all the the objects in a mongoDB database:
- What might the request from the Browser look like?
```
/GET

```

- What mongoDB method might we use on the server?
```
db.collection.find()

```

If we asked an express server to find an object by its ID and update some of it's date:
- What might the request from the Browser look like?
```
/POST 

```

- What mongoDB method might we use on the server?
```
db.collection.update({ _id: { $set: ### } })

```

## Can you?
[x] Install the MongoDB node module

[x] require the module inside `app.js`

[x] Inside app.js - connect to a mongoDB

[x] Insert your name and age into a collection

[x] Run the script and check via the mongo shell that it worked

[x] Can you update your age 

[x] Run the script and check via the mongo shell that it worked

[x] Can you find the document with your name as a criteria

[x] Run the script and check via the mongo shell that it worked

[x] Can you delete the document

[x] Run the script and check via the mongo shell that it worked


- [MongoDB driver for Node](https://www.npmjs.com/package/mongodb)
- [MongoClient](https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html)
