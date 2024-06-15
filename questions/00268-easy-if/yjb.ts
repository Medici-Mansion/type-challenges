import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

// ============= Your Code Here =============
// C의 타입에 대한 제약 필요
// type If<C, T, F> = C extends true ? T : F 

type If<C extends Boolean, T, F> = C extends true ? T : F