import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Login = ({ title, description }) => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    console.log("user login ready");
    console.log("NIP", NIP);
    console.log("Password", password);
    const requestingData = {
      nip: NIP,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:5000/users/login",
      data: requestingData,
    })
      .then((result) => {
        localStorage.setItem("nip", result.data.users.nip);
        localStorage.setItem("nama", result.data.users.nama);
        window.location.replace("/dashboard");
      })
      .catch(() => alert("data belum terdaftar"));
  };

  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={200}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukan NIP anda"
            required
            onChange={(e) => handleNIP(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">PASSWORD</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            required
            onChange={(e) => handlePassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => userLogin()} className="my-3 w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
