const path = require('path');

console.log('Cклеить участки пути', path.join(__dirname, 'first', 'second'));
const fullPath = path.resolve(__dirname, 'first', 'second', 'third');
console.log('Парсинг пути', path.parse(fullPath))

const siteUrl = 'http://localhost:8080/users?id=5433';

const url = new URL(siteUrl);
console.log(url)