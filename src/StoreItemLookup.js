let item_texts = {
    'monkey': 'Code Monkey',
    'hobby_programmer':  'Hobby Programmer',
    'student':  'Student Programmer',
}

let item_ids = {
    'monkey': 1,
    'hobby_programmer':  2,
    'student':  3,
}

let item_prices = {
    'monkey': 10,
    'hobby_programmer':  50,
    'student':  200,
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