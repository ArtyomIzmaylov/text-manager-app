import {IsString} from "class-validator";

export class ChannelValidatorDto {
    @IsString()
    channelLink : string;
}