import React, { Component} from "react";

class UserInfo extends Component {
    render() {
        return (
            <div>
                <form id="profile-form" className="callout text-center shadow">
                    <h2>Profile Information</h2>
                    <div className="floated-label-wrapper">
                        <label htmlFor="pass">PIN</label>
                        <input type="password" id="pass" name="password input" placeholder="PIN" />
                    </div>
                    <div className="floated-label-wrapper">
                        <label htmlFor="tel">Phone #</label>
                        <input type="tel" id="tel" name="tel input" placeholder="Phone number" />
                    </div>
                    <div className="floated-label-wrapper">
                        <label htmlFor="zip">Zip code</label>
                        <input type="number" id="zip" name="number input" placeholder="Zip code" />
                    </div>
                </form>
            </div>
        );
    }


}    







