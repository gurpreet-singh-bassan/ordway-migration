import { chartOfAccounts } from '../models';

export const chartOfAccountsProviders = [
  {
    provide: 'CHART_OF_ACCOUNTS_REPOSITORY',
    useValue: chartOfAccounts,
  },
];
