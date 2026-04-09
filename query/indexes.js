//Use this file to define indexes for your queries
db.restaurants.createIndex({"location":"2dsphere"});
db.restaurants.createIndex({name:"text"});
db.restaurants.createIndex({borough:1});
db.restaurants.createIndex({cuisine:1,borough:1});
db.restaurants.createIndex({"grades.score":1});
db.restaurants.createIndex({"grades.grade":1,"grades.score":1});
