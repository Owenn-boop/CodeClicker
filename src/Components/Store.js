import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StoreItem from "./StoreItem";
import { getItemNames } from "../Javascript/StoreItemLookup";
import StoreUpgrades from "./StoreUpgrades";
import { Col } from "react-bootstrap/esm";

function Store({
    setCurrentLOC,
    setLoggedIn,
    setUserName,
    setCurrentLOCpS,
    username,
}) {
    return (
        <>
            <Row>
                <h2 className="border-bottom">Store</h2>
            </Row>
            <Container
                id="StoreItemContainer"
                className="overflow-x-hidden overflow-y-auto"
            >
                {/*  
            <Row><p className='border-bottom'>Upgrades</p></Row>
            <Row>
            <Col><StoreUpgrades item={'monkey'}/></Col>
            <Col><StoreUpgrades item={'mario'}/></Col>
            <Col><StoreUpgrades item={'luigi'}/></Col>
            </Row>
            */}

                {/*<Row><p className= 'border-bottom'>Tools</p></Row>*/}
                {getItemNames().map((name) => {
                    return (
                        <Row key={`${name}`}>
                            <StoreItem
                                item={`${name}`}
                                setCurrentLOC={setCurrentLOC}
                                setLoggedIn={setLoggedIn}
                                setUserName={setUserName}
                                setCurrentLOCpS={setCurrentLOCpS}
                                username={username}
                            />
                        </Row>
                    );
                })}
            </Container>
        </>
    );
}

export default Store;
