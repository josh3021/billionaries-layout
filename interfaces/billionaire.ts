export interface IBillionaire {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

interface IFinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice?: number;
}

export interface IBillionaireDetails {
  id: string;
  state?: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets?: IFinancialAsset[];
  thumbnail?: string;
  squareImage: string;
  bio: string[];
  about?: string[];
  netWorth: number;
}
