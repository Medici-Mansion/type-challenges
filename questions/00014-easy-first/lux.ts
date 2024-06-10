// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

// ============= Your Code Here =============
/** T가 빈배열이라면 never 타입, 그렇지 않은 경우 첫번째 원소 타입 반환 */
type First<T extends any[]> = T extends [] ? never : T[0];
