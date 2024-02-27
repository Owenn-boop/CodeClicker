import { Container, Row, Col } from "react-bootstrap";
import LocBalance from "./LocBalance.js";
import { useState, useEffect } from "react";

function LoginComponent({
    currentLOC,
    setCurrentLOC,
    setLoggedIn,
    setUserName,
}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>LOC: </h3>
                    <LocBalance currentLOC={currentLOC} />
                    <div id="LOCpS"></div>
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
                    <button
                        onClick={() =>
                            updateUserInfo(
                                setCurrentLOC,
                                setLoggedIn,
                                setUserName
                            )
                        }
                    >
                        Sign in
                    </button>
                </Col>
            </Row>
        </Container>
    );
}

export async function updateTick(
    setCurrentLOC,
    setLoggedIn,
    setUserName,
    username
) {
    try {
        if (username == "") {
            return;
        }
        let response = await fetch(
            `http://localhost:3001/api/v1/updateTick?id=${username}`
        );
        if (response.ok) {
            updateUserInfo(setCurrentLOC, setLoggedIn, setUserName);
        }
    } catch (err) {
        console.log(err);
    }
}

export async function updateUserInfo(setCurrentLOC, setLoggedIn, setUserName) {
    try {
        let username = document.querySelector("#username").value;
        if (username == "") {
            setUserName("");
            setLoggedIn(false);
            return;
        }
        let LOCpS = document.querySelector("#LOCpS");
        let response = await fetch(
            `http://localhost:3001/api/v1/getAccount?id=${username}`
        );
        if (response.ok) {
            let resJson = await response.json();
            setCurrentLOC(Math.round(resJson.data.loc * 10) / 10);
            LOCpS.innerHTML = `${Math.round(resJson.LOCpS * 100) / 100} LOC/S`;
            for (const item_id in resJson.data.items) {
                let item_quantity_element = document.querySelector(
                    `#${item_id} .itemQuantity`
                );
                item_quantity_element.textContent = resJson.data.items[item_id];
            }
            setLoggedIn(true);
            setUserName(username);
        }
    } catch (err) {
        console.log(err);
        setLoggedIn(false);
    }
}

export default LoginComponent;
