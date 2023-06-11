import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { logout } from "./logout";

const Edit = () => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [passwordBaru, setPasswordBaru] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const editProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: "http://localhost:5000/users",
      data: requestingData,
    }).then(() => {
      alert("Anda berhasil mengganti password, silahkan login kembali");
      logout();
      navigate("/login");
    });
  };
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            onChange={(e) => setNama(e.target.value)}
            defaultValue={localStorage.getItem("nama")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Baru</Form.Label>
          <Form.Control onChange={(e) => setPasswordBaru(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Lama</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Text>
            Silahkan masukan password lama anda, Anda harus melakukan login
            ulang setelah mengupdate Password
          </Form.Text>
          <Button className="w-100" onClick={() => editProfile()}>
            Update Profile
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Edit;
