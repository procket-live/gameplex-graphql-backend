import { Module } from '@nestjs/common';
import { PlaygroundService } from './playground.service';
import { PlaygroundResolver } from './playground.resolver';

@Module({
  providers: [PlaygroundService, PlaygroundResolver]
})
export class PlaygroundModule {}
