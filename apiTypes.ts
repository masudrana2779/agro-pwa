import {UserType} from "./enum";

type Token = {
  token: string;
  refreshToken: string;
};


type Brand = {
  _id: string;
  profileName: string;
  shopLink: string;
  logoUrl: string;
};


export type TokenInfo = {
  userType: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

export type RefreshTokenResponse = {
  token: string;
  refreshToken: string;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};

export type BrandResponse = Brand & {
  category: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  isBrandStatusActive: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
};

export type UserSignupResponse = {
  _id: string;
  name: string;
  email: string;
  isValid: boolean;
  isAgree: boolean;
  userType: string;
  channel: string;
  brands: BrandResponse;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};

export type UserLoginResponse = Token & {
  user: UserSignupResponse;
};

export type CategoryResponse = {
  _id: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}[];

export type ProductWithLog = {
  _id: string;
  productName: string;
  status: boolean;
  updatedAt: Date;
  productUrl: string;
  videoUrl: string;
  category: string;
  totalAdditionalClips: number;
  thumbnail: string;
  totalViews: number;
  totalShareButtonClick: number;
  totalBuyButtonClick: number;
  conversionRate: number;
};


export type User = {
  phoneNumber: string,
  name: string,
  address: string,
  rule: UserType,
}