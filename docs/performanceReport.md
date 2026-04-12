1. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


2. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0,restaurant_id:1,name:1})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


3. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


4. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0,restaurant_id:1,name:1,borough:1,"address.zipcode":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## ✅ No significant issues detected


5. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 54
- 🔍 **Documents examined**: 54
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


6. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0}).limit(5)`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 5
- 🔍 **Documents examined**: 5
- 🛠️ **Execution stage**: LIMIT

## ✅ No significant issues detected


7. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0}).skip(5).limit(5)`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 5
- 🔍 **Documents examined**: 5
- 🛠️ **Execution stage**: LIMIT

## ✅ No significant issues detected


8. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"score":{$gt:90}}}},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 2
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


9. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"score":{$gt:80,$lt:100}}}},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 1
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


10. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location.coordinates.0":{$lt:-95.754168}})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: COLLSCAN

## ✅ No significant issues detected


11. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$and:[{"cuisine":{$nin:["American"]}},{"grades":{$elemMatch:{"score":{$gt:70}}}},{"location.coordinates.0":{$lt:-65.754168}}]},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 3
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


12. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"cuisine":{ $nin:["American"]},"grades":{$elemMatch:{"score":{$gt:70}}},"location.coordinates.0":{$lt:-65.754168}},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 3
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


13. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"cuisine":{$nin : ["American"]},"grades":{$elemMatch:{"grade":"A"}},"borough":{$nin:["Brooklyn"]}},{_id:0}).sort({"cuisine":-1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 318
- 🔍 **Documents examined**: 320
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


14. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"^Wil"}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 2
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


15. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"ces$"}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 2
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


16. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"Reg"}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 4
- 🔍 **Documents examined**: 4
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


17. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({cuisine:{$in:["American","Chinese"]},borough:"Bronx"},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 22
- 🔍 **Documents examined**: 22
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


18. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 359
- 🔍 **Documents examined**: 359
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


19. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 305
- 🔍 **Documents examined**: 305
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


20. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades.score":{$lte:10}},{_id:0,restaurant_id:1,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 612
- 🔍 **Documents examined**: 612
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


21. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{cuisine:"Seafood"},{name:{$regex:"^Wil"}}]},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 14
- 🔍 **Documents examined**: 14
- 🛠️ **Execution stage**: SUBPLAN

## ✅ No significant issues detected


22. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"grade":"A","score":11,"date":ISODate("2014-08-11T00:00:00Z")}}},{_id:0,restaurant_id:1,name:1,grades:1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 256
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 256 docs to return 1 (ratio 256.0:1)


23. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{"grades.1.grade":"A","grades.1.score":9,"date":ISODate("2014-08-11T00:00:00Z")}},{_id:0,restaurant_id:1,name:1,grades:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


24. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location":{$near:{$geometry:{type:"Point",coordinates:[-74, 40.7]},$maxDistance:5000}}},{_id:0,restaurant_id:1,name:1,"address.street":1,"address.zipcode":1,"location.coordinates":1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 147
- 🔍 **Documents examined**: 206
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## ✅ No significant issues detected


25. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({name:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


26. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({name:-1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


27. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({cuisine: 1,borough:-1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SORT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ‼️ Sorting on unindexed field 'cuisine' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ cuisine: 1 });
```


28. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{"address.street":{$exists:false}},{"address.street":""}]},{_id:0,address:1})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 3
- 🔍 **Documents examined**: 3
- 🛠️ **Execution stage**: SUBPLAN

## ✅ No significant issues detected


29. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{"location.coordinates.0":{$type:"double"}},{"location.coordinates.1":{$type:"double"}}]},{_id:0,restaurant_id:1,name:1,"location.coordinates":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SUBPLAN

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'location.coordinates' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ location.coordinates: 1 });
```


30. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"score":{$mod:[7,0]}}}},{_id:0,restaurant_id:1,name:1,"grades.grade":1})`
- ⏱️ **Execution time**: 4 ms
- 📚 **Documents returned**: 262
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## ✅ No significant issues detected


31. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{$regex:"mon",$options:"i"}},{_id:0,name:1,borough:1,location:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 10
- 🔍 **Documents examined**: 10
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


32. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"score":{$gt:80,$lt:100}}}},{_id:0,restaurant_id:1,name:1,"grades.grade":1,"grades.score":1})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 1
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## ✅ No significant issues detected


