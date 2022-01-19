import { Inject, Injectable } from '@nestjs/common';
import { create } from 'lodash';
import { User } from '../decorators/user.decorator';
import { auditLogs, auditLogsAttributes, companies, users } from '../models';
import { CreateAuditLogDto } from './dto/create-audit-log.dto';

@Injectable()
export class AuditLogsService {
  constructor(
    @Inject('AUDIT_LOGS_REPOSITORY')
    private auditLogsRepository: typeof auditLogs,
  ) {}

  async create(
    createAuditLogDto: CreateAuditLogDto,
    user: users,
    company: companies,
  ): Promise<void> {
    const createAuditLog: auditLogsAttributes = {
      userId: user.id,
      companyId: company.id,
      ...createAuditLogDto,
      createdAt: new Date(),
    };
    await this.auditLogsRepository.create(createAuditLog);
  }
}
