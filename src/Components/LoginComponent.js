import { Container, Row, Col } from "react-bootstrap";
import LocBalance from "./LocBalance.js";
import { useState, useEffect } from "react";

function LoginComponent({
    currentLOC,
    currentLOCpS,
    setCurrentLOC,
    setCurrentLOCpS,
    setLoggedIn,
    setUserName,
    loggedIn,
}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>LOC: </h3>
                    <LocBalance currentLOC={currentLOC} />
                    <div>
                        {currentLOCpS == -1 || !loggedIn
                            ? ""
                            : currentLOCpS + " LOC/S"}
                    </div>
                </Col>
            </Row>
            <Row>
                {!loggedIn ? (
                    <Col>
                        <h4>Login</h4>
                        <input
                            id="username"
                            placeholder="username"
                            type="text"
                        ></input>
                        <br />
                        <button
                            onClick={() => {
                                userLogin(
                                    document.getElementById("username").value,
                                    setCurrentLOC,
                                    setLoggedIn,
                                    setUserName,
                                    setCurrentLOCpS
                                );
                            }}
                        >
                            Sign in
                        </button>
                    </Col>
                ) : (
                    <Col>
                        <h4>Logout</h4>
                        <button
                            onClick={() => {
                                userLogout(
                                    setCurrentLOC,
                                    setLoggedIn,
                                    setUserName
                                );
                            }}
                        >
                            Logout
                        </button>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export async function updateTick(
    setCurrentLOC,
    setCurrentLOCpS,
    setLoggedIn,
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
            updateUserInfo(
                username,
                setCurrentLOC,
                setLoggedIn,
                setCurrentLOCpS
            );
        }
    } catch (err) {
        console.log(err);
    }
}
export async function userLogin(
    username,
    setCurrentLOC,
    setLoggedIn,
    setUserName,
    setCurrentLOCpS
) {
    if (username == "") {
        setUserName("");
        setLoggedIn(false);
        return;
    } else {
        try {
            let response = await fetch(
                `http://localhost:3001/api/v1/getAccount?id=${username}`
            );
            if (response.ok) {
                setLoggedIn(true);
                setUserName(username);
                updateUserInfo(
                    username,
                    setCurrentLOC,
                    setLoggedIn,
                    setCurrentLOCpS
                );
            }
        } catch {
            setUserName("");
            setLoggedIn(false);
        }
    }
}

export async function userLogout(setCurrentLOC, setLoggedIn, setUserName) {
    setLoggedIn(false);
    setUserName("");
    setCurrentLOC(-1);

    // resetting all item quantities
    for (const item_number in [...Array(9).keys()]) {
        let item_quantity_element = document.querySelector(
            `#${"item_" + (parseInt(item_number) + 1)} .itemQuantity`
        );
        item_quantity_element.textContent = "0";
    }
}

export async function updateUserInfo(
    username,
    setCurrentLOC,
    setLoggedIn,
    setCurrentLOCpS
) {
    try {
        let LOCpS = document.querySelector("#LOCpS");
        let response = await fetch(
            `http://localhost:3001/api/v1/getAccount?id=${username}`
        );
        if (response.ok) {
            let resJson = await response.json();
            setCurrentLOC(Math.round(resJson.data.loc * 10) / 10);
            setCurrentLOCpS(Math.round(resJson.LOCpS * 100) / 100);
            for (const item_id in resJson.data.items) {
                let item_quantity_element = document.querySelector(
                    `#${item_id} .itemQuantity`
                );
                item_quantity_element.textContent = resJson.data.items[item_id];
            }
        }
    } catch (err) {
        console.log(err);
        setLoggedIn(false);
    }
}

export default LoginComponent;
