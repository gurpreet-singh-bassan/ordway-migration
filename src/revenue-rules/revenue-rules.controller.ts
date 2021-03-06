import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RevenueRulesService } from './revenue-rules.service';
import { CreateRevenueRuleDto } from './dto/create-revenue-rule.dto';
import { UpdateRevenueRuleDto } from './dto/update-revenue-rule.dto';
import { ApiExcludeController } from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';

@Controller('revenue-rules')
@ApiExcludeController()
export class RevenueRulesController {
  constructor(private readonly revenueRulesService: RevenueRulesService) {}

  @Post()
  create(
    @Body() createRevenueRuleDto: CreateRevenueRuleDto[],
    @User() userDetail,
  ) {
    const { user, company } = userDetail;
    return this.revenueRulesService.create(createRevenueRuleDto, user, company);
  }

  @Get()
  findAll() {
    return this.revenueRulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueRulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRevenueRuleDto: UpdateRevenueRuleDto,
  ) {
    return this.revenueRulesService.update(+id, updateRevenueRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueRulesService.remove(+id);
  }
}
