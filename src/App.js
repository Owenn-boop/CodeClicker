import "./CSS/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./Components/Store";
import "./CSS/StoreItem.css";
import CodeButton from "./Components/CodeButton";
import LoginComponent from "./Components/LoginComponent";
import { useEffect, useState, useRef } from "react";
import { updateTick } from "./Components/LoginComponent";

function App() {
    const [currentLOC, setCurrentLOC] = useState(-1);
    const [currentLOCpS, setCurrentLOCpS] = useState(-1);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUserName] = useState("");
    const userRef = useRef(username);
    const loggedInRef = useRef(loggedIn == true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (loggedInRef.current) {
                updateTick(
                    setCurrentLOC,
                    setCurrentLOCpS,
                    setLoggedIn,
                    userRef.current
                );
            }
            console.log("A tick has passed." + userRef.current);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // for use in above use effect
    useEffect(() => {
        loggedInRef.current = loggedIn;
        userRef.current = username;
        if (!loggedIn) {
            setCurrentLOC(-1);
            setUserName("");
        }
    }, [username, loggedIn]);

    return (
        <div className="App">
            <header className="App-header">
                <h5>CodeClicker</h5>
            </header>

            <Container fluid>
                <Row>
                    <Col className="d-flex" id="LoginColumn">
                        {/* Content for the first column */}
                        <LoginComponent
                            currentLOC={currentLOC}
                            currentLOCpS={currentLOCpS}
                            setCurrentLOC={setCurrentLOC}
                            setCurrentLOCpS={setCurrentLOCpS}
                            setLoggedIn={setLoggedIn}
                            setUserName={setUserName}
                            loggedIn={loggedIn}
                        />
                    </Col>
                    <Col className="CodeButtonCol d-flex align-items-center justify-content-center">
                        {/* Content for the second column */}
                        <CodeButton
                            setCurrentLOC={setCurrentLOC}
                            username={username}
                        />
                    </Col>
                    <Col className="StoreCol">
                        {/* Content for the third column */}
                        <Store
                            setCurrentLOC={setCurrentLOC}
                            setLoggedIn={setLoggedIn}
                            setUserName={setUserName}
                            setCurrentLOCpS={setCurrentLOCpS}
                            username={username}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
