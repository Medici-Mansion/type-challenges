// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

// ============= Your Code Here =============

/**
 *
 * `${infer A}${From}${infer B}` 부분은 S를 From을 기준으로 3 덩어리로 분할한다.
 * S: 'hello world'
 * From: lo
 * 일 경우
 *
 * hel ,lo, world
 */
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer A}${From}${infer B}` ? `${A}${To}${ReplaceAll<B, From, To>}` : S
