import {StringSession} from "telegram/sessions";
import {ConfigService} from "../config/config.service";
import {TelegramClient} from "telegram";


(async () => {
    const configService = new ConfigService()
    const stringSession = new StringSession(configService.get('STRING_SESSION'))
    const client = new TelegramClient(stringSession, parseInt(configService.get('API_ID')),configService.get('API_HASH'), {});
    const channelValidator = new ChannelValidator(client, new ConfigService())
    const requestData = workerData.requestData as IRequestValidateChannel

    try {
        await client.connect()
        const validateResult = await channelValidator.validate(requestData.channelName)
        const workerResult : IChannelValidatorWorkerResult = {
            workerResult : validateResult ? 'Канал существует' : 'Канал не существует'
        }
        if (parentPort) {
            parentPort.postMessage(workerResult);
        }
    }
    catch (e) {
        console.log(e)
        if (parentPort) {
            parentPort.postMessage({ workerResult: e });
        }
    }
    finally {
        await client.disconnect()
    }

})()
