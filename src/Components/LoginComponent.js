import { Container, Row, Col } from "react-bootstrap";
import LocBalance from "./LocBalance.js";
import { useState, useEffect } from "react";

function LoginComponent({ show }) {
    //const [loggedIn, setLoggedIn] = useState(false);

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

export async function updateTick() {
    try {
        let username = document.querySelector("#username").value;
        if (username == "") {
            return;
        }
        let response = await fetch(
            `http://localhost:3001/api/v1/updateTick?id=${username}`
        );
        if (response.ok) {
            updateUserInfo();
        }
    } catch (err) {
        console.log(err);
    }
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
            loc_balance.innerHTML = Math.round(resJson.data.loc * 10) / 10;
            console.log(resJson.data);
            for (const item_id in resJson.data.items) {
                let item_quantity_element = document.querySelector(
                    `#${item_id} .itemQuantity`
                );
                item_quantity_element.textContent = resJson.data.items[item_id];
            }
            //setLoggedIn(true);
        }
    } catch (err) {
        console.log(err);
        //setLoggedIn(false);
    }
}

export default LoginComponent;
