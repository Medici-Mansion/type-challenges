// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}


// ============= Your Code Here =============
/**
 * 제네릭 타입 <T, K>: T는 객체 타입, K는 제외하고자 하는 속성의 키 타입이다.
 * Exclude<keyof T, K>: 첫 번째 타입에서 두 번째 타입을 제외한 타입을 반환한다.
 * keyof T: 객체 타입 T의 모든 키를 유니언 타입으로 반환한다.
 * {[P in Exclude<keyof T, K>]: T[P]}: 매핑된 타입은 객체 타입을 순회하면서 새롭게 정의한다.
 */
type MyOmit<T, K> = {[P in Exclude<keyof T, K>] : T[P]};
