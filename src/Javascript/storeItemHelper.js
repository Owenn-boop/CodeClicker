import { updateUserInfo } from "../Components/LoginComponent";

export async function storeItemClick(
    item,
    setCurrentLOC,
    setLoggedIn,
    setUserName,
    setCurrentLOCpS,
    username
) {
    console.log(item, username);
    try {
        let response = await fetch(
            `http://localhost:3001/api/v1/buyItem?item_id=${item}&id=${username}`
        );
        console.log(response);
        if (response.ok) {
            updateUserInfo(
                username,
                setCurrentLOC,
                setLoggedIn,
                setCurrentLOCpS
            );
        }
    } catch (err) {
        console.log(err);
    }
}
