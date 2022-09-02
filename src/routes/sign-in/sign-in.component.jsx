import React, { Component } from "react";
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

export default class SignIn extends Component {

    componentDidMount() {
        this.getRedirectResultData();
    }

    getRedirectResultData = async () => {
        const response = await getRedirectResult(auth);
        console.log(response);
    }

    logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    // logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGoogleRedirect();
    //     console.log({ user });
    // }

    render() {
        return (
            <div>
                <h1>Sign-In Page</h1>
                <button onClick={this.logGoogleUser}>Sign-In with Google Pop-Up</button>
                <button onClick={signInWithGoogleRedirect}>Sign-In with Google Redirect</button>
            </div>
        )
    }
}
