// 논리 연산자를 사용한 단축평가
// truthy && 후항 실행
// truthy || 후항 평가 x

console.log('cat' && 'dog')
console.log('cat' || 'dog')

// falsy && 후항 평가x
// falsy || 후항 실행

console.log(false && 'dog')
console.log(false || 'dog')

//즉, 어떤 값이 truthy일때 무언가를 하려면 && 연산자를
// 어떤 값이 falsy일때 무언가를 하려면  || 연산자를 사용한다.

let element = null
//let value = element.value // 🚨 cannot read property of null
let better_value = element && element.value

// 함수매개변수에 기본값 설정할때
function getStringLength(str = '') {
  return str.length
}

function getStringLength2(str) {
  str = str || ''
  return str.length
}

//optional chainning과 &&의 차이
// 좌항이 null,undefined이 아닌 falsy한 값일 때의 차이를 보자!

const str = ''
const length = str && str.length
console.log(length)
// 문자열의 길이를 참조할 수 없다.
// 좌항이 falsy한 값이기 때문에, ''을 그대로 반환하다.

const length2 = str?.length
console.log(length2)
// 문자열의 길이를 참조할 수 있다.
// 좌항이 falsy로 평가되는 값(빈 문자열)이더라도 null, undefined가 아니라면 참조를 이어간다.

// null병합 연산자
let foo = null ?? 'default string'
console.log(foo)

let foo1 = '' ?? 'default string'
console.log(foo1)
// falsy하더라도 null이나 undefined가 아니면 전항을 반환한다.

let foo2 = '' || 'default string'
console.log(foo2)
// falsy한 값이라면 무조건 후항을 반환한다.
