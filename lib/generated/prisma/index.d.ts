
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>
/**
 * Model ProjectIdea
 * 
 */
export type ProjectIdea = $Result.DefaultSelection<Prisma.$ProjectIdeaPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectIdea`: Exposes CRUD operations for the **ProjectIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectIdeas
    * const projectIdeas = await prisma.projectIdea.findMany()
    * ```
    */
  get projectIdea(): Prisma.ProjectIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Skill: 'Skill',
    Interest: 'Interest',
    ProjectIdea: 'ProjectIdea',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "skill" | "interest" | "projectIdea" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      ProjectIdea: {
        payload: Prisma.$ProjectIdeaPayload<ExtArgs>
        fields: Prisma.ProjectIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          findFirst: {
            args: Prisma.ProjectIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          findMany: {
            args: Prisma.ProjectIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          create: {
            args: Prisma.ProjectIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          createMany: {
            args: Prisma.ProjectIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectIdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          delete: {
            args: Prisma.ProjectIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          update: {
            args: Prisma.ProjectIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          deleteMany: {
            args: Prisma.ProjectIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectIdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          upsert: {
            args: Prisma.ProjectIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          aggregate: {
            args: Prisma.ProjectIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectIdea>
          }
          groupBy: {
            args: Prisma.ProjectIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectIdeaCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    skill?: SkillOmit
    interest?: InterestOmit
    projectIdea?: ProjectIdeaOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    skills: number
    interests: number
    ideas: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
    ideas?: boolean | UserCountOutputTypeCountIdeasArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectIdeaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type ProjectIdeaCountOutputType
   */

  export type ProjectIdeaCountOutputType = {
    favorites: number
  }

  export type ProjectIdeaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | ProjectIdeaCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * ProjectIdeaCountOutputType without action
   */
  export type ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdeaCountOutputType
     */
    select?: ProjectIdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectIdeaCountOutputType without action
   */
  export type ProjectIdeaCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    skills?: boolean | User$skillsArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    ideas?: boolean | User$ideasArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | User$skillsArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    ideas?: boolean | User$ideasArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      interests: Prisma.$InterestPayload<ExtArgs>[]
      ideas: Prisma.$ProjectIdeaPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ideas<T extends User$ideasArgs<ExtArgs> = {}>(args?: Subset<T, User$ideasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    cursor?: InterestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * User.ideas
   */
  export type User$ideasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    where?: ProjectIdeaWhereInput
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    cursor?: ProjectIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly userId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type InterestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type InterestMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type InterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["interest"]>
  export type InterestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InterestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }

  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestFindUniqueArgs>(args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestFindFirstArgs>(args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestFindManyArgs>(args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
     */
    create<T extends InterestCreateArgs>(args: SelectSubset<T, InterestCreateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestCreateManyArgs>(args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interests and returns the data saved in the database.
     * @param {InterestCreateManyAndReturnArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interest = await prisma.interest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
     */
    delete<T extends InterestDeleteArgs>(args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestUpdateArgs>(args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestDeleteManyArgs>(args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestUpdateManyArgs>(args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests and returns the data updated in the database.
     * @param {InterestUpdateManyAndReturnArgs} args - Arguments to update many Interests.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interests and only return the `id`
     * const interestWithIdOnly = await prisma.interest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InterestUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
     */
    upsert<T extends InterestUpsertArgs>(args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Interest model
   */
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'String'>
    readonly name: FieldRef<"Interest", 'String'>
    readonly userId: FieldRef<"Interest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }

  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }

  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interest createManyAndReturn
   */
  export type InterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interest updateManyAndReturn
   */
  export type InterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }

  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }

  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interest
     */
    omit?: InterestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestInclude<ExtArgs> | null
  }


  /**
   * Model ProjectIdea
   */

  export type AggregateProjectIdea = {
    _count: ProjectIdeaCountAggregateOutputType | null
    _min: ProjectIdeaMinAggregateOutputType | null
    _max: ProjectIdeaMaxAggregateOutputType | null
  }

  export type ProjectIdeaMinAggregateOutputType = {
    id: string | null
    publicId: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    isFavorite: boolean | null
    isPublic: boolean | null
  }

  export type ProjectIdeaMaxAggregateOutputType = {
    id: string | null
    publicId: string | null
    title: string | null
    description: string | null
    userId: string | null
    createdAt: Date | null
    isFavorite: boolean | null
    isPublic: boolean | null
  }

  export type ProjectIdeaCountAggregateOutputType = {
    id: number
    publicId: number
    title: number
    description: number
    inputSkills: number
    inputInterests: number
    userId: number
    createdAt: number
    isFavorite: number
    isPublic: number
    _all: number
  }


  export type ProjectIdeaMinAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    isFavorite?: true
    isPublic?: true
  }

  export type ProjectIdeaMaxAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    description?: true
    userId?: true
    createdAt?: true
    isFavorite?: true
    isPublic?: true
  }

  export type ProjectIdeaCountAggregateInputType = {
    id?: true
    publicId?: true
    title?: true
    description?: true
    inputSkills?: true
    inputInterests?: true
    userId?: true
    createdAt?: true
    isFavorite?: true
    isPublic?: true
    _all?: true
  }

  export type ProjectIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectIdea to aggregate.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectIdeas
    **/
    _count?: true | ProjectIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectIdeaMaxAggregateInputType
  }

  export type GetProjectIdeaAggregateType<T extends ProjectIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectIdea[P]>
      : GetScalarType<T[P], AggregateProjectIdea[P]>
  }




  export type ProjectIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectIdeaWhereInput
    orderBy?: ProjectIdeaOrderByWithAggregationInput | ProjectIdeaOrderByWithAggregationInput[]
    by: ProjectIdeaScalarFieldEnum[] | ProjectIdeaScalarFieldEnum
    having?: ProjectIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectIdeaCountAggregateInputType | true
    _min?: ProjectIdeaMinAggregateInputType
    _max?: ProjectIdeaMaxAggregateInputType
  }

  export type ProjectIdeaGroupByOutputType = {
    id: string
    publicId: string
    title: string
    description: string
    inputSkills: string[]
    inputInterests: string[]
    userId: string
    createdAt: Date
    isFavorite: boolean
    isPublic: boolean
    _count: ProjectIdeaCountAggregateOutputType | null
    _min: ProjectIdeaMinAggregateOutputType | null
    _max: ProjectIdeaMaxAggregateOutputType | null
  }

  type GetProjectIdeaGroupByPayload<T extends ProjectIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectIdeaGroupByOutputType[P]>
        }
      >
    >


  export type ProjectIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    description?: boolean
    inputSkills?: boolean
    inputInterests?: boolean
    userId?: boolean
    createdAt?: boolean
    isFavorite?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | ProjectIdea$favoritesArgs<ExtArgs>
    _count?: boolean | ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    description?: boolean
    inputSkills?: boolean
    inputInterests?: boolean
    userId?: boolean
    createdAt?: boolean
    isFavorite?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    title?: boolean
    description?: boolean
    inputSkills?: boolean
    inputInterests?: boolean
    userId?: boolean
    createdAt?: boolean
    isFavorite?: boolean
    isPublic?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectScalar = {
    id?: boolean
    publicId?: boolean
    title?: boolean
    description?: boolean
    inputSkills?: boolean
    inputInterests?: boolean
    userId?: boolean
    createdAt?: boolean
    isFavorite?: boolean
    isPublic?: boolean
  }

  export type ProjectIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "title" | "description" | "inputSkills" | "inputInterests" | "userId" | "createdAt" | "isFavorite" | "isPublic", ExtArgs["result"]["projectIdea"]>
  export type ProjectIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    favorites?: boolean | ProjectIdea$favoritesArgs<ExtArgs>
    _count?: boolean | ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectIdea"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicId: string
      title: string
      description: string
      inputSkills: string[]
      inputInterests: string[]
      userId: string
      createdAt: Date
      isFavorite: boolean
      isPublic: boolean
    }, ExtArgs["result"]["projectIdea"]>
    composites: {}
  }

  type ProjectIdeaGetPayload<S extends boolean | null | undefined | ProjectIdeaDefaultArgs> = $Result.GetResult<Prisma.$ProjectIdeaPayload, S>

  type ProjectIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectIdeaCountAggregateInputType | true
    }

  export interface ProjectIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectIdea'], meta: { name: 'ProjectIdea' } }
    /**
     * Find zero or one ProjectIdea that matches the filter.
     * @param {ProjectIdeaFindUniqueArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectIdeaFindUniqueArgs>(args: SelectSubset<T, ProjectIdeaFindUniqueArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectIdeaFindUniqueOrThrowArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindFirstArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectIdeaFindFirstArgs>(args?: SelectSubset<T, ProjectIdeaFindFirstArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindFirstOrThrowArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectIdeas
     * const projectIdeas = await prisma.projectIdea.findMany()
     * 
     * // Get first 10 ProjectIdeas
     * const projectIdeas = await prisma.projectIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectIdeaFindManyArgs>(args?: SelectSubset<T, ProjectIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectIdea.
     * @param {ProjectIdeaCreateArgs} args - Arguments to create a ProjectIdea.
     * @example
     * // Create one ProjectIdea
     * const ProjectIdea = await prisma.projectIdea.create({
     *   data: {
     *     // ... data to create a ProjectIdea
     *   }
     * })
     * 
     */
    create<T extends ProjectIdeaCreateArgs>(args: SelectSubset<T, ProjectIdeaCreateArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectIdeas.
     * @param {ProjectIdeaCreateManyArgs} args - Arguments to create many ProjectIdeas.
     * @example
     * // Create many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectIdeaCreateManyArgs>(args?: SelectSubset<T, ProjectIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectIdeas and returns the data saved in the database.
     * @param {ProjectIdeaCreateManyAndReturnArgs} args - Arguments to create many ProjectIdeas.
     * @example
     * // Create many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectIdeas and only return the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectIdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectIdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectIdea.
     * @param {ProjectIdeaDeleteArgs} args - Arguments to delete one ProjectIdea.
     * @example
     * // Delete one ProjectIdea
     * const ProjectIdea = await prisma.projectIdea.delete({
     *   where: {
     *     // ... filter to delete one ProjectIdea
     *   }
     * })
     * 
     */
    delete<T extends ProjectIdeaDeleteArgs>(args: SelectSubset<T, ProjectIdeaDeleteArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectIdea.
     * @param {ProjectIdeaUpdateArgs} args - Arguments to update one ProjectIdea.
     * @example
     * // Update one ProjectIdea
     * const projectIdea = await prisma.projectIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectIdeaUpdateArgs>(args: SelectSubset<T, ProjectIdeaUpdateArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectIdeas.
     * @param {ProjectIdeaDeleteManyArgs} args - Arguments to filter ProjectIdeas to delete.
     * @example
     * // Delete a few ProjectIdeas
     * const { count } = await prisma.projectIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectIdeaDeleteManyArgs>(args?: SelectSubset<T, ProjectIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectIdeaUpdateManyArgs>(args: SelectSubset<T, ProjectIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectIdeas and returns the data updated in the database.
     * @param {ProjectIdeaUpdateManyAndReturnArgs} args - Arguments to update many ProjectIdeas.
     * @example
     * // Update many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectIdeas and only return the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectIdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectIdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectIdea.
     * @param {ProjectIdeaUpsertArgs} args - Arguments to update or create a ProjectIdea.
     * @example
     * // Update or create a ProjectIdea
     * const projectIdea = await prisma.projectIdea.upsert({
     *   create: {
     *     // ... data to create a ProjectIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectIdea we want to update
     *   }
     * })
     */
    upsert<T extends ProjectIdeaUpsertArgs>(args: SelectSubset<T, ProjectIdeaUpsertArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaCountArgs} args - Arguments to filter ProjectIdeas to count.
     * @example
     * // Count the number of ProjectIdeas
     * const count = await prisma.projectIdea.count({
     *   where: {
     *     // ... the filter for the ProjectIdeas we want to count
     *   }
     * })
    **/
    count<T extends ProjectIdeaCountArgs>(
      args?: Subset<T, ProjectIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectIdeaAggregateArgs>(args: Subset<T, ProjectIdeaAggregateArgs>): Prisma.PrismaPromise<GetProjectIdeaAggregateType<T>>

    /**
     * Group by ProjectIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectIdeaGroupByArgs['orderBy'] }
        : { orderBy?: ProjectIdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectIdea model
   */
  readonly fields: ProjectIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favorites<T extends ProjectIdea$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectIdea$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectIdea model
   */
  interface ProjectIdeaFieldRefs {
    readonly id: FieldRef<"ProjectIdea", 'String'>
    readonly publicId: FieldRef<"ProjectIdea", 'String'>
    readonly title: FieldRef<"ProjectIdea", 'String'>
    readonly description: FieldRef<"ProjectIdea", 'String'>
    readonly inputSkills: FieldRef<"ProjectIdea", 'String[]'>
    readonly inputInterests: FieldRef<"ProjectIdea", 'String[]'>
    readonly userId: FieldRef<"ProjectIdea", 'String'>
    readonly createdAt: FieldRef<"ProjectIdea", 'DateTime'>
    readonly isFavorite: FieldRef<"ProjectIdea", 'Boolean'>
    readonly isPublic: FieldRef<"ProjectIdea", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProjectIdea findUnique
   */
  export type ProjectIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea findUniqueOrThrow
   */
  export type ProjectIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea findFirst
   */
  export type ProjectIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectIdeas.
     */
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea findFirstOrThrow
   */
  export type ProjectIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectIdeas.
     */
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea findMany
   */
  export type ProjectIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdeas to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea create
   */
  export type ProjectIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectIdea.
     */
    data: XOR<ProjectIdeaCreateInput, ProjectIdeaUncheckedCreateInput>
  }

  /**
   * ProjectIdea createMany
   */
  export type ProjectIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectIdeas.
     */
    data: ProjectIdeaCreateManyInput | ProjectIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectIdea createManyAndReturn
   */
  export type ProjectIdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectIdeas.
     */
    data: ProjectIdeaCreateManyInput | ProjectIdeaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectIdea update
   */
  export type ProjectIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectIdea.
     */
    data: XOR<ProjectIdeaUpdateInput, ProjectIdeaUncheckedUpdateInput>
    /**
     * Choose, which ProjectIdea to update.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea updateMany
   */
  export type ProjectIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectIdeas.
     */
    data: XOR<ProjectIdeaUpdateManyMutationInput, ProjectIdeaUncheckedUpdateManyInput>
    /**
     * Filter which ProjectIdeas to update
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to update.
     */
    limit?: number
  }

  /**
   * ProjectIdea updateManyAndReturn
   */
  export type ProjectIdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * The data used to update ProjectIdeas.
     */
    data: XOR<ProjectIdeaUpdateManyMutationInput, ProjectIdeaUncheckedUpdateManyInput>
    /**
     * Filter which ProjectIdeas to update
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectIdea upsert
   */
  export type ProjectIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectIdea to update in case it exists.
     */
    where: ProjectIdeaWhereUniqueInput
    /**
     * In case the ProjectIdea found by the `where` argument doesn't exist, create a new ProjectIdea with this data.
     */
    create: XOR<ProjectIdeaCreateInput, ProjectIdeaUncheckedCreateInput>
    /**
     * In case the ProjectIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectIdeaUpdateInput, ProjectIdeaUncheckedUpdateInput>
  }

  /**
   * ProjectIdea delete
   */
  export type ProjectIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter which ProjectIdea to delete.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea deleteMany
   */
  export type ProjectIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectIdeas to delete
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to delete.
     */
    limit?: number
  }

  /**
   * ProjectIdea.favorites
   */
  export type ProjectIdea$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * ProjectIdea without action
   */
  export type ProjectIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    ideaId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    ideaId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    ideaId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    ideaId?: true
    userId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    ideaId?: true
    userId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    ideaId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    ideaId: string
    userId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    userId?: boolean
    createdAt?: boolean
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    userId?: boolean
    createdAt?: boolean
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ideaId?: boolean
    userId?: boolean
    createdAt?: boolean
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    ideaId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ideaId" | "userId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      idea: Prisma.$ProjectIdeaPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ideaId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idea<T extends ProjectIdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectIdeaDefaultArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly ideaId: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const ProjectIdeaScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    title: 'title',
    description: 'description',
    inputSkills: 'inputSkills',
    inputInterests: 'inputInterests',
    userId: 'userId',
    createdAt: 'createdAt',
    isFavorite: 'isFavorite',
    isPublic: 'isPublic'
  };

  export type ProjectIdeaScalarFieldEnum = (typeof ProjectIdeaScalarFieldEnum)[keyof typeof ProjectIdeaScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    ideaId: 'ideaId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    skills?: SkillListRelationFilter
    interests?: InterestListRelationFilter
    ideas?: ProjectIdeaListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    interests?: InterestOrderByRelationAggregateInput
    ideas?: ProjectIdeaOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    skills?: SkillListRelationFilter
    interests?: InterestListRelationFilter
    ideas?: ProjectIdeaListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    userId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    userId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    userId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: StringFilter<"Interest"> | string
    name?: StringFilter<"Interest"> | string
    userId?: StringFilter<"Interest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    name?: StringFilter<"Interest"> | string
    userId?: StringFilter<"Interest"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interest"> | string
    name?: StringWithAggregatesFilter<"Interest"> | string
    userId?: StringWithAggregatesFilter<"Interest"> | string
  }

  export type ProjectIdeaWhereInput = {
    AND?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    OR?: ProjectIdeaWhereInput[]
    NOT?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    id?: StringFilter<"ProjectIdea"> | string
    publicId?: StringFilter<"ProjectIdea"> | string
    title?: StringFilter<"ProjectIdea"> | string
    description?: StringFilter<"ProjectIdea"> | string
    inputSkills?: StringNullableListFilter<"ProjectIdea">
    inputInterests?: StringNullableListFilter<"ProjectIdea">
    userId?: StringFilter<"ProjectIdea"> | string
    createdAt?: DateTimeFilter<"ProjectIdea"> | Date | string
    isFavorite?: BoolFilter<"ProjectIdea"> | boolean
    isPublic?: BoolFilter<"ProjectIdea"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
  }

  export type ProjectIdeaOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    inputSkills?: SortOrder
    inputInterests?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isFavorite?: SortOrder
    isPublic?: SortOrder
    user?: UserOrderByWithRelationInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type ProjectIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicId?: string
    AND?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    OR?: ProjectIdeaWhereInput[]
    NOT?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    title?: StringFilter<"ProjectIdea"> | string
    description?: StringFilter<"ProjectIdea"> | string
    inputSkills?: StringNullableListFilter<"ProjectIdea">
    inputInterests?: StringNullableListFilter<"ProjectIdea">
    userId?: StringFilter<"ProjectIdea"> | string
    createdAt?: DateTimeFilter<"ProjectIdea"> | Date | string
    isFavorite?: BoolFilter<"ProjectIdea"> | boolean
    isPublic?: BoolFilter<"ProjectIdea"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    favorites?: FavoriteListRelationFilter
  }, "id" | "publicId">

  export type ProjectIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    inputSkills?: SortOrder
    inputInterests?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isFavorite?: SortOrder
    isPublic?: SortOrder
    _count?: ProjectIdeaCountOrderByAggregateInput
    _max?: ProjectIdeaMaxOrderByAggregateInput
    _min?: ProjectIdeaMinOrderByAggregateInput
  }

  export type ProjectIdeaScalarWhereWithAggregatesInput = {
    AND?: ProjectIdeaScalarWhereWithAggregatesInput | ProjectIdeaScalarWhereWithAggregatesInput[]
    OR?: ProjectIdeaScalarWhereWithAggregatesInput[]
    NOT?: ProjectIdeaScalarWhereWithAggregatesInput | ProjectIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectIdea"> | string
    publicId?: StringWithAggregatesFilter<"ProjectIdea"> | string
    title?: StringWithAggregatesFilter<"ProjectIdea"> | string
    description?: StringWithAggregatesFilter<"ProjectIdea"> | string
    inputSkills?: StringNullableListFilter<"ProjectIdea">
    inputInterests?: StringNullableListFilter<"ProjectIdea">
    userId?: StringWithAggregatesFilter<"ProjectIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectIdea"> | Date | string
    isFavorite?: BoolWithAggregatesFilter<"ProjectIdea"> | boolean
    isPublic?: BoolWithAggregatesFilter<"ProjectIdea"> | boolean
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    ideaId?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    idea?: XOR<ProjectIdeaScalarRelationFilter, ProjectIdeaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    idea?: ProjectIdeaOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    ideaId?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    idea?: XOR<ProjectIdeaScalarRelationFilter, ProjectIdeaWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    ideaId?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillCreateNestedManyWithoutUserInput
    interests?: InterestCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutUserNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InterestCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutInterestsInput
  }

  export type InterestUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
  }

  export type InterestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type InterestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InterestCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type InterestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectIdeaCreateInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
    user: UserCreateNestedOneWithoutIdeasInput
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type ProjectIdeaUncheckedCreateInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    userId: string
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type ProjectIdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutIdeasNestedInput
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type ProjectIdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type ProjectIdeaCreateManyInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    userId: string
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
  }

  export type ProjectIdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectIdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    idea: ProjectIdeaCreateNestedOneWithoutFavoritesInput
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    ideaId: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: ProjectIdeaUpdateOneRequiredWithoutFavoritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    ideaId: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type InterestListRelationFilter = {
    every?: InterestWhereInput
    some?: InterestWhereInput
    none?: InterestWhereInput
  }

  export type ProjectIdeaListRelationFilter = {
    every?: ProjectIdeaWhereInput
    some?: ProjectIdeaWhereInput
    none?: ProjectIdeaWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InterestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    inputSkills?: SortOrder
    inputInterests?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isFavorite?: SortOrder
    isPublic?: SortOrder
  }

  export type ProjectIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isFavorite?: SortOrder
    isPublic?: SortOrder
  }

  export type ProjectIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    isFavorite?: SortOrder
    isPublic?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectIdeaScalarRelationFilter = {
    is?: ProjectIdeaWhereInput
    isNot?: ProjectIdeaWhereInput
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    ideaId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type InterestCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type ProjectIdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput> | ProjectIdeaCreateWithoutUserInput[] | ProjectIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutUserInput | ProjectIdeaCreateOrConnectWithoutUserInput[]
    createMany?: ProjectIdeaCreateManyUserInputEnvelope
    connect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type InterestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
  }

  export type ProjectIdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput> | ProjectIdeaCreateWithoutUserInput[] | ProjectIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutUserInput | ProjectIdeaCreateOrConnectWithoutUserInput[]
    createMany?: ProjectIdeaCreateManyUserInputEnvelope
    connect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type InterestUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type ProjectIdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput> | ProjectIdeaCreateWithoutUserInput[] | ProjectIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutUserInput | ProjectIdeaCreateOrConnectWithoutUserInput[]
    upsert?: ProjectIdeaUpsertWithWhereUniqueWithoutUserInput | ProjectIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectIdeaCreateManyUserInputEnvelope
    set?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    disconnect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    delete?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    connect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    update?: ProjectIdeaUpdateWithWhereUniqueWithoutUserInput | ProjectIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectIdeaUpdateManyWithWhereWithoutUserInput | ProjectIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectIdeaScalarWhereInput | ProjectIdeaScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type InterestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput> | InterestCreateWithoutUserInput[] | InterestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InterestCreateOrConnectWithoutUserInput | InterestCreateOrConnectWithoutUserInput[]
    upsert?: InterestUpsertWithWhereUniqueWithoutUserInput | InterestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InterestCreateManyUserInputEnvelope
    set?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    disconnect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    delete?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    connect?: InterestWhereUniqueInput | InterestWhereUniqueInput[]
    update?: InterestUpdateWithWhereUniqueWithoutUserInput | InterestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InterestUpdateManyWithWhereWithoutUserInput | InterestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InterestScalarWhereInput | InterestScalarWhereInput[]
  }

  export type ProjectIdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput> | ProjectIdeaCreateWithoutUserInput[] | ProjectIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutUserInput | ProjectIdeaCreateOrConnectWithoutUserInput[]
    upsert?: ProjectIdeaUpsertWithWhereUniqueWithoutUserInput | ProjectIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectIdeaCreateManyUserInputEnvelope
    set?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    disconnect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    delete?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    connect?: ProjectIdeaWhereUniqueInput | ProjectIdeaWhereUniqueInput[]
    update?: ProjectIdeaUpdateWithWhereUniqueWithoutUserInput | ProjectIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectIdeaUpdateManyWithWhereWithoutUserInput | ProjectIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectIdeaScalarWhereInput | ProjectIdeaScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type ProjectIdeaCreateinputSkillsInput = {
    set: string[]
  }

  export type ProjectIdeaCreateinputInterestsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutIdeasInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutIdeaInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutIdeaInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ProjectIdeaUpdateinputSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectIdeaUpdateinputInterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutIdeasNestedInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    upsert?: UserUpsertWithoutIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdeasInput, UserUpdateWithoutIdeasInput>, UserUncheckedUpdateWithoutIdeasInput>
  }

  export type FavoriteUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutIdeaInput | FavoriteUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutIdeaInput | FavoriteUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutIdeaInput | FavoriteUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutIdeaNestedInput = {
    create?: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput> | FavoriteCreateWithoutIdeaInput[] | FavoriteUncheckedCreateWithoutIdeaInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutIdeaInput | FavoriteCreateOrConnectWithoutIdeaInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutIdeaInput | FavoriteUpsertWithWhereUniqueWithoutIdeaInput[]
    createMany?: FavoriteCreateManyIdeaInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutIdeaInput | FavoriteUpdateWithWhereUniqueWithoutIdeaInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutIdeaInput | FavoriteUpdateManyWithWhereWithoutIdeaInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ProjectIdeaCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<ProjectIdeaCreateWithoutFavoritesInput, ProjectIdeaUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutFavoritesInput
    connect?: ProjectIdeaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectIdeaUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<ProjectIdeaCreateWithoutFavoritesInput, ProjectIdeaUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutFavoritesInput
    upsert?: ProjectIdeaUpsertWithoutFavoritesInput
    connect?: ProjectIdeaWhereUniqueInput
    update?: XOR<XOR<ProjectIdeaUpdateToOneWithWhereWithoutFavoritesInput, ProjectIdeaUpdateWithoutFavoritesInput>, ProjectIdeaUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SkillCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillCreateManyUserInputEnvelope = {
    data: SkillCreateManyUserInput | SkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InterestCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type InterestUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type InterestCreateOrConnectWithoutUserInput = {
    where: InterestWhereUniqueInput
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestCreateManyUserInputEnvelope = {
    data: InterestCreateManyUserInput | InterestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectIdeaCreateWithoutUserInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
    favorites?: FavoriteCreateNestedManyWithoutIdeaInput
  }

  export type ProjectIdeaUncheckedCreateWithoutUserInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
    favorites?: FavoriteUncheckedCreateNestedManyWithoutIdeaInput
  }

  export type ProjectIdeaCreateOrConnectWithoutUserInput = {
    where: ProjectIdeaWhereUniqueInput
    create: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput>
  }

  export type ProjectIdeaCreateManyUserInputEnvelope = {
    data: ProjectIdeaCreateManyUserInput | ProjectIdeaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    idea: ProjectIdeaCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    ideaId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    userId?: StringFilter<"Skill"> | string
  }

  export type InterestUpsertWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    update: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
    create: XOR<InterestCreateWithoutUserInput, InterestUncheckedCreateWithoutUserInput>
  }

  export type InterestUpdateWithWhereUniqueWithoutUserInput = {
    where: InterestWhereUniqueInput
    data: XOR<InterestUpdateWithoutUserInput, InterestUncheckedUpdateWithoutUserInput>
  }

  export type InterestUpdateManyWithWhereWithoutUserInput = {
    where: InterestScalarWhereInput
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyWithoutUserInput>
  }

  export type InterestScalarWhereInput = {
    AND?: InterestScalarWhereInput | InterestScalarWhereInput[]
    OR?: InterestScalarWhereInput[]
    NOT?: InterestScalarWhereInput | InterestScalarWhereInput[]
    id?: StringFilter<"Interest"> | string
    name?: StringFilter<"Interest"> | string
    userId?: StringFilter<"Interest"> | string
  }

  export type ProjectIdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectIdeaWhereUniqueInput
    update: XOR<ProjectIdeaUpdateWithoutUserInput, ProjectIdeaUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectIdeaCreateWithoutUserInput, ProjectIdeaUncheckedCreateWithoutUserInput>
  }

  export type ProjectIdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectIdeaWhereUniqueInput
    data: XOR<ProjectIdeaUpdateWithoutUserInput, ProjectIdeaUncheckedUpdateWithoutUserInput>
  }

  export type ProjectIdeaUpdateManyWithWhereWithoutUserInput = {
    where: ProjectIdeaScalarWhereInput
    data: XOR<ProjectIdeaUpdateManyMutationInput, ProjectIdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectIdeaScalarWhereInput = {
    AND?: ProjectIdeaScalarWhereInput | ProjectIdeaScalarWhereInput[]
    OR?: ProjectIdeaScalarWhereInput[]
    NOT?: ProjectIdeaScalarWhereInput | ProjectIdeaScalarWhereInput[]
    id?: StringFilter<"ProjectIdea"> | string
    publicId?: StringFilter<"ProjectIdea"> | string
    title?: StringFilter<"ProjectIdea"> | string
    description?: StringFilter<"ProjectIdea"> | string
    inputSkills?: StringNullableListFilter<"ProjectIdea">
    inputInterests?: StringNullableListFilter<"ProjectIdea">
    userId?: StringFilter<"ProjectIdea"> | string
    createdAt?: DateTimeFilter<"ProjectIdea"> | Date | string
    isFavorite?: BoolFilter<"ProjectIdea"> | boolean
    isPublic?: BoolFilter<"ProjectIdea"> | boolean
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    ideaId?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    interests?: InterestCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInterestsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIdeasInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillCreateNestedManyWithoutUserInput
    interests?: InterestCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIdeasInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
  }

  export type FavoriteCreateWithoutIdeaInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutIdeaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput>
  }

  export type FavoriteCreateManyIdeaInputEnvelope = {
    data: FavoriteCreateManyIdeaInput | FavoriteCreateManyIdeaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIdeasInput = {
    update: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
  }

  export type UserUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutUserNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutIdeaInput, FavoriteUncheckedUpdateWithoutIdeaInput>
    create: XOR<FavoriteCreateWithoutIdeaInput, FavoriteUncheckedCreateWithoutIdeaInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutIdeaInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutIdeaInput, FavoriteUncheckedUpdateWithoutIdeaInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutIdeaInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutIdeaInput>
  }

  export type ProjectIdeaCreateWithoutFavoritesInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
    user: UserCreateNestedOneWithoutIdeasInput
  }

  export type ProjectIdeaUncheckedCreateWithoutFavoritesInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    userId: string
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
  }

  export type ProjectIdeaCreateOrConnectWithoutFavoritesInput = {
    where: ProjectIdeaWhereUniqueInput
    create: XOR<ProjectIdeaCreateWithoutFavoritesInput, ProjectIdeaUncheckedCreateWithoutFavoritesInput>
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillCreateNestedManyWithoutUserInput
    interests?: InterestCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    email: string
    createdAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutUserInput
    interests?: InterestUncheckedCreateNestedManyWithoutUserInput
    ideas?: ProjectIdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type ProjectIdeaUpsertWithoutFavoritesInput = {
    update: XOR<ProjectIdeaUpdateWithoutFavoritesInput, ProjectIdeaUncheckedUpdateWithoutFavoritesInput>
    create: XOR<ProjectIdeaCreateWithoutFavoritesInput, ProjectIdeaUncheckedCreateWithoutFavoritesInput>
    where?: ProjectIdeaWhereInput
  }

  export type ProjectIdeaUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: ProjectIdeaWhereInput
    data: XOR<ProjectIdeaUpdateWithoutFavoritesInput, ProjectIdeaUncheckedUpdateWithoutFavoritesInput>
  }

  export type ProjectIdeaUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutIdeasNestedInput
  }

  export type ProjectIdeaUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutUserNestedInput
    interests?: InterestUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutUserNestedInput
    interests?: InterestUncheckedUpdateManyWithoutUserNestedInput
    ideas?: ProjectIdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillCreateManyUserInput = {
    id?: string
    name: string
  }

  export type InterestCreateManyUserInput = {
    id?: string
    name: string
  }

  export type ProjectIdeaCreateManyUserInput = {
    id?: string
    publicId?: string
    title: string
    description: string
    inputSkills?: ProjectIdeaCreateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaCreateinputInterestsInput | string[]
    createdAt?: Date | string
    isFavorite?: boolean
    isPublic?: boolean
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    ideaId: string
    createdAt?: Date | string
  }

  export type SkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InterestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectIdeaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    favorites?: FavoriteUpdateManyWithoutIdeaNestedInput
  }

  export type ProjectIdeaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    favorites?: FavoriteUncheckedUpdateManyWithoutIdeaNestedInput
  }

  export type ProjectIdeaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    inputSkills?: ProjectIdeaUpdateinputSkillsInput | string[]
    inputInterests?: ProjectIdeaUpdateinputInterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idea?: ProjectIdeaUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ideaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyIdeaInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}