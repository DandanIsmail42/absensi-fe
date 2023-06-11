import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Badge, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarDash from "./navbar";
import Edit from "./edit";
import { logout } from "./logout";

const Dashboard = () => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("Maaf anda belum login");
      navigate("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:5000/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [absenNotif]);

  const absen = (params) => {
    const requestingData = { nip: localStorage.getItem("nip") };
    axios({
      method: "POST",
      url: `http://localhost:5000/absensi/${params}`,
      data: requestingData,
    }).then((result) => setAbsenNotif(!absenNotif));
  };

  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <NavbarDash logout={logout} />
        <div>
          <p>Hello {localStorage.getItem("nama")}</p>
          <p>nip : {localStorage.getItem("nip")}</p>
        </div>
        <div>
          <Edit />
        </div>

        <div className="d-flex justify-content-center gap-2">
          <Badge
            pill
            bg="primary"
            style={{ cursor: "pointer" }}
            onClick={() => absen("checkin")}
          >
            CheckIn
          </Badge>
          <Badge
            pill
            bg="danger"
            style={{ cursor: "pointer" }}
            onClick={() => absen("checkout")}
          >
            CheckOut
          </Badge>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absensi, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{absensi.users_nip}</td>
                    <td>{absensi.status}</td>
                    <td>{absensi.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
