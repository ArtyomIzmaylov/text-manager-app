import {Body, Controller, Get, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateChannelValidatorDto} from "../dto/create-channel-validator.dto";
import {ChannelValidatorService} from "./channel-validator.service";

@Controller('channel-validator')
export class ChannelValidatorController {
    constructor(private channelValidatorService : ChannelValidatorService) {
    }
    @UsePipes(new ValidationPipe())
    @Get()
    async validateChannel(@Body() createChannelValidatorDto : CreateChannelValidatorDto) {
        await this.channelValidatorService.get()
        return ({res : true})
    }
}
