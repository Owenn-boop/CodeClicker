import { Container, Row, Col } from "react-bootstrap";

function LoginComponent() {
  return (
    <Container>
        <Row>
            <Col>
                <h3>LOC: </h3>
                <h2 id="loc_balance">0</h2>
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