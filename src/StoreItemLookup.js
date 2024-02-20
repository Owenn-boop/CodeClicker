let item_texts = {
    'monkey': 'Code Monkey',
    'hobby_programmer':  'Hobby Programmer',
    'student':  'Student Programmer',
    'blinky': 'Blink Program',
    'fox': 'Code Fox', 
    'dae': 'Daemon Programming',
    'conjuro': 'Code Conjuror',
    'apache': 'Code Apache',
    'cyber': 'Cyber Joint',

}

let item_ids = {
    'monkey': 1,
    'hobby_programmer':  2,
    'student':  3,
    'blinky': 4,
    'fox': 5,
    'dae': 6,
    'conjuro': 7,
    'apache': 8,
    'cyber': 9,
}

let item_prices = {
    'monkey': 10,
    'hobby_programmer':  50,
    'student':  100,
    'blinky': 150,
    'fox': 200,
    'dae': 300,
    'conjuro': 450,
    'apache': 600,
    'cyber': 1000,

}

export function getName(item_name){
    return item_texts[item_name]
}

export function getId(item_name) {
    return item_ids[item_name];
}

export function getItemPrice(item_name) {
    return item_prices[item_name];
}