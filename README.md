# Project consist of both Backend and Frontend code

## Folder Structure : -       
      
### Go to the root directory in the source code and find out the below-mentioned files. This architecture helps in            creating a big modular App:
       
       
       backend-my-app /* Backend of the code goes here */ 
        server.js
        package.json /* Backend dependency */    
       build/      /* Optional for deployment of Frontend Build */        
       public/
       src/        /*      Frontend Sourcecode      */
        global/      /*   Components getting used everywhere   */
         header.css
         header.js     
        main/              
         Kitchen.js
         PlaceOrder.js
         UpdatePredicted.js
         App.js   /* Routing logic and component assembly part */
       package.json /* Frontend dependency */ 
       
    


## Available Scripts

## Backend Code


     
     cd backend-my-app 
     npm install
     node server.js


## Frontend Code

### Root directory except the backend-my-app contains the frontend code.

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
