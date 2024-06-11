// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}
interface Nope {
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]

type a = LookUp<Animal, 'cat'>
// ============= Your Code Here =============
/**
 * T는 U['type']의 서브타입이여야 한다는 제약조건 추가
 */
type LookUp<U extends { type: unknown }, T extends U['type']> = U extends {
  type: T
}
  ? U
  : never
