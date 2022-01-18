import { billingBatches } from '../models';

export const billingBatchesProviders = [
  {
    provide: 'BILLING_BATCHES_REPOSITORY',
    useValue: billingBatches,
  },
];
