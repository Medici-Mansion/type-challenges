// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]

// ============= Your Code Here =============
/**
 * 문자열을 확장하여 공백이 앞에 있을 경우 제거
 * S 타입 중 ExChar에 공백을 포함할 경우 재귀적 타입 검사
 */
type TrimLeft<S extends string> =
S extends `${infer ExChar}${infer Rest}` ?
// 탈출문자가 있을 경우
  ExChar extends ' ' | '\n' | '\t' ? TrimLeft<Rest> : S : S
