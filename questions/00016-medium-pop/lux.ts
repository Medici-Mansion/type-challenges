// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
/**
 *  T extends [...infer P, any]: infer P를 사용해 배열 요소값에 접근
 */
type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer P, any] ? P : never;