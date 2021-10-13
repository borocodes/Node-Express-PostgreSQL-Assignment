const knex = require("../db/connection");

function list() {
  return knex("comments as c").select("c.comments")
}

function listCommenterCount() {
  // your solution here
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
