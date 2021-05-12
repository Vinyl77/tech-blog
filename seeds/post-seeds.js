const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
       content: "Taskinator is a task-tracker app that will allow you to organize your personal to-do list items by clicking and dragging them into categories like To Do, In Progress, and Completed.",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
       content: "The local zoo has received funding to build a new online catalog",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
       content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
       content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. ",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
       content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;