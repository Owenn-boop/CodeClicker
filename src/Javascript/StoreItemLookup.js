let item_texts = {
    monkey: "Code Monkey",
    hobby_programmer: "Hobby Programmer",
    student: "Student Programmer",
    blinky: "Blink Program",
    fox: "Code Fox",
    dae: "Daemon Programming",
    conjuro: "Code Conjuror",
    apache: "Code Apache",
    cyber: "Cyber Joint",
};

let item_ids = {
    monkey: 1,
    hobby_programmer: 2,
    student: 3,
    blinky: 4,
    fox: 5,
    dae: 6,
    conjuro: 7,
    apache: 8,
    cyber: 9,
};

let item_prices = {
    monkey: 10,
    hobby_programmer: 50,
    student: 200,
    blinky: 800,
    fox: 2000,
    dae: 3500,
    conjuro: 5000,
    apache: 10000,
    cyber: 25000,
};

export function getItemNames() {
    return Object.keys(item_texts);
}

export function getName(item_name) {
    return item_texts[item_name];
}

export function getId(item_name) {
    return item_ids[item_name];
}

export function getItemPrice(item_name) {
    return item_prices[item_name];
}
