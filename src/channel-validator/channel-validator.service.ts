import { Injectable } from '@nestjs/common';
import {WorkerService} from "../worker/worker.service";

@Injectable()
export class ChannelValidatorService {
    constructor(private workerService : WorkerService) {

    }
}
