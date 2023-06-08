const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

//user has many blog posts
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// comments belong to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
//comments belong to one blog post
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});
//blog posts belongs to one user
Blog.belongsTo(User, {
    foreignKey: 'user_id',
});
//blog has has many comments
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = { User, Comment, Blog };