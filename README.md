# Task S204 MongoDB queries.

# Description

Unstructured data starts gaining value when we can query it flexibly and efficiently. With **MongoDB**, you enter the world of **NoSQL databases**, where the relational model gives way to a JSON-based document structure that easily adapts to changing data and agile development scenarios.

This task invites you to practice making precise and expressive queries in MongoDB using its **JavaScript-based syntax**.

You’ll work with a collection of restaurant documents from **New York City**, applying filters, sorts, projections, and advanced operators to extract relevant information.

You’ll not only learn how to write correct queries but also how to interpret non-normalized structures, understand the advantages of the document model, and compare it to the relational approach when appropriate.

## NoSQL Databases: Why and When?

**MongoDB** is a typical example of a NoSQL database. Unlike relational databases, which store data in strictly defined tables, MongoDB stores information in **documents** (JSON or BSON type), closer to the way modern applications represent information.

### MongoDB Strengths:

- **Schema flexibility:** Each document can have different fields—useful in environments where the schema evolves frequently.
- **Performance** with large volumes of unstructured data.
- **Horizontal scalability:** Easily scalable with partitioning (sharding).
- **Natural integration** with JavaScript or Node.js applications since it uses JSON.


### When to Use NoSQL:

- When schema requirements change frequently.
- When you need to store large volumes of semi-structured or unstructured data.
- When speed and flexibility are prioritized over strict referential integrity.


## How to Complete the Task

1. Import the JSON collection of [restaurants](https://github.com/IT-Academy-Back/S2.4-MongoDB-Evaluator/blob/main/mongo-seed/restaurants.json) into your local MongoDB database (**collection:** `restaurants` inside the **nyc** database).
2. For each numbered statement, write the corresponding **MongoDB query** (`db.restaurants.find(...)`, etc.).
3. Execute the queries and verify that they return the expected results.
4. Check if they can be optimized (for example, with indexes or by correctly using projections and operators).
5. To submit, copy all queries into the [automatic correction repository](https://github.com/IT-Academy-Back/S2.4-MongoDB-Evaluator), following the instructions provided in the `README.md`.

In that same [repository](https://github.com/IT-Academy-Back/S2.4-MongoDB-Evaluator), you’ll also find instructions on how to use the automatic grading tool. Once completed, send the link to your repository through **Moodle** to your mentor.

## Statement

In this task, we have a collection of **Restaurant objects** from New York City with the following structure:

```json
{
  "restaurant_id": Number,
  "name": String,
  "cuisine": String,
  "borough": String,
  "address": {
    "building": String,
    "street": String,
    "zipcode": String
  },
  "location": {
    "type": String,
    "coordinates": [Number, Number]
  },
  "grades": [
    {
      "date": Date,
      "grade": String,
      "score": Number
    }
  ]
}
```


### We Need to...

- Show all documents in the **Restaurants** collection.
- Show `restaurant_id` and `name` for all documents.
- Show `restaurant_id`, `name`, `borough`, and `cuisine`.
- Show `restaurant_id`, `name`, `borough`, and `zip code`.
- Show all restaurants located in the **Bronx**.
- Show the **first 5** restaurants in the Bronx.
- Show the **next 5** restaurants after skipping the first 5 in the Bronx.
- Find restaurants with a **score greater than 90**.
- Find restaurants with a **score greater than 80 but less than 100**.
- Find restaurants with **longitude less than -95.754168**.
- Find restaurants that **don’t serve 'American' cuisine**, have a **score > 70**, and **longitude < -65.754168**.
- Same as above but **without using** the `$and` operator.
- Find restaurants that **aren’t 'American'**, have **grade 'A'**, and **aren’t in Brooklyn**, sorted by **cuisine descending**.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` where the name **starts with 'Wil'**.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` where the name **ends with 'ces'**.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` where the name **contains 'Reg'**.
- Find **Bronx** restaurants serving **American or Chinese cuisine**.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` for **Staten Island, Queens, Bronx, or Brooklyn**.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` for restaurants **not in** these boroughs.
- Find `restaurant_id`, `name`, `borough`, and `cuisine` with **scores not higher than 10**.
- Find restaurants that **serve fish**, are **not 'American' or 'Chinese'**, or where the **name starts with 'Wil'**.
- Find `restaurant_id`, `name`, and `grades` where `grade` = "A", `score` = 11, and `date` = "2014-08-11T00:00:00Z".
- Find `restaurant_id`, `name`, and `grades` where the **second element** has `grade` = "A", `score` = 9, and `date` = "2014-08-11T00:00:00Z".
- Find `restaurant_id`, `name`, `street`, `zipcode`, and `coordinates` for restaurants **within 5 km** of `[-74, 40.7]`.
- Sort restaurant names in **ascending order**, showing all columns.
- Sort restaurant names in **descending order**, showing all columns.
- Sort by **cuisine ascending** and **borough descending**.
- Show addresses that **do not contain the street field**.
- Select documents where the **coordinate** value is of type **Double**. Show `name`, `restaurant_id`, and `coordinates`.
- Show `restaurant_id`, `name`, and `grade` for restaurants with a **score divisible by 7 (remainder 0)**.
- Find `name`, `borough`, `longitude`, `latitude`, and `cuisine` for names containing `'mon'`.
- Show `restaurant_id`, `name`, `grade`, and scores **greater than 80 but less than 100**.


### Levels

- **Level 1:** Achieved by building **17 correct queries**.
- **Level 2:** Achieved by building **between 17 and 25 correct queries**.
- **Level 3:** Achieved by building **more than 25 correct queries**.


### Resources

You can download the database from the attached file.

### Objectives

- Query unstructured data in MongoDB.
- Apply filters, projections, and sorts.
- Understand the **NoSQL document structure**.
- Compare relational and document-based approaches.

***
