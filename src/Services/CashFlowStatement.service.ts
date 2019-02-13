import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const cashFlowStatement = async (
  symbol: string,
  period: string = "quarter"
): Promise<CashFlowStatement[]> => {
  const endpoint = `/stock/${symbol}/cash-flow?period=${period}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result: any[] = data.cashflow;
  return result.map((o: KVP) => {
    const r = Object.assign(new CashFlowStatement(), o);
    r.symbol = symbol;
    return r;
  });
};

export interface IEXCashFlow {
  reportDate: string;
  netIncome: number;
  depreciation: number;
  changesInReceivables: number;
  changesInInventories: number;
  cashChange: number;
  cashFlow: number;
  capitalExpenditures: number;
  investments: number;
  investingActivityOther: number;
  totalInvestingCashFlows: number;
  dividendsPaid: number;
  netBorrowings: number;
  otherFinancingCashFlows: number;
  cashFlowFinancing: number;
  exchangeRateEffect: number | null;
}

export class CashFlowStatement implements IEXCashFlow {
  public reportDate: string = "";
  public netIncome: number = 0;
  public depreciation: number = 0;
  public changesInReceivables: number = 0;
  public changesInInventories: number = 0;
  public cashChange: number = 0;
  public cashFlow: number = 0;
  public capitalExpenditures: number = 0;
  public investments: number = 0;
  public investingActivityOther: number = 0;
  public totalInvestingCashFlows: number = 0;
  public dividendsPaid: number = 0;
  public netBorrowings: number = 0;
  public otherFinancingCashFlows: number = 0;
  public cashFlowFinancing: number = 0;
  public exchangeRateEffect: number | null = 0;
}