import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firbase.init';
import './Login.css';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

initializeAuthentication();

const provider = new GoogleAuthProvider();

const Login = () => {
    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }

    return (
        <div>
            <Form className='w-50 form mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='btn-warning' type="submit">
                    Log in
                </Button>
                <button onClick={handleSignIn} className="login mt-5 btn-warning ">Google Sign in</button>
            </Form>


        </div>
    );
};

export default Login;