// require npm packages here
const React = require("react"),
    reactDOM = require("react-dom");
// import components here
import  {Main} from"./components/main.jsx";
// render the main element in the window

reactDOM.render(<h2>this is the app component</h2>
,
  document.getElementById('root'));
