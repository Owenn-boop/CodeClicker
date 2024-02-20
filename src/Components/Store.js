import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import StoreItem from './StoreItem';
import StoreUpgrades from './StoreUpgrades';
import { Col } from 'react-bootstrap/esm';

function Store(){

    return(
        <Container>
            <Row><h2 className='border-bottom'>Store</h2></Row>
            {/*  
            <Row><p className='border-bottom'>Upgrades</p></Row>
            <Row>
            <Col><StoreUpgrades item={'monkey'}/></Col>
            <Col><StoreUpgrades item={'mario'}/></Col>
            <Col><StoreUpgrades item={'luigi'}/></Col>
            </Row>
            */}

            
            {/*<Row><p className= 'border-bottom'>Tools</p></Row>*/}
            <Row><StoreItem item={'monkey'}/></Row>
            <Row><StoreItem item={'hobby_programmer'}/></Row>
            <Row><StoreItem item={'student'}/></Row>
            <Row><StoreItem item={'blinky'}/></Row>
            <Row><StoreItem item={'fox'}/></Row>
            <Row><StoreItem item={'dae'}/></Row>
            <Row><StoreItem item={'conjuro'}/></Row>
            <Row><StoreItem item={'apache'}/></Row>
            <Row><StoreItem item={'cyber'}/></Row>
            
        </Container>
    );
}

export default Store;