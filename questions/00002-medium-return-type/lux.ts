// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2


// ============= Your Code Here =============
/**
 * 해결법1: ReturnType 유틸리티 없이 선언하는 방법
 *
 * 1. <제네릭 T>: "T extends Function"란, 제네릭 T가 함수 타입임을 명시한다.
 * 2. 조건부 타입: A extends B ? C : D 형태로, A가 B를 만족하면 C 타입을, 그렇지 않으면 D 타입을 반환한다.
 * 3. infer 키워드
 * : 조건부 타입 내에서 특정 타입을 추론할 때 사용한다.
 * : 만약 T가 함수 타입이면, 그 함수의 반환 타입을 R로 추론한다. 만약 함수 타입이 아니면 R을 추론할 수 없기 때문에 any를 반환한다.
 */
type MyReturnType<T extends Function> = T extends (...args: any) => infer R ? R : any;

/**
 * 해결법2: ReturnType 유틸리티로 선언하는 방법
 *
 * type MyReturnType<T extends Function> = ReturnType<T>;
 */
