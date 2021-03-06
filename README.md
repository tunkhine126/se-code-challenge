
## New Story Charity: Code Challenge!
This app will use the XKCD API to display a web comic. The goal is to always have a finished product ready to be improved upon with new features.

This web application uses the XKCD API to build two distinct features.

- It displays the latest comic from XKCD on the home page. 

- It also has a "Latest" search page where a user can search for a specific XKCD comic and display it. 

## Frameworks
 Front end - [React](https://reactjs.org)
 
 Styling - [Bootstrap](https://react-bootstrap.github.io/) and custom CSS

## The process and challenges
For this challenge, I tried to be diligent with coding best practices. Usually I would follow a TDD best practices but I had an issue with implementing Cypress off the bat. I believe it was due to particular packages that were missing from the cloned build. Never the less I moved of. 

I practiced the mantra of "Commit early, commit often". This allowed me to work feature by feature. 
After reading the readme a few times to really digest what was being asked of me, I jotted a few notes down and drew out my simple tree to stay on track. 

I started with the simply adding react router and bootstrap dependencies. Next I focused on getting the basic routing working, with "/" and "/search". This also required me to create my first two components, `Home` and `Search` respectively. 

Afterwards I implemented a basic Bootstrap NavBar and got the `href` routes working to display my respective components. 

Once completed, I went on to get my fetch working in the `Home` component. I initally tested the API using one of my favorite tools, Postman! After having a good idea of what type of `JSON` would be returned. I created my initial state and fetch. Once I `console.log`d the results I worked on displaying the image. At this point I noticed there was no `.css` file. I went on to create that and import it in `index.js`.

After I knew the basic Home component was working, I moved onto the Search component. My goal was to get a simple form rendered, create a `userSearched` state, create an `onSubmit` function, and finally simply display image 303. 

At this step, I had reached basic MVP. My next task took me back to the `Home` page to render a few more elements returned from the `JSON`. Once I got those working I went on to implement the same in the `Search` page. 

I felt like I was on a roll at this point. I pondered on how I could get the app a bit more buttoned up. This led me to creating validations in the form. The way I implemented this was to edit my `fetchSearch` function. I implemented validations around making sure the user input was first a number and then making sure that number was between 1 - 2221(the latest comic). If these conditions were not met an alert would be presented to the user asking them to kindly make sure the parameters were met. 

Finally I worked on a few personal styling touches that are subtle but I felt added to my own personal touch. 

## Additions and future learning
- Tests - I attemped to add Cypress.io testing into the dependencies but not sure why it didn't quite work. I instead moved quickly into building the app.
- Separate functions into a services file in an effort to keep components as simple as possible

## Acknowledgements 
I'm appreciative of the Engineering team at New Story Charity for allowing me the opportunity to showcase some of my knowledge acquired at Flatiron School. Additionally, big big thanks to my Wife for her support and encouragement. 

# Support Engineer Challenge

Welcome! If you are reading this, it's likely because you want to work with us. If you have already applied, then continue on. If not, check out our [careers](https://newstorycharity.org/careers/) page to see our available openings. No software developer opening? Email us anyway!

# Instructions

The goal of this coding challenge is to allow us to see how you approach a technical problem. This challenge is geared more towards a junior or entry level coding ability, specifically with experience in React.

This should take about **2-3 hours** to complete, but please don't spend more than 5 hours on it. If you get to that point, it's likely that this current role might not be a good fit.

Upon completion, a **public** Github URL should be sent to the following:

- [tim@newstorycharity.org](mailto:tim@newstorycharity.org)

> Pro Tip. Read this doc in it's entirety BEFORE you do anything. One of the main things we'll be looking for is someone who can follow directions well.

## The Challenge

You'll be creating a React application that interacts with the XKCD API. 

If you've never heard of XKCD before, it's a fun web comic. You can check it out here - [XKCD Website](https://xkcd.com).

Their website API does not support CORS, so we've built out a proxy for you that can be found here - [XKCD PROXY](https://xkcd.now.sh/). There you will also find the documentation that you need for the API calls you will be making.

The goals are:

1. Create a React Application
2. Create a Home Page that displays the latest comic
3. Create a Search Page that allows you to search & load a specific comic
4. Follow all directions outlined below

## Pre-Requisites

To ensure this runs properly, make sure the following are installed.

- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/lang/en/)

You'll also need a code editor and terminal, but you know that drill!

## Requirements

First, head over to the [API website](https://xkcd.now.sh/) to get started. Feel free to make some test requests there to get a feeling for how the data will work.

Second, start on your project.

1. Clone this repo. Please use this for your project.
2. Remove the current `git` configuration, and re-init yourself.
    - `rm -rf .git`
    - `git init`
3. Add & Commit your first `Initial Commit` to your own repository
4. Set up the Project
    - We used [Create React App](https://create-react-app.dev/) to set it up.
    - We stripped it down a bit to keep things simpler.
    - You can read their documentation, but here are the basics:
      - To Setup: `yarn install`
      - To Run: `yarn start`
      - Open up [http://localhost:3006](http://localhost:3006) to view the app.
    - All of your programming will be done in the `./src` directory
      - You shouldn't have to edit anything else.
5. Create two pages/components/containers in the app
    - HINT: You'll need some sort of router
    - The URLs should be `http://localhost:3006` and `http://localhost:3006/search`
6. Build out the Home Page
    - The home page should display the latest comic upon load.
7. Build out the Search Page
    - Upon load, the search page just displays an input field
    - When you add a value (1 - 2219) and submit, the corresponding comic will be displayed

# Element Classes

As you build the project, pay close attention to our CSS class name requirements. This will help ensure your app passes our automated tests. It will also allow us to see how well you follow instructions.

## Home Page

There should be a navigation with 2 links, a "Latest" and a "Search" button/link.

> Review the mockup here: [Home Page](https://i.imgur.com/xmzgCzf.png)

#### Classes

- The "Latest" link should have a class of `latest` on the clickable button.
- The "Search" link should have a class of `search` on the clickable button.
- Lastly, the image that will be displayed should have a class of `latestImage` on it.

## Search Page

The navigation will be identical to that on the "Home Page".

> Review the mockup here: [Search Page](https://i.imgur.com/oHvZup1.png)

#### Classes

- The search input should have a class of `searchInput` on the input itself.
- The search button should have a class of `searchSubmit` on the input itself.
- Lastly, the image that will be displayed should have a class of `searchImage` on it.

## Images

All images should have both `title` and `alt` text on them.

- The `alt` text should be pulled from the "title" field in the API response.
- The `title` text should be pulled from the "alt" field in the API response.

_(yes, we know it sounds reversed, but trust us)_

# Working Example

Feel free to take any liberties you'd like with design, but PLEASE NOTE the classes listed above for the elements.

Feel free to have fun, implement your own styles and make it feel like your own.

To help, here is a fully [working example](https://i.imgur.com/0dXELKX.gif).

# Bonus

There is a lot of other data available in the API response, such as "year", "month", "num", etc. Feel free to take that data and show it somewhere on the page.

This isn't required, but feel free to go beyond the requirements. 


