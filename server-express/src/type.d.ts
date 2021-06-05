import { Model, ModelCtor, Optional, Sequelize } from "sequelize";

import type { Controller as ControllerType } from "./controller";

export type Controller = ControllerType;

export interface EntityInitArgs {
  controller: ControllerType;
  sequelize: Sequelize;
}

/** entities */


export type Gaepo = 0;
export type Seocho = 1;

/**
 * Gaepo: 0
 * Seocho: 1
 */
export type CardType = Gaepo | Seocho;

export type ModelAttr = {
  createdAt?: Date;
  updatedAt?: Date;
};

/**
 * ModelCtor 에 사용할 Instance 타입을 정의합니다.
 * `T`: Attribute 객체
 * `U`: create 시, Attribute 에서 제외할 키 목록
 */
export type Inst<
  T extends Record<string, unknown>,
  U extends keyof T | undefined = undefined
> = U extends undefined
  ? Model<T, T> & T & ModelAttr
  : Model<T, Optional<T, U>> & T & ModelAttr;

export interface CardAttr {
  type: CardType;
  cardId?: number;
  using?: boolean;
}

export interface UserAttr {
  _id: number;
  userId: number;
  userName: string;
  email: string;
  card?: CardAttr;
  cardId?: number | null;
  isAdmin?: boolean;
}
export type UserInstance = Inst<UserAttr, "_id">;

export type CardInstance = Inst<CardAttr>;

export type UserRepository = ModelCtor<UserInstance>;
export type CardRepository = ModelCtor<CardInstance>;

export interface ControllerOptions {
  /**
   * 해당 요청이 사용자 정보를 필요로 하는지에 대한 여부를 설정합니다.
   * jwtResolver 가 사전에 설정되어야 합니다.
   */
  shouldBeAuthenticated?: boolean;
  
  /**
   * 해당 요청이 관리자 전용인지의 여부를 설정합니다.
   * jwtResolver 가 사전에 설정되어야 합니다.
   */
  shouldBeAdmin?: boolean;
}

export type HTTPMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";
export type HTTPMethodAll = "ALL";
export type HTTPMethods = HTTPMethod[];

export interface Api42MeCursusUser {
  id?: number;
  begin_at?: string; // date string
  end_at?: string; // date string
  grade?: any;
  level?: number;
  skills?: any[];
  cursus_id?: number;
  has_coalition?: boolean;
  user?: {
    id?: number;
    login?: string;
    url?: string;
  };
  cursus?: {
    id?: number;
    created_at?: string; // date string
    name?: string;
    slug?: string;
  };
}

export interface Api42MeLanguagesUser {
  id?: number;
  language_id?: number;
  user_id?: number;
  position?: number;
  created_at?: string; // date string
}

export interface Api42MePatroned {
  id?: number;
  user_id?: number;
  godfather_id?: number;
  ongoing?: boolean;
  created_at?: string; // date string
  updated_at?: string; // date string
}

export interface Api42MeExperticesUser {
  id?: number;
  expertise_id?: number;
  interested?: boolean;
  value?: number;
  contact_me?: boolean;
  created_at?: string; // date string
  user_id?: number;
}

export interface Api42MeCampus {
  id?: number;
  name?: string;
  time_zone?: string;
  language?: {
    id: 3;
    name?: string;
    identifier?: string;
    created_at?: string; // date string
    updated_at?: string; // date string
  };
  users_count?: number;
  vogsphere_id?: number;
}

export interface Api42MeCampusUser {
  id?: number;
  user_id?: number;
  campus_id?: number;
  is_primary?: boolean;
}

export interface Api42Me {
  id?: number;
  email?: string;
  login?: string;
  first_name?: string;
  last_name?: string;
  url?: string;
  phone?: string;
  displayname?: string;
  image_url?: string;
  "staff?"?: false;
  correction_point?: number;
  pool_month?: string;
  pool_year?: string;
  location?: string;
  wallet?: number;
  groups?: any[];
  cursus_users?: Api42MeCursusUser[];
  projects_users?: [];
  languages_users?: Api42MeLanguagesUser[];
  achievements?: any[];
  titles?: any[];
  titles_users?: any[];
  partnerships?: any[];
  patroned?: Api42MePatroned[];
  patroning?: any[];
  expertises_users?: Api42MeExperticesUser[];
  campus?: Api42MeCampus[];
  campus_users?: Api42MeCampusUser[];
}

/**
 * 42 oauth token
 */
declare module "simple-oauth2" {
  export interface Token {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    created_at: number;
    expires_at: string;
  }
}

export interface JWTPayload {
  id: number;
  email: string;
  access_token: string;
  refresh_token: string;
  expires_at: string;
}

declare global {
  namespace Express {
    export interface Request {
      isAuthenticated?: boolean;
      isAdmin?: boolean;
      user?: UserAttr;
    }
  }
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV?: "production" | "development";
      DATABASE_HOST?: string;
      DATABASE_PORT?: string;
      DATABASE_USERNAME?: string;
      DATABASE_PASSWORD?: string;
      DATABASE_NAME?: string;
      CLIENT_ID?: string;
      CLIENT_SECRET?: string;
      CLIENT_CALLBACK?: string;
      JWT_SECRET?: string;
      LOG_DEBUG?: string;
      DISCORD_GAEPO_ID?: string;
      DISCORD_GAEPO_PW?: string;
      DISCORD_SEOCHO_ID?: string;
      DISCORD_SEOCHO_PW?: string;
      TEST_DATABASE_HOST?: string;
      TEST_DATABASE_PORT?: string;
      TEST_DATABASE_USERNAME?: string;
      TEST_DATABASE_PASSWORD?: string;
      TEST_DATABASE_NAME?: string;
      TEST_DB_LOG?: string;
    }
  }
}
