import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import StoreItem from './StoreItem';

function Store(){

    return(
        <Container>
            <Row><h2 className='border-bottom'>Store</h2></Row>
            <Row><p className='Tools'>Tools</p></Row>
            <Row><StoreItem item_name={'Mario'}/></Row>
            <Row><StoreItem item_name={'Luigi'}/></Row>
        </Container>
    );
}

export default Store;