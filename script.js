
let regexp = /^\+\d{1} \(\d{3}\) \d{3}[-]\d{2}[-]\d{2}\b/;

function testStr(str) {
    let result = regexp.test(str);

    console.log(`
Строка: '${str}'
РВ: ${String(regexp)}
Результат: ${result}
    `);
}
