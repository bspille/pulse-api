// require npm packages here
const React = require("react"),
    Router = require("react-router-dom").BrowserRouter,
    Route = require("react-router-dom").Route,
    Link = require("react-router-dom").Link;
// import modules here
import {GoogleSignin} from "./children/google_signin.jsx";

    class Main extends React.Component {

        render(){
            return <div>
                <h2>this is the main component</h2>
                <GoogleSignin/>
            </div>;
        }
    }
    // export Main
    export {Main};
