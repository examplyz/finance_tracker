export type TransactionType = 'income' | 'expense' | 'transfer';
export type Currency = 'USD' | 'EUR' ;
export type Theme = 'light' | 'dark';


export interface Account {
    id: string;
    name: string;
    balance: number;
    currency: Currency;
}

export interface Category {
    id: string;
    name: string;
    color: string;
    icon: string;
    isDefault: boolean;
}

export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    categoryId: string;
    accountId: string;
    toAccountId?: string;
    date: string;
    note?: string;
}

export interface Budget {
    id: string;
    categoryId: string;
    limit: number;
    from: string; // ISO date
    until: string; // ISO date
}

export interface Settings {
    currency: Currency;
    theme: Theme;
}