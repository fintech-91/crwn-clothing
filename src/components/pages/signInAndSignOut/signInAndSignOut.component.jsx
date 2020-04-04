import React from 'react';

import SignIn from '../../pages/sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';

import './signInAndSignOut.styles.scss';



const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp/>
    </div>

)

export default SignInAndSignUpPage;