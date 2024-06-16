import type { Equal, Expect } from '@type-challenges/utils'

const tuple = [1] as const

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = Concat<null, undefined>

// ============= Your Code Here =============
//  Variadic Tuple(가변인자 튜플)은 제네릭이 전개문법을 사용할 수 있게 만들어줌
type Tuple = readonly unknown[]
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]
