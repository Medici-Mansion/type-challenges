import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

// ============= Your Code Here =============
/*
* T['length']는 배열의 길이 반환
*/
type Last<T extends any[]> = [any, ...T][T['length']]
