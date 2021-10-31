import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Form className='w-50 contact'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Write your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write you Comment here</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button className='btn-warning'>Submit</button>
        </Form>
    );
};

export default Contact;