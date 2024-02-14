import { Container, Row, Col } from "react-bootstrap";
import LocBalance from "./LocBalance.js";

function LoginComponent({ show }) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>LOC: </h3>
                    <LocBalance />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Login</h4>
                    <input
                        id="username"
                        placeholder="username"
                        type="text"
                    ></input>
                    <br />
                    <button onClick={updateUserInfo}>Sign in</button>
                </Col>
            </Row>
        </Container>
    );
}

export async function updateUserInfo() {
    try {
        let username = document.querySelector("#username").value;
        if (username == "") {
            return;
        }
        let loc_balance = document.querySelector("#loc_balance");
        let response = await fetch(
            `http://localhost:3001/api/v1/getAccount?id=${username}`
        );
        if (response.ok) {
            let resJson = await response.json();
            loc_balance.innerHTML = resJson.data.loc;
        }
    } catch (err) {
        console.log(err);
    }
}

export default LoginComponent;
