import { Injectable } from '@nestjs/common';
import {Worker} from "worker_threads";
import {IChannelValidatorDto} from "../channel-validator/channel-validator.interface";

@Injectable()
export interface IWorkerService {
    run(channelValidatorDto : IChannelValidatorDto, pathToWorker : string) : Promise<any>
}
export class WorkerService implements IWorkerService{


    async run(channelValidatorDto : IChannelValidatorDto, pathToWorker : string) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { workerData : {
                    channelValidatorDto : channelValidatorDto
                } });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code : any) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    }
}

