import { Handler } from "express";
import { verify, VerifyOptions } from "jsonwebtoken";
import { Asyncify, Entries } from "type-fest";

/**
 * async 함수도 Express Handler 에 안전하게 사용할 수 있도록
 * try-catch 문을 씌운 async 래퍼 함수
 */
export const aw =
  (asyncFunc: Asyncify<Handler>): Asyncify<Handler> =>
  async (req, res, next): Promise<void> => {
    try {
      await asyncFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };

/**
 * 해당 객체에서 keys 에 해당하는 것만 뽑아 새로운 객체를 구성하여 리턴합니다.
 * @param obj 객체
 * @param keys 뽑을 key
 */
export function pick<T, K extends keyof T>(obj: T, keys: ReadonlyArray<K>): Pick<T, K> {
  const ret: any = {};
  keys.forEach((key) => {
    ret[key] = obj[key];
  });
  return ret;
}

/**
 * keys 를 optional 로 가지고 있는 객체를 검사하여 모든 키가 존재하고
 * 각각의 값이 undefined 가 아니라는 것을 체크합니다.
 * @param obj 객체
 * @param keys 객체에 포함되어 있어야 하는 키들
 * @returns optional to required
 */
export function hasKeys<U extends { [K in T]?: unknown }, T extends string>(
  obj: U,
  keys: ReadonlyArray<T>
): obj is { [P in keyof U]-?: Exclude<U[P], undefined> } {
  return keys.every((key) => obj[key] !== null && obj[key] !== undefined);
}

/**
 * 토큰 값으로부터 JWT Payload 를 얻습니다.
 * 검증에 실패할 경우 예외를 일으킵니다.
 * @param token 암호화되어 있는 토큰 값
 * @param secret 토큰을 서명할 때 쓴 비밀키
 * @param keys payload 에 포함되어야 하는 key
 * @param options vefiry 시 넣어줄 옵션
 * @returns 안전하게 얻은 JWT Payload 객체
 */
export function safeJwtVerify<T extends string>(
  token: string,
  secret: string,
  keys: ReadonlyArray<T>,
  options?: VerifyOptions
): { [K in T]: string } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = verify(token, secret, options); // unsafe

  // 결과가 string일 경우 예외를 일으킵니다.
  if (typeof result === "string")
    throw new Error("Jwt payload cannot be a string");
  const obj: { [K in T]?: string } = {};
  keys.forEach((key) => {
    obj[key] = result[key];
  });

  // 키를 검사합니다. keys 에 해당되는 키가 없을 경우 예외를 일으킵니다.
  if (!hasKeys(obj, keys))
    throw new Error(
      `payload has no required keys. payload: [${Object.getOwnPropertyNames(
        obj
      ).join(", ")}], required: [${keys.join(", ")}]`
    );
  return obj;
}
