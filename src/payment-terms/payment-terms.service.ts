import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { paymentTerms, paymentTermsAttributes } from '../models';
import { CreateServiceProvider } from '../parents/abstract-service';
import { UpdatePaymentTermDto } from './dto/update-payment-term.dto';

@Injectable()
export class PaymentTermsService extends CreateServiceProvider<
  paymentTerms,
  paymentTermsAttributes
> {
  constructor(
    @Inject('PAYMENT_TERMS_REPOSITORY')
    private paymentTermsRepository: typeof paymentTerms,
    private eventEmitter: EventEmitter2,
  ) {
    super(paymentTermsRepository, eventEmitter);
  }

  findAll() {
    return `This action returns all paymentTerms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentTerm`;
  }

  update(id: number, updatePaymentTermDto: UpdatePaymentTermDto) {
    return `This action updates a #${id} paymentTerm`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentTerm`;
  }
}
