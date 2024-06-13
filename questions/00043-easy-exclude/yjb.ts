import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

// ============= Your Code Here =============
/* T가 유니온일 때 T extends U와 같은 구조를 사용하면, 유니온 T를 순회하면서 각 원소들을 주어진 조건에 적용
 * T가 U에 할당될 수 있는지 검사하고 할당 가능하다면 그 원소를 생략
 */

type MyExclude<T, U> = T extends U ? never : T
