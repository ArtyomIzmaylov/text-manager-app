import {IsString} from "class-validator";

export class CreateChannelValidatorDto {
    @IsString()
    channelLink : string;
}