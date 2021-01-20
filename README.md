# CSSEC Website (Frontend)

This is the frontend of CSSEC Website, it uses [Next.js](https://nextjs.org/) as its server-side React JS Framework. Material-UI for its layout. Also, Wordpress for its dynamic data and posts. Lastly, Google Calendar to keep track of events withint the CSSEC.

[![Next on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://www.netlify.com/)

-   Learn how to [deploy Next.js to netlify](https://github.com/netlify/next-on-netlify)

## Libraries/Frameworks used

Javascript is the most commonly used language for web applications. Basic understanding of the core functionalities of Javascript (async/await, Promises, etc.) is required for web development.

-   [Next.js](https://nextjs.org/docs/getting-started)
-   [React.js](https://reactjs.org/docs/getting-started.html)
-   [Material UI](https://material-ui.com/getting-started/usage/)
-   [Wordpress REST API](https://developer.wordpress.org/rest-api/)
    -   [wpapi](https://www.npmjs.com/package/wpapi)
-   [Google Calendar API](https://developers.google.com/calendar/v3/reference)
    -   [googleapis](https://www.npmjs.com/package/googleapis)

## Getting Started

First, clone this project.

Second, download dependencies

```bash
npm install
```

Third, run on Development Server

```bash
npm run dev
# or
yarn dev
```

Fourth, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Adding a new Page

Since, this framework uses Next.js the route followed the folder structure of pages. In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name, as long as it is in pages folder.

-   Example, if you create a file in pages folder about.js, then it is accessible through /about

```javascript
const About = () => {
    return <div>About</div>;
};

export default About;
```

To learn more about Next.js routing, check the [Next.js pages documentation](https://nextjs.org/docs/basic-features/pages).

### Pages with Dynamic Routes

Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.

### Adding a route

If you want to add a route to the Navigation Bar just go to navigation/routes.js. It consist of an array in which you can add by adding another object.

## Folder Structure

The project follows a modularized folder structure on top of the provided structure by Next.js.

```
├── components
│   ├── accss
│   │   └── ... components for the accss page
│   ├── events
│   │   └── ... components for the events page
│   ├── general
│   │   └── footer.js
│   │   └── header.js
│   │   └── ... components for the every page
│   ├── home
│   │   └── ... components for the home page
│   ├── it-week
│   │   └── ... components for the IT Week page
│   ├── news
│   │   └── ... components for the news page
│   └── theme.js
├── data
│   └── ... data to be used in the site that doesn't need backend.
├── navigation
│   ├── navbar.js
│   ├── navburger.js
│   └── routes.js
├── pages
│   └── ... pages following the Next.js folder structure
├── utils
│   ├── constants.js
│   ├── google.js
│   └── wordpress.js
```

-   The '**components**' folder contains the modularized components that the pages on the 'pages' folder use. It also contains the components for the header, footer, and the theme for Material UI.
-   The '**data**' folder contains data in Javascript object form to be used by components.
-   The '**navigation**' folder contains the components for the navigation menu (both web and mobile) and the explicit list of routes.
    -   nav.js - web navigation menu
    -   nav-burger.js - mobile navigation menu
    -   routes.js - list of routes
-   The '**pages**' folder contains the pages of the project.
-   The '**utils**' folder contains external APIs, constants and generators, such as the backend Wordpress URL, for the project.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contributing

Only pull request if there's seem a minor issue that you can resolve. For major changes, please open an issue first to discuss what you would like to change.

## Copyright

-   Ateneo de Davao Research in Information Systems and Software Engineering Lab (ARISEn Lab)
-   Computer Studies Executive Council (2020-2021)

## License

[MIT](https://choosealicense.com/licenses/mit/)
