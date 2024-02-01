import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../CSS/StoreItem.css';
import Image from 'react-bootstrap/Image';

function StoreUpgrades({item}){
    let item_image = require(`../Assets/${item}.png`);

    return(
        <Button className='Store-Item'variant="secondary">
            <Row>
                <Col sm={2} >
                    <Image src={item_image}/>
                </Col>
            </Row>
        </Button>
    );
}

export default StoreUpgrades;