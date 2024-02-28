import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../CSS/StoreItem.css";
import Image from "react-bootstrap/Image";
import { getName, getId, getItemPrice } from "../Javascript/StoreItemLookup.js";
import { storeItemClick } from "../Javascript/storeItemHelper.js";

function StoreItem({
    item,
    setCurrentLOC,
    setLoggedIn,
    setUserName,
    setCurrentLOCpS,
    username,
}) {
    let item_image = require(`../Assets/${item}.png`);
    let item_name = getName(item);
    let item_id = getId(item);
    let item_price = getItemPrice(item);
    return (
        <Button
            className="Store-Item"
            variant="secondary"
            id={"item_" + item_id}
            data={"item_" + item_id}
            onClick={() =>
                storeItemClick(
                    "item_" + item_id,
                    setCurrentLOC,
                    setLoggedIn,
                    setUserName,
                    setCurrentLOCpS,
                    username
                )
            }
        >
            <Row>
                <Col sm={2}>
                    <Image src={item_image} className="Store-Image" />
                </Col>
                <Col sm={6} className="Store-Title">
                    {item_name}
                </Col>
                <Col sm={4} className="Store-Extra">
                    <div>
                        Owned: <span className="itemQuantity">0</span>
                    </div>
                    {/* Will be used for a count of items possibly? */}
                    <br />
                    <div id="Store-Price">
                        Price:{" "}
                        <span className="text-light bg-dark">{item_price}</span>
                    </div>
                </Col>
            </Row>
        </Button>
    );
}

export default StoreItem;
