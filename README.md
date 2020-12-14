# API Powered Bookmark Application

<!-- TABLE OF CONTENTS -->
## Contents 
<details open="open">
  <summary>Contents</summary>
  <ol>
    <li><a href="#github-lives-pages">GitHub Live Pages</a></li>
    <li><a href="#about">About This Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#technical-aspects">Technical Aspects</a></li>
    <li><a href="#upcoming-features">Upcoming Features</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## GitHub Live Pages

https://thinkful-ei-unicorn.github.io/elinam-bookmark-app/


## About This Project

In this project, I created an API powered bookmark application. The project has a RESTful API and allows for full CRUD actions. Use this bookmark app to collected websites and links you want to share or come back to while clicking through the web. 



![Bookmark Application](https://github.com/aniledev/elinam-bookmark-app/blob/gh-pages/bookmark-app.png?raw=true)


## Built With

This application is an API powered bookmark creation app that relies on:
* [JavaScript](https://www.javascript.com/)
* [jQuery](https://jquery.com)
* [Node](https://nodejs.org/)
* [Webpack](https://webpack.js.org/)


## User Stories

#### As a user:

- I can add bookmarks to my bookmark list. Bookmarks contain a title (required), URL (required), description (optional), and rating 1 to 5 (optional).
- I can see a list of my bookmarks when I first open the app.
- When I first open the application, all bookmarks in the list default to a "condensed" view showing only title and rating.
- I can click on a bookmark to display the "detailed" view.
- When I expand a bookmark, the detailed view expands to additionally display description and a "Site" link.
- I can remove bookmarks from my bookmark list.
- I receive appropriate feedback when I cannot submit a bookmark.
- I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection.


## Technical Aspects

- Use fetch for AJAx calls and jQuery for DOM manipulation
- Use ES6 namespacing principles to adhere to good architecture practices
- Minimal global variables
- Create modules in separate files to organize your code
- Follows the React-ful design pattern
- Responsive and mobile-first design
- Follows a11y best practices


## Upcoming Features

- User can update rating and description input
- Expand all/Collapse all button at the top of the home page

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Font Awesome](https://fontawesome.com)
* [Thinkful Coding Bootcamp](https://www.thinkful.com/)

