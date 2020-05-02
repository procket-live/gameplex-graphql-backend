import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule } from 'nestjs-admin'

import { UserModule } from './module/user/user.module';
import { OtpModule } from './module/otp/otp.module';
import { AuthModule } from './module/auth/auth.module';
import { GameModule } from './module/game/game.module';
import { configService } from './config/config.service';
import { BankaccountModule } from './module/bankaccount/bankaccount.module';
import { LookuptypeModule } from './module/lookuptype/lookuptype.module';

const typeOrmConfig = configService.getTypeOrmConfig();

@Module({
    imports: [
        GraphQLModule.forRoot({
            context: (...params) => (params),
            typePaths: ['./**/*.graphql'],
            playground: true,
            debug: true,
            installSubscriptionHandlers: true,
            resolverValidationOptions: {
                requireResolversForResolveType: true,
            },
            introspection: true,
            cors: false,
        }),
        TypeOrmModule.forRoot(typeOrmConfig),
        DefaultAdminModule,
        UserModule,
        OtpModule,
        AuthModule,
        GameModule,
        BankaccountModule,
        LookuptypeModule,
    ],
})
export class AppModule { }
