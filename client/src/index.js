import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
//import { ContentProvider } from './Data/ContentProvider';
//import reducer,{initialState} from './Data/reducer';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <Router>
    {/*<ContentProvider initialState={initialState} reducer={reducer}> 
     </ContentProvider>*/}

    <App/>
   
  </Router>,
  document.getElementById('main-content')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
