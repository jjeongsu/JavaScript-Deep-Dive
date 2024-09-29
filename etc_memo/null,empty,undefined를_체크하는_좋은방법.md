# null, undefined, emtpy체크하기

## intro

Javascript의 조건문 안에서 null, undefined,0,''(빈 문자열)은 false로 변환된다.

확인방법은 간단하다! 확인하고자 하는 값에 !!연산자를 붙여 알 수 있다.(not을 두번 수행)

```
> !!undefined
false
> !!null
false
> !!""
false
> !!0
false
```

이 특징을 활용해서 판별로직을 짧게 작성할것이다.

## 1. obj === 0 대신 !obj사용하기

인트로에서처럼 조건문에서의 0은 false와 같다.
그러므로 !0은 True가된다.

**bad**

> `if(array.length === 0 )`

**good**

> `if( !array.length)`

## 2. array.length 가 0보다 큰 값인지 판단할때

`array.length`는 음수를 가질 수 없다.
그러므로 0 OR 양수 인지를 판단하면 된다.

**bad**

> `if(array.length > 0 )`

**good**

> `if( array.length)`

array.length가 0이면 이미 falsy하므로 조건문안의 로직은 실행되지 않는다!

🤔 단) 음수값이 가능한경우 주의해야 하는데, !!(음수)는 true 이므로 모든 로직에는 사용할 수 없다.

## 3. 문자열이 비어있지 않음을 판변할 때

빈문자열은 조건문 안에서 False이다. 그래서 빈문자열인지 아닌지만은 판별할 때에는 빈문자열이 올 변수를 조건문 안에 넣어주기만 하면 된다.

**bad**

> `if( string !== '' )`

**good**

> `if( string)`

## 3-1. 문자열에 비어있는것을 판별할 때

**bad**

> `if( string === '' )`

**good**

> `if( !string)`

## 4. undfined, null, 공백문자를 판별시

**bad**

> `Obj === undefined`  
> `Obj === null`

**good**

> `!Obj`

🤔 단, !obj는 obj가 Undefined인지 null인지 관계없이 true를 반환한다.그러므로 undefined만 알고 싶을 때는 주의가 필요하다.

## 5. false를 판별할때

**bad**

> `if ( xx === false )`

**better**

> `if ( !xx )`

단) 이 부분은 조심해야하는게 0, “”, null, undefined도 false이므로 단순히 boolean값의 정확한 boolean타입의 false만 판정하고 싶을때는 `if ( foo === false )` 로 적어주는게 맞다.

## 좀 더 면밀히 판단하기

undefined는 변수가 선언되었으나, 아직 값이 할당되지 않고 초기화된 상태,
null은 명시적으로 알려준 값이 없는 상태이다.

그러므로 명시적인 값의 부재를 나타내려면 항상 Null을 사용하는 것이 좋다.
다만, 객체를 사용할 때 어떤 속성의 부재를 Null을 사용하여 표현하는 쪽보다는 그냥 그속성을 정의하지 않는 방식이 간편하여 더 널리 사용된다.

```
// 이렇게 하는 경우는 많지 않습니다.
{
  name: 'Seungha',
  address: null
}

// 그냥 이렇게 하는 경우가 많습니다.
{
  name: 'Seungha'
}

// 어쨌든 이렇게 하지는 말아주세요.
{
  name: 'Seungha',
  address: undefined
}
```

### null check

null과 Undefined는 어떤 변수에도, 어떤 속성에도 들어올 수 있기 때문에, null과 undefined를 모두 고려해서 코드를 짜야할 필요가 있다.

어떤 값이 null 혹은 undefined인지 확인하는 작업을 Null check이라고 한다.

자바스크립트에서 == 연산자를 사용하면 null과 undefined를 구분하지 않는다.

```
null == null //true
undefined == undefined // true
null == undefined // 👉 true
```

이 두값을 명백하게 판별하려면 === 혹은 `Object.is(value1, value2)를 사용하면 된다.
