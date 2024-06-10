// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

type cases2 = [
  Expect<Equal<Expected1, MyPick2<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick2<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick2<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
/** 방법1: 타입을 2번 뺴는 경우 */
type MyPickKey<T, K> = Exclude<keyof T, K>;
type MyPick<T, K> = {
  [P in Exclude<keyof T, MyPickKey<T, K>>]: T[P]
};


/**
 * 방법2: 해당하는 키를 추출하는 경우
 * - K extends keyof T: K가 T 타입의 키 중 하나여야 한다는 것을 명시한다.
 * - 매핑된 타입 { [P in K]: T[P] }
 * : P in K: K의 각 키 P에 대해 반복한다.
 * : T[P]: T 객체 타입에서 키 P에 해당하는 타입을 가져온다.
 */
type MyPick2<T, K extends keyof T> = {
  [P in K] : T[P]
}