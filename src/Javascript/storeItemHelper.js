import { updateUserInfo } from "../Components/LoginComponent";

export async function storeItemClick(item) {
    let user = document.getElementById("username").value;
    console.log(item, user);
    try {
        let response = await fetch(
            `http://localhost:3001/api/v1/buyItem?item_id=${item}&id=${user}`
        );
        console.log(response);
        if (response.ok) {
            updateUserInfo();
        }
    } catch (err) {
        console.log(err);
    }
}
