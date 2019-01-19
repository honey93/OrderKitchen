Project consist of both Backend and Frontend code

## Folder Structure 
/*
Go to the root directory in the source code and find out the below-mentioned files. <br> This Architecture helps in creating a big modular App :
*/
<br>
<br>
backend-my-app/ /* Backend of the code goes here */ <br>
&nbsp; server.js<br>
&nbsp; build/      /* Optional for deployment of Frontend Build */ <br>
&nbsp; package.json /* Backend dependency */<br>
&nbsp; ...<br>
public/<br>
src/  /*      Frontend Sourcecode      */<br>
&nbsp; global/      /*   Components getting used everywhere   */<br>
&nbsp;&nbsp;  header.css<br>
&nbsp;&nbsp;  header.js     <br>
&nbsp; main/              <br>
&nbsp;&nbsp;  Kitchen.js<br>
&nbsp;&nbsp;  PlaceOrder.js<br>
&nbsp;&nbsp;  UpdatePredicted.js<br>
&nbsp; App.js   /* Routing logic and component assembly part */<br>
package.json /* Frontend dependency */ <br>
 ............<br>
<br>
## Available Scripts

## Backend Code
### `cd backend-my-app` <br>
### `npm install`<br>
### `node server.js`<br>


## Frontend Code

Root directory except the backend-my-app contains the frontend code.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
<br> For deployment, put the build code into the backend-my-app/build folder <br> and then start the express server



See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
