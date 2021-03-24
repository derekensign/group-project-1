# Group Project 1

## Demo time!
Here is a demo of the functionality that your app will have: https://group-project-1-demo.herokuapp.com/index.html.

Note that this is just a demo, while the user stories are the real requirements for this project. Also, your project should be well-styled!

## Getting set up with our API
1. Go to http://myapi-profstream.herokuapp.com/ and create an account (you'll only need one account for your team).
1. Go to Read API Documentation, and take a look at the first three tables: persons, wines, and books. You will choose one of these to build your project around.
1. Once you've chosen one, go to New Instance, and create the API of your choice.
1. When you select this instance, you'll see the URL that it can be publicly accessed at.
1. You might want to seed your instance with data to start with. Note that your instance has a limit of 10 entries, so you may have to delete data out of it periodically.

## Making calls to our API
### Using Postman
The advantage of making requests using postman is that you don't have to worry about syntax errors in your javascript, you can concentrate on just making the request and seeing the response. It's strongly recommended to rehearse your requests in postman before writing them in js.

Note that this API requires every entity attribute to be filled out!

Let's make some postman requests together!
### Using `fetch`
We've already made `GET` requests using fetch, now we will be making `POST`, `PUT`, and `DELETE` requests as well. To do this, we'll pass in an additional data object as a second argument to fetch.
```js
fetch('your-url-here', {
  method: 'POST', // or PUT or DELETE
  // next part tells the API that this is a json-format request
  // as opposed to an html, plain text, or xml request
  headers: {
    'Content-Type': 'application/json'
  },
  // the JSON.stringify turns our object into a simple string, which can be sent across the web
  body: JSON.stringify({
    key1: "value1" // each of your attributes goes in this object
  })
})
```

## User Stories
1. When I load the site, I see links to "All Books" and "Create a New Book". I also see a header (under the links) identifying which view I'm currently in, and a viewing area. The header starts off as "Index of All Books", and the viewing area starts off with a list of all existing books.
1. Each book in the list displays just the book's title.
1. When I click on a single book in the list, the header changes to "Details for {book title}", and the viewing area changes to the full details for that book.
1. When I click on "Create a New Book", the header changes to "New Book Details", and the viewing area changes to a form. The form contains a labelled input for each attribute of the book (as required by the API).
1. When I submit the new book, I see the details page for the book I just created (including an updated header and viewing area).


## Stretch Goals
1. When I am in "Details for {book title}" view, there is a Delete button underneath the book's details. When I click this button, the book gets deleted from the API, and the view changes to the List of All Books.
1. When I am in "Details for {book title}" view, there is an Edit button underneath the book's details. When I click this button, the header changes to "Editing {book-title}", and the viewing area changes to a form. The fields of the form are pre-filled with the book's attributes. When I submit this form, the book gets updated in the API, and my view changes to the Details page for the book I just updated.
1. The API will only accept your POST request if all fields are present. We want to visually communicate this to our user. So when the Create a New Book form is submitted, before firing off the API call, check that each field has something in it. If any fields are blank, decline to make the API request, and visually indicate that those fields are required. This is called validating the form.
1. Perform form validations on the Edit form as well as the Create form.
1. Put a placeholder on the page while the data is loading (a spinner, something else animated, or even just "Loading..." text)