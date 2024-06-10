// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
/**
 * T가 U 타입에 해당하는 경우 never, 그렇지 않은 경우 T 타입 반환한다.
 * (Tip: 어떤 타입을 제외할 때 비교한 후 never 처리)
 */
type MyExclude<T, U> = T extends U ? never : T;