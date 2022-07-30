# Scratch

EXAMPLE:
initialState = [
{
eventDd: 001,
eventName: 'Coachella',
transactions: [
{
transactionId: 001,
description: 'Bought everyone water',
amount: 40,
people: ['Will', 'Richard'],
date: '06/22/23',
completed: false,
},
{
transactionId: 002,
description: 'Bought everyone food',
amount: 100,
people: ['Will', 'Richard'],
date: '06/22/23',
completed: false,
},
],
},
{
eventDd: 002,
eventName: 'Bonaroo',
transactions: [
{
transactionId: 001,
description: 'Bought everyone water',
amount: 40,
people: ['Will', 'Richard'],
date: '06/22/23',
completed: false,
},
],
},
];
description: 'Bought everyone food',
amount: 100,
people: ['Will', 'Richard'],
date: '06/22/23',
completed: false,
},
],
},
{
eventDd: 002,
eventName: 'Bonaroo',
transactions: [
{
transactionId: 001,
description: 'Bought everyone water',
amount: 40,
people: ['Will', 'Richard'],
date: '06/22/23',
completed: false,
},
],
},
];

We need to load our dependencies.

// npm i webpack webpack-i webpack-dev-server style-loader css-loader html-webpack-plugin sass-loader babel-loader @babel/preset-env @babel/preset-react url-loader @babel/core file-loader nodemon sass react react-dom react-router-dom

1. npm i webpack: [https://www.npmjs.com/package/webpack](https://www.npmjs.com/package/webpack)
2. webpack-i: [https://www.npmjs.com/package/webpack-cli](https://www.npmjs.com/package/webpack-cli) (this is used to start a server. We need it locally)
3. webpack dev server: [https://www.npmjs.com/package/webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
4. html webpack plug in: (this is going to bundle all your code in your html file. Tell you will pile code into index.html file and what you are going to serve up. This is the index.html file you already created- you are going to point the webpack to them. Browser can only read html)
   1. [https://www.npmjs.com/package/html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
5. npm i style-loader: [https://www.npmjs.com/package/style-loader](https://www.npmjs.com/package/style-loader)
6. [https://www.npmjs.com/package/css-loader](https://www.npmjs.com/package/css-loader)
7. [https://www.npmjs.com/package/sass-loader](https://www.npmjs.com/package/sass-loader)
8. [https://www.npmjs.com/package/babel-loader](https://www.npmjs.com/package/babel-loader)
9. [https://www.npmjs.com/package/@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
10. [https://www.npmjs.com/package/@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react)
11. [https://www.npmjs.com/package/url-loader](https://www.npmjs.com/package/url-loader)
12. [https://www.npmjs.com/package/@babel/core](https://www.npmjs.com/package/@babel/core)
13. [https://www.npmjs.com/package/file-loader](https://www.npmjs.com/package/file-loader)
14. [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
15. [https://www.npmjs.com/package/sass](https://www.npmjs.com/package/sass)
16. https://www.npmjs.com/package/react-router-dom
17. https://www.npmjs.com/package/express

These are the react dependencies

1. npm i react-dom (this is the way react works with vanilla DOM) https://www.npmjs.com/package/react-dom
2. npm i react (installs the react dependency) https://www.npmjs.com/package/react
