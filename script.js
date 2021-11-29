
const regexp = /^\+\d{1} \(\d{3}\) \d{3}[-]\d{2}[-]\d{2}$/

function testStr(str) {
    let result = regexp.test(str);
    console.log(`
        Строка: '${str}'
        РВ: ${String(regexp)}
        Результат: ${result}
    `);
}

testStr(' +7(123)456-78-90');
testStr('7123456-78-90');
testStr('8 123 456 78 90');
testStr('380904005060');
testStr('asd +7 (123) 456-78-90 asd');
testStr('+7 (123) 456-78-90');
