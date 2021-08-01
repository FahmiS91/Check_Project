import axios from 'axios';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Error from '../../components/Error'
import Loading from '../../components/Loading';

function RegisterScreen({history}) {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error,setError]=useState(null)

  const submitHandler = async (e) => {
    const apiUrl='http://localhost:5000'
    e.preventDefault()
    if (password !== confirm) {
       setMessage('wrong confirm password ')
    }
    else {
      setMessage(null)
      try {
               setLoading(true);
               const { data } = await axios.post(`${apiUrl}/api/users`, {
                 name,
                 email,
                 password,
               });
        setLoading(false)
        localStorage.setItem('info', JSON.stringify(data))
        history.push('/login')


        
      } catch (error) {
        setError(error.response.data.message)
                setLoading(false);

      }
    }
  }
    
  return (
    <Container className="mt-3" style={{ width: "500px" }}>
      <h1>Register</h1>
      {message ? <Error>{message}</Error> : null}
      {error ? <Error>{error}</Error> : null}
      {loading ? <Loading /> : null}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            className="mb-3"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" className="mt-2 " type="submit">
          Submit
        </Button>
        Have an Account ?
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login Here
        </Link>
      </Form>
    </Container>
  );
}

export default RegisterScreen
