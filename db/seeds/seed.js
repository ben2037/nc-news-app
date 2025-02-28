const db = require("../connection")

const seed = ({ topicData, userData, articleData, commentData }) => {
  return db.query(`DROP TABLE IF EXISTS topics`
).then(() => {

  return db.query(`DROP TABLE IF EXISTS users`)
}).then(() => {

  return db.query(`DROP TABLE IF EXISTS articles`)
}).then(() => {

  return db.query(`DROP TABLE IF EXISTS comments`)
}).then(() => {

  return db.query(`CREATE TABLE topics (
    slug VARCHAR(100) PRIMARY KEY,
    description VARCHAR(200),
    img_url VARCHAR(1000)
  )`)
}).then(() => {

  return db.query(`CREATE TABLE users (
    username VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100),
    avatar_url VARCHAR(1000)
    )`)
}).then(() => {

  return db.query(`CREATE TABLE articles (
    article_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    topic VARCHAR(100) REFERENCES topics(slug),
    author VARCHAR(100) REFERENCES users(username),
    body TEXT
 )`)
}).then(() => {
  
  return db.query(``)
})


}





module.exports = seed;
