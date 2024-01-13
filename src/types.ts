export interface IToken {
  id: number;
  title: string;
  icon: string;
  balance: string;
  company: string;
}

export interface ITokenActivity {
  tokenId: number;
  token: IToken | null;
  title: string;
  type: "Withdraw" | "Deposit";
  icon: string;
  amount: number;
  datetime: Date;
  to?: string;
  from?: string;
}
