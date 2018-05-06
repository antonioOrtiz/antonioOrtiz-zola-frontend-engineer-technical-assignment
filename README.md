# Zola Front­end Engineer Technical Project
  December 2017
  Overview

The following project should completed within 48 hours. If you need additional time, email jason@zola.com. For this project, make a Github Repository, and send the link to jason@zola.com when complete. If you have any questions along the way, feel free to reach out to me by email.

## Part 1: Grid of Users Page
Create a page that displays a grid of information about a group of people. Please use an established front­end JS framework like React or Angular. There isn’t a requirement for any particular styling besides those mentioned below, but make it easy to follow. Please treat this as production level code by using best practices, comments, and documentation.

By default, the grid should display the data in the order that is is received. Each person must be displayed in a rectangle with a black border of 2px and display 3 per row on desktop (no need to make responsive). The name will be an h2 of size 16px and bold, the age will be 12px and italic, and the category will be 12 px and regular. The priority will be displayed as a background color:

* 1 ­ Orange
* 2 ­ Green
* 3­  Blue
* 4 ­ Purple

You will then create the following sorts and filters:
* Sorts ­ chosen from a select.
  * Featured ­ the default sort (no sort)
  * A­Z: Alphabetically ascending by name 
  * Priority: Listed in ascending order
* Filters ­ chosen by radio buttons for each type of filter. When a filter is selected, only the matching people are displayed. The non­matching should not be rendered.
  * Category ­ show the unique categories present in the initial set of data. Do not hardcode this.

If you are looking for inspiration or clarification, this is a very simplified version of Zola’s product listing pages: https://www.zola.com/shop/category/decor
Seed the listing page with the following data:

````
{
  "data": [
    {
      "name": "Joe",
      "age": 24,
      "priority": 1,
      "category": "cat2"
    },
    {
      "name": "Jane",
      "age": 76,
      "priority": 4,
      "category": "cat1"
    },
    {
      "name": "Kevin",
      "age": 32,
      "priority": 2,
      "category": "cat2"
    },
    {
      "name": "Lucy",
      "age": 54,
      "priority": 1,
      "category": "cat3"
    },
    {
      "name": "Colin",
      "age": 34,
      "priority": 3,
      "category": "cat1"
    },
    {
      "name": "Franny",
      "age": 36,
      "priority": 2,
      "category": "cat3"
    },
    {
      "name": "Neil",
      "age": 74,
      "priority": 4,
      "category": "cat2"
    },
    {
      "name": "Katy",
      "age": 55,
      "priority": 3,
      "category": "cat2"
    }
  ]
}

````


## Part 2: Wedding Website Design
Create a responsive homepage for a Zola Wedding Website with the provided website theme. The page may be static and should be responsive with the specifications below. Feel free to use a base grid system from Bootstrap or another source, but please keep the rest of the styling your own.

You’ve been provided a Sketch and PDF version of the wireframe. The provided PDF also includes the Style Guide. Please use this during your implementation of the homepage. If you do not own Sketch, you can download a free trial on their website: https://www.sketchapp.com/. Fonts may be obtained using Google Fonts: https://fonts.google.com/. Please include them in your projects using the Google Fonts URL.

Please treat this as production ready code and utilize best practices for both your HTML and CSS. You may use Less, Sass, or any other preprocessor for your styling. If you do, please provide the original source files and final css.
I will be testing your page in a browser at 1280px wide (desktop) and 375px wide (mobile). I will be focusing on pixel perfect design compared to the wireframes provided. If you need to change anything, please make a note of it in your submission.
