// ============= Test Cases =============
import type { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get()

const result3 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 123)
  .get()

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
]

type Expected1 = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type Expected2 = {
  name: string
}

type Expected3 = {
  name: number
}


// ============= Your Code Here =============
/**
 * OptionType<T>
 * : 제네릭 타입 T를 받아서, 주어진 키 K와 값 V을 가진 객체를 생성하는 함수 타입.
 * : K는 T의 키(key) 타입 중 하나여야 하며, V는 임의의 값.
 * : 함수는 체이닝 가능한 타입인 Chainable을 반환.
 *
 * Omit<T, K>
 * : T에서 K 키를 제외한 타입
 * Record<K, V>
 * : K 키와 V 값을 가진 새로운 Record 타입을 생성.
 * Chainable<Omit<T, K> & Record<K, V>>
 * : OptionType 함수가 반환하는 타입.
 * :이는 체이닝 가능한 타입
 * : 기존 T에서 K 키를 제외하고 K키에 대해 V값을 추가한 새로운 타입
 */
type OptionType<T> = <K extends string, V>(
  key: K extends keyof T ? never : K,
  value: V
) => Chainable<Omit<T, K> & Record<K, V>>;


/**
 * Chainable<T>
 * : 제네릭 타입 T를 받아서, option 메서드와 get 메서드를 가진 객체 타입을 정의.
 * : option 메서드는 OptionType<T> 타입의 함수
 * : get 메서드는 현재 객체의 상태를 반환
 */

type Chainable<T = {}> = {
    option: OptionType<T>;
    get: () => T;
};
