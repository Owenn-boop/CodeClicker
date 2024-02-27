import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StoreItem from "./StoreItem";
import StoreUpgrades from "./StoreUpgrades";
import { Col } from "react-bootstrap/esm";

function Store(props) {
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
                <Row>
                    <StoreItem item={"monkey"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"hobby_programmer"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"student"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"blinky"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"fox"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"dae"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"conjuro"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"apache"} props={props} />
                </Row>
                <Row>
                    <StoreItem item={"cyber"} props={props} />
                </Row>
            </Container>
        </>
    );
}

export default Store;
