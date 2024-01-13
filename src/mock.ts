import { IToken, ITokenActivity } from "./types.ts";

export const tokens: IToken[] = [
  {
    id: 1,
    title: "1,253 TON",
    icon: "toncoin.png",
    balance: "$2,889.32",
    company: "Toncoin",
  },
  {
    id: 2,
    title: "100 DFC",
    icon: "bitcoin.png",
    balance: "$14.32",
    company: "Bitcoin",
  },
  {
    id: 3,
    title: "12.43 USDT",
    icon: "tether.png",
    balance: "$12.46",
    company: "Tether",
  },
];

export const activityTokens: ITokenActivity[] = [
  {
    token: null,
    tokenId: 1,
    title: "TON",
    type: "Withdraw",
    amount: 9,
    to: "TjkfLkkoOioj5FGs",
    icon: "withdraw.png",
    datetime: new Date("2023-10-19"),
  },
  {
    token: null,
    tokenId: 1,
    title: "TON",
    type: "Deposit",
    amount: 9,
    from: "mutantape.ton",
    icon: "deposit.png",
    datetime: new Date("2023-10-19"),
  },
  {
    token: null,
    tokenId: 1,
    title: "TON",
    type: "Withdraw",
    amount: 9,
    to: "TjkLkkoOiofj5FGs",
    icon: "withdraw.png",
    datetime: new Date("2023-10-19"),
  },
  {
    token: null,
    tokenId: 1,
    title: "TON",
    type: "Withdraw",
    amount: 9,
    to: "TjkLkfkoOioj5FGs",
    icon: "withdraw.png",
    datetime: new Date("2023-10-19"),
  },
];
