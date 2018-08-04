import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AccountDto } from '@rucken/core-nestjs';

export class AccountTokenDto {

    @ApiModelProperty()
    token: string;

    @Type(() => AccountDto)
    @ApiModelProperty({ type: AccountDto })
    user: AccountDto;
}