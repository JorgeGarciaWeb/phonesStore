import { useState } from "react"
import { Form, Button } from 'react-bootstrap'

const SignUpForm = () => {

    const [signupData, setSignupData] = useState({

        name:'',
        username:'',
        email:'',
        password:'',
        avatar:''

    })

    const {name, username, password, email } = signupData

    return (
        <>
            <div className='button-86'>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label ></Form.Label>
                        <Form.Control type="text" value={name} name="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={username}  name="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" value={email} name="email" placeholder="Email" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" value={password}  name="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label></Form.Label>
                        <Form.Control type="file"  name="avatar" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button className='button-85' type="submit" >Sign Up</Button>
                    </div>

                </Form>
            </div>
        </>
    )
}

export default SignUpForm