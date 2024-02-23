// import React from 'react';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeStackNavigation from './src/navigation/AppNavigation';
// import Splash from './src/screens/splash';
// import { useState,useEffect } from 'react';
// import { loginUser } from './src/networks/AuthenticationAPI';
// import Main from './src/Main';



// const App = () => {


//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Simulate an asynchronous login check
//     const checkLoginStatus = async () => {
//       // Your login check logic here
//       // For example, you might check if the user is authenticated
//       // using a token or some other authentication mechanism.
//       // Set the isLoggedIn state accordingly.
//       // For this example, I'm using a simple delay to simulate the async check.
//       setTimeout(() => {
//         setIsLoggedIn(true); // Set to true if the user is logged in
//       }, 2000); // Simulated delay of 2 seconds
//     };

//     checkLoginStatus();
//   }, [])

//   if(isLoggedIn){
//     return (
//       <NavigationContainer>
//         <HomeStackNavigation/>
//      </NavigationContainer>
//     )
//   }
// else{
//   return (
//     <Splash></Splash>
//     )
// } 
// };

// export default App;




import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import Main from './src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
