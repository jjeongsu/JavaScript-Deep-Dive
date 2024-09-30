//쿼카를 실행시켜서 확인해보세요

// 1. 숫자 + 문자 를 받을 때
// parseInt는 문자를 만나면 해당 문자 전까지만 number타입으로 변환 -> 1000
console.log(parseInt('1000원'))
// 전체 문자를 숫자로 변환하므로 --> NaN
console.log(Number('1000원'))

// 2. 숫자가 없는 값을 넣을 때
// parseInt는 무조건 NaN을 반환
console.log(parseInt(null))
console.log(parseInt(true))
console.log(parseInt(''))

// Number는 빈값&falsy는 0을, true는 1을 반환
console.log(Number())
console.log(Number(null))
console.log(Number(false))
console.log(Number(''))
console.log(Number(true))
