import {StringSession} from "telegram/sessions";
import {ConfigService} from "../config/config.service";
import {Api, TelegramClient} from "telegram";
import { workerData, parentPort } from "worker_threads"
import {IChannelValidatorDto} from "./channel-validator.interface";

(async () => {
    try {
        await main()
    }
    catch (e) {
        console.log(e)
        throw Error
    }

})()

async function main() {
    const configService = new ConfigService()
    const stringSession = new StringSession(configService.get('STRING_SESSION'))
    const client = new TelegramClient(stringSession, parseInt(configService.get('API_ID')),configService.get('API_HASH'), {});
    try {
        await client.connect()
        const channelValidatorDto = workerData.channelValidatorDto as IChannelValidatorDto
        const result = await this.client.invoke(
            new Api.channels.GetFullChannel({
                channel: channelValidatorDto.channelLink
            })
        )
        const fullChat = (result.fullChat) as Api.TypeChatFull & { flags?: number }
        const validationResult = fullChat.flags === parseInt(this.configService.get('CHANNEL_IDENTIFIER'))
        if (parentPort) {
            parentPort.postMessage(validationResult);
        }
    }
    catch (e) {
        console.log(e)
        throw Error
    }
    finally {
        await client.disconnect()
    }
}