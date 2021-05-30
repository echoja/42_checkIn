import { Model, Optional } from "sequelize/types";

export type { Controller } from "./controller";


export interface EntityInitArgs {
  controller: Controller;
  sequelize: Sequelize;
}

/** entities */
export type Gaepo = 0;
export type Seocho = 1;
export type CardType = Gaepo | Seocho;

export interface CardAttr {
  type: CardType;
  cardId: number;
  using: boolean;
}

export interface CardInstance extends Model<CardAttr, CardAttr>, CardAttr {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserAttr {
  userId: number;
  userName: string;
  email: string;
  cardType?: number;
  cardUsing?: boolean;
  cardId?: number;
  isAdmin?: boolean;
}

export interface Inst<T> extends Model<T, T>, T {
  createdAt?: Date;
  updatedAt?: Date;
}


export interface UserInstance extends Model<UserAttr, UserAttr>, UserAttr {
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ControllerOptions {
  shouldBeAuthenticated?: boolean;
}

export type HTTPMethod =
  | "get"
  | "delete"
  | "head"
  | "options"
  | "post"
  | "put"
  | "patch"
  | "purge"
  | "link"
  | "unlink";

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
  id: string;
  email: string;
  access_token: string;
  refresh_token: string;
  expires_at: string;
}

declare global {
  namespace Express {
    export interface Request {
      isAuthenticated?: boolean;
      user?: UserAttr;
    }
  }
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV?: string;
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
    }
  }
}
