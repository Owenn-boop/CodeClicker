import Button from "react-bootstrap/Button";
import "../CSS/CodeButton.css";
import { codeButtonClick } from "../Javascript/codeButtonHelper";

function CodeButton({ setCurrentLOC }) {
    return (
        <div className="align-self-center">
            <Button
                className="code-button"
                onClick={() =>
                    codeButtonClick(
                        document.querySelector("#username").value,
                        setCurrentLOC
                    )
                }
            >
                CodeButton
            </Button>
        </div>
    );
}

export default CodeButton;
