type Token = {
  token: string;
  refreshToken: string;
};

type User = Omit<UserSignupResponse, '__v' | 'createdAt' | 'updatedAt'> & Token;

type Ref = {
  _id: string;
  name: string;
  email: string;
};

type Product = {
  _id: string;
  productName: string;
  productUrl: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  videoCaption: string;
  status: boolean;
  brand: string;
  theme: string;
  subTheme: string;
  ref: string;
  createdAt: Date;
  updatedAt: Date;
};

type Brand = {
  _id: string;
  profileName: string;
  shopLink: string;
  logoUrl: string;
};

type Theme = {
  _id: string;
  themeName: string;
  logoUrl: string;
  category: string;
};

type SubTheme = {
  _id: string;
  subThemeName: string;
};

type AdditionalClip = {
  _id: string;
  videoUrl: string;
  videoCaption: string;
  thumbnailUrl: string;
};

export type TokenInfo = {
  userType: string;
  email: string;
  name: string;
  iat: number;
  exp: number;
};

export type Session = {
  expires: string;
  user: User;
};

export type RefreshTokenResponse = {
  token: string;
  refreshToken: string;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};

export type SuccessResponse = {
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

export type GetTopBrandsResponse = (Brand & {
  category: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
  isBrandStatusActive: boolean;
  theme: Theme[];
  ref: Ref;
  logs: unknown[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
})[];

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

export type ProductsResponse = {
  productWithLog: ProductWithLog[];
  totalProducts: number;
};

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

export type ThemeResponse = {
  _id: string;
  category: string;
  engagement: number;
  logoUrl: string;
  subTheme: SubTheme[];
  themeName: string;
  totalProducts: number;
  updatedAt: string;
}[];

export type ThemeDetailsResponse = {
  _id: string;
  themeName: string;
  logoUrl: string;
  category: string;
  brand: Brand & {
    category: string;
    description: string;
  };
  products: string[];
  subTheme: SubTheme[];
  ref: Ref;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProductsBySubThemeResponse = {
  productsLogs: {
    _id: string;
    totalProducts: number;
    productName: string;
    thumbnail: string;
    totalViews: number;
    totalShareButtonClick: number;
    totalBuyButtonClick: number;
    conversionRate: number;
    totalAdditionalClip: number;
    videoUrl: string;
    isActive: boolean;
    productId: string;
    createdOn: string;
  }[];
  totalProducts: number;
};

export type GetProductResponse = {
  _id: string;
  totalViews: number;
  totalShareButtonClick: number;
  totalBuyButtonClick: number;
  productConversionRate: number;
  productName: string;
  productVideoUrl: string;
  thumbnail: string;
  status: boolean;
  updatedAt: string;
  theme: {
    _id: string;
    themeName: string;
  };
  subTheme: SubTheme;
  AdditionalVideoLogList: {
    totalViews: number;
    totalShareButtonClick: number;
    totalBuyButtonClick: number;
    conversionRate: number;
    videoCaption: string;
    videoUrl: string;
    thumbnailUrl: string;
  }[];
};

export type GetWebHighlightedVideosResponse = {
  _id: string;
  videoUrl: string;
  videoCaption: string;
  thumbnailUrl: string;
  product: {
    _id: string;
    brand: Brand;
  };
}[];

export type GetWebBannerResponse = (Brand & {
  videoUrl: string;
  thumbnail?: string;
})[];

export type GetWebTopBrandsResponse = (Omit<Brand, '_id'> & {
  brandId: string;
  videoUrl: string;
  thumbnail?: string;
  totalProducts: number;
})[];

export type GetWebTrendingProductsResponse = {
  _id: string;
  productName: string;
  productUrl: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  videoCaption: string;
  status: boolean;
  brand: BrandResponse;
  theme: string;
  subTheme: string;
  ref: string;
}[];

export type GetWebTopSellingProductsResponse = {
  _id: string;
  productName: string;
  videoUrl: string;
  thumbnail: string;
  brand: Brand;
}[];

export type GetWebBrandDetailsResponse = {
  _id: string;
  profileName: string;
  shopLink: string;
  logoUrl: string;
  videoUrl: string;
  description: string;
  isBrandStatusActive: boolean;
  theme: (Omit<Theme, 'category'> & {
    subTheme: (SubTheme & {
      logoUrl: string;
      isSubThemeActive: boolean;
      products: Product[];
      updatedAt: Date;
    })[];
  })[];
  updatedAt: Date;
  thumbnail: string;
};

export type GetWebProductDetailsResponse = {
  _id: string;
  productName: string;
  productUrl: string;
  videoUrl: string;
  thumbnail: string;
  videoCaption: string;
  status: boolean;
  brand: Brand & {
    description: string;
  };
  additionalClips: AdditionalClip[];
  updatedAt: Date;
};
