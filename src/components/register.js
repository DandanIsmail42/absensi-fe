import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";

const Register = ({ title, description }) => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };

  const handleNama = (inputNama) => {
    setNama(inputNama);
  };

  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userRegister = () => {
    const requestingData = {
      nip: NIP,
      nama: nama,
      password: password,
    };
    axios({
      method: "POST",
      url: "http://localhost:5000/users",
      data: requestingData,
    })
      .then((result) => {
        console.log(result.data.registerd);
        if (result.data.registered) {
          window.location.replace("/login");
        }
      })
      .catch((error) => alert(error.message));
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
          <Form.Label className="fw-bold">NAMA</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama anda"
            required
            onChange={(e) => handleNama(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">PASSWORD</Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukan NIP anda"
            required
            onChange={(e) => handlePassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => userRegister()} className="my-3 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
