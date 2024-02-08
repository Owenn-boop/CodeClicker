import { Container, Row, Col } from "react-bootstrap";
import LocBalance from "./LocBalance.js";

function LoginComponent({show}) {
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
                <input id="username" placeholder="username" type="text"></input>
            </Col>
        </Row>
    </Container>
  );
}

export default LoginComponent;