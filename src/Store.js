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
            <Row><StoreItem item={'mario'}/></Row>
            <Row><StoreItem item={'luigi'}/></Row>
            
        </Container>
    );
}

export default Store;