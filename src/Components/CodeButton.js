import Button from "react-bootstrap/Button";
import "../CSS/CodeButton.css";
import { codeButtonClick } from "../Javascript/codeButtonHelper";

function CodeButton({ setCurrentLOC, username }) {
    return (
        <div className="align-self-center">
            <Button
                className="code-button"
                onClick={() => codeButtonClick(username, setCurrentLOC)}
            >
                CodeButton
            </Button>
        </div>
    );
}

export default CodeButton;
