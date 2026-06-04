const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by Apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'cpp', 'java']

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


