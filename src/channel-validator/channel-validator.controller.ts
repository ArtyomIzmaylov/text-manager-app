import {Body, Controller, Get, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateChannelValidatorDto} from "../dto/create-channel-validator.dto";

@Controller('channel-validator')
export class ChannelValidatorController {
    @UsePipes(new ValidationPipe())
    @Get()
    validateChannel(@Body() createChannelValidatorDto : CreateChannelValidatorDto) {

        return ({res : true})
    }
}
