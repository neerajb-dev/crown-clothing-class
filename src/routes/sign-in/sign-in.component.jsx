import React, { Component } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

export default class SignIn extends Component {

    logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    render() {
        return (
            <div>
                <h1>Sign-In Page</h1>
                <button onClick={this.logGoogleUser}>
                    Sign-In with Google Pop-Up
                </button>
            </div>
        )
    }
}
