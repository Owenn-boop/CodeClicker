import LocBalance from "../Components/LocBalance";
import App from "../App";

export async function codeButtonClick(user, setCurrentLOC) {
    console.log(`${user} clicked the button!`);
    if (user.length < 3) {
        alert("Username is too short/you are not logged in!");
    }
    try {
        let response = await fetch(
            `http://localhost:3001/api/v1/click?id=${user}`
        );
        console.log(response);
        if (response.ok) {
            let resJson = await response.json();
            if (resJson.message == "Success, account created!") {
                alert("Account has been created!");
            }
            console.log(resJson);
            setCurrentLOC(Math.round(resJson.balance * 10) / 10);
        }
    } catch (err) {
        console.log(err);
    }
}
