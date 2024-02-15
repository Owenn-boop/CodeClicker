import "./CSS/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./Components/Store";
import "./CSS/StoreItem.css";
import CodeButton from "./Components/CodeButton";
import LoginComponent from "./Components/LoginComponent";
import { useEffect, useState } from "react";
import { updateTick } from "./Components/LoginComponent";

function App() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTick();
            console.log("A tick has passed.");
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h5>CodeClicker!</h5>
            </header>

            <Container fluid>
                <Row>
                    <Col className="d-flex" id="LoginColumn">
                        {/* Content for the first column */}
                        <LoginComponent />
                    </Col>
                    <Col className="CodeButtonCol d-flex align-items-center justify-content-center">
                        {/* Content for the second column */}
                        <CodeButton />
                    </Col>
                    <Col className="StoreCol">
                        {/* Content for the third column */}
                        <Store />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
