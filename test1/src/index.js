import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// new component
//import Basic from './basic';
import Props from './props';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

//render(<Props />, document.getElementById('root'));

render(<Props name ="Zero" birth={1991} />,
document.getElementById('root'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
