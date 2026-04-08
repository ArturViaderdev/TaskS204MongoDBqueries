1. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


2. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({}, {_id:0,name:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


3. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({}, {_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## ✅ No significant issues detected


4. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({}, {_id:0,name:1,borough:1,"address.zipcode":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## ✅ No significant issues detected


5. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 54
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 54 (ratio 12.3:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'borough' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ borough: 1 });
```


6. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0}).limit(5)`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 5
- 🔍 **Documents examined**: 55
- 🛠️ **Execution stage**: LIMIT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 55 docs to return 5 (ratio 11.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'borough' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ borough: 1 });
```


7. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"borough":"Bronx"},{_id:0}).skip(5).limit(5)`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 5
- 🔍 **Documents examined**: 155
- 🛠️ **Execution stage**: LIMIT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 155 docs to return 5 (ratio 31.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'borough' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ borough: 1 });
```


8. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades.score":{$gt:90}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 2 (ratio 332.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'grades.score' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ grades.score: 1 });
```


9. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades.score":{$gt:80,$lt:100}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 2 (ratio 332.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'grades.score' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ grades.score: 1 });
```


10. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location.type.1" :{lt:-65.754168}})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: COLLSCAN

## ✅ No significant issues detected


11. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location.type.1" :{lt:-65.754168}})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: COLLSCAN

## ✅ No significant issues detected


12. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location.type.1" :{lt:-65.754168}})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: COLLSCAN

## ✅ No significant issues detected


13. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"location.type.1" :{lt:-65.754168}})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: COLLSCAN

## ✅ No significant issues detected


14. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"^Wil"}},{_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 2 (ratio 332.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
```


15. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"ces$"}},{_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 2 (ratio 332.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
```


16. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{"$regex":"Reg"}},{_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 4
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 4 (ratio 166.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
```


17. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({cuisine:{$in:["American","Chinese"]},borough:"Bronx"},{_id:0})`
- ⏱️ **Execution time**: 0 ms
- 📚 **Documents returned**: 22
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 22 (ratio 30.2:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'cuisine' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ cuisine: 1 });
```


18. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 359
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'borough' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ borough: 1 });
```


19. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{_id:0,name:1,borough:1,cuisine:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 305
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'borough' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ borough: 1 });
```


20. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades.score":{$lt:10}},{_id:0,name:1,borough:1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 563
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'grades.score' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ grades.score: 1 });
```


21. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{cuisine:{$nin:["American","Chinese"]}},{name:{$regex:"^Wil"}}]},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 390
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SUBPLAN

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'cuisine' - performance may suffer.
- ‼️ Filtering on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ cuisine: 1 });
db.restaurants.createIndex({ name: 1 });
```


22. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"grade":"A","score":11,"date":ISODate("2014-08-11T00:00:00Z")}}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 1 (ratio 664.0:1)


23. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"grade":"A","score":11,"date":ISODate("2014-08-11T00:00:00Z")}}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 1 (ratio 664.0:1)


24. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({"grades":{$elemMatch:{"grade":"A","score":11,"date":ISODate("2014-08-11T00:00:00Z")}}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 1
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 1 (ratio 664.0:1)


25. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({name:1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SORT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ‼️ Sorting on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
```


26. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({name:-1})`
- ⏱️ **Execution time**: 2 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SORT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ‼️ Sorting on unindexed field 'name' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
```


27. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({},{_id:0}).sort({cuisine: 1,borough:-1})`
- ⏱️ **Execution time**: 1 ms
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

- 🧪 **Query**: `db.restaurants.find({"address.street":{$exists:false}},{_id:0})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 2
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_SIMPLE

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 2 (ratio 332.0:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'address.street' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ address.street: 1 });
```


29. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{"location.coordinates.0":{$type:"double"}},{"location.coordinates.1":{$type:"double"}}]},{_id:0,name:1,"location.coordinates":1})`
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

- 🧪 **Query**: `db.restaurants.find({"grades.score":{$elemMatch:{$mod:[7,0]}}},{_id:0,name:1,"grades.grade":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 0
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'grades.score' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ grades.score: 1 });
```


31. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({name:{$regex:"mon"}},{_id:0,name:1,borough:1,"location.coordinates":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 7
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: PROJECTION_DEFAULT

## 🚨 Performance Issues

### ⚠️ High Priority Issues
- ⚠️ Examined 664 docs to return 7 (ratio 94.9:1)

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'name' - performance may suffer.
- ‼️ Filtering on unindexed field 'location.coordinates' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ name: 1 });
db.restaurants.createIndex({ location.coordinates: 1 });
```


32. ## 📊 Query Performance Report

- 🧪 **Query**: `db.restaurants.find({$or:[{"grades.score":{$gt:80}},{"grades.score":{$lt:100}}]},{_id:0,name:1,"grades.grade":1,"grades.score":1})`
- ⏱️ **Execution time**: 1 ms
- 📚 **Documents returned**: 664
- 🔍 **Documents examined**: 664
- 🛠️ **Execution stage**: SUBPLAN

## 🚨 Performance Issues

### ℹ️ Recommendations
- ‼️ Filtering on unindexed field 'grades.score' - performance may suffer.

### 💡 Suggested Indexes
Consider creating these indexes:
```javascript
db.restaurants.createIndex({ grades.score: 1 });
```


