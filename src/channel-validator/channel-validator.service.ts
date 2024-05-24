import { Injectable } from '@nestjs/common';
import {WorkerService} from "../worker/worker.service";
import {IChannelValidatorDto} from "./channel-validator.interface";

@Injectable()
export class ChannelValidatorService {
    constructor(private workerService : WorkerService) {

    }
    async get(channelValidationDto : IChannelValidatorDto, pathToWorker : string) {
        return await this.workerService.run(channelValidationDto, pathToWorker)
    }
}
