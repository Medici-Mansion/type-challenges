import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>


// ============= Your Code Here =============
/*
* CASE T는 Promise로 묶인 게 아닌 Promise의 동작과 비슷하게 then 메서드를 가진 타입
*/
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer R> 
  ? R extends PromiseLike<any> 
    ? MyAwaited<R> 
    : R 
  : never
