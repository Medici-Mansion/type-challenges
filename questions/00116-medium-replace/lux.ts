// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]


// ============= Your Code Here =============
// 1. From extends '' ? S : ...
// -  From이 비어있다면 S 타입을 리턴
// 2. `${infer Prefix}${From}${infer Suffix}`
// - From 문자타입을 추출

type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S : S extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}`: S;
