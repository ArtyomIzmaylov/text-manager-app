import { Module } from '@nestjs/common';
import { ChannelValidatorController } from './channel-validator.controller';
import { ChannelValidatorService } from './channel-validator.service';
import {WorkerService} from "../worker/worker.service";

@Module({
  controllers: [ChannelValidatorController],
  providers: [ChannelValidatorService, WorkerService]
})
export class ChannelValidatorModule {

}
