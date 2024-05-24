import {Body, Controller, Get, UsePipes, ValidationPipe} from '@nestjs/common';
import {ChannelValidatorDto} from "../dto/channel-validator.dto";
import {ChannelValidatorService} from "./channel-validator.service";
import * as path from "path";

@Controller('channel-validator')
export class ChannelValidatorController {
    constructor(private channelValidatorService : ChannelValidatorService) {
    }
    @UsePipes(new ValidationPipe())
    @Get()
    async validateChannel(@Body() channelValidatorDto : ChannelValidatorDto) {
        await this.channelValidatorService.get(channelValidatorDto, path.join(__dirname, '..', 'channel-validator', 'channel-validator.worker.js'))
        return ({res : true})
    }
}
