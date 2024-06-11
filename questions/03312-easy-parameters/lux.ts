// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]


// ============= Your Code Here =============
/**
 * T extends (...args: any[]) => any
 * : 임의의 매개변수를 받고 임의의 값을 반환하는 함수 타입이어야 함을 명시한다.
 *
 * T extends (...any: infer S) => any ? S : any
 * : T가 함수 타입이라면, 추론(infer) S를 사용하여 함수의 매개변수 타입들을 추출한다.
 * : S는 함수의 매개변수 타입들의 튜플이다.
 * : 만약 T가 함수 타입이 아니라면, any 타입을 반환한다.
 */


type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any;
