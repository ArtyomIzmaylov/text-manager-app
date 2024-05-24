import { Injectable } from '@nestjs/common';
import {WorkerService} from "../worker/worker.service";

@Injectable()
export class ChannelValidatorService {
    constructor(private workerService : WorkerService) {

    }
    async get(pathToWorker) {
        return await this.workerService.run(pathToWorker, pathToWorker)
    }
}
