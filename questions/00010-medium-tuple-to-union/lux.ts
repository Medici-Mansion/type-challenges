// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
   Expect<Equal<TupleToUnion<['1', '2', '3']>, '1' | '2' | '3'>>,
]


// ============= Your Code Here =============
/**
 *  T[number]
 * : "튜플 T의 어떤 요소의 타입"을 의미합
 * : 튜플 T의 모든 인덱스 위치에 대해 해당하는 타입을 가져와서 유니언으로 결합
 */
type TupleToUnion<T extends any[]> = T[number];