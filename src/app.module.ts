import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TextManagerController} from './text-manager/text-manager.controller';
import {TextManagerModule} from './text-manager/text-manager.module';
import {ChannelValidatorModule} from './channel-validator/channel-validator.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TextManagerModule, ChannelValidatorModule, ConfigModule],
  controllers: [AppController, TextManagerController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
