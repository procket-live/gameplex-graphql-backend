import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefaultAdminModule, DefaultAdminSite } from 'nestjs-admin'
const AdminUser = require('nestjs-admin').AdminUserEntity;

import { UserModule } from './module/user/user.module';
import { OtpModule } from './module/otp/otp.module';
import { AuthModule } from './module/auth/auth.module';
import { GameModule } from './module/game/game.module';
import { configService } from './config/config.service';
import { BankaccountModule } from './module/bankaccount/bankaccount.module';
import { LookuptypeModule } from './module/lookuptype/lookuptype.module';
import { WalletModule } from './module/wallet/wallet.module';
import { OfferModule } from './module/offer/offer.module';
import { TournamentModule } from './module/tournament/tournament.module';
import { PlaygroundModule } from './module/playground/playground.module';
import { ApplicationModule } from './module/application/application.module';
import { ChatroomModule } from './module/chatroom/chatroom.module';
import { OrderModule } from './order/order.module';
import { OrganizerModule } from './organizer/organizer.module';
import { PaymentModule } from './payment/payment.module';
import { ParticipantModule } from './participant/participant.module';

const typeOrmConfig = configService.getTypeOrmConfig();

@Module({
    imports: [
        GraphQLModule.forRoot({
            context: (...params) => (params),
            typePaths: ['./**/*.graphql'],
            playground: true,
            debug: false,
            installSubscriptionHandlers: true,
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
            introspection: true,
            cors: false,
        }),
        TypeOrmModule.forRoot(typeOrmConfig),
        UserModule,
        OtpModule,
        AuthModule,
        GameModule,
        BankaccountModule,
        LookuptypeModule,
        DefaultAdminModule,
        DefaultAdminSite,
        WalletModule,
        OfferModule,
        TournamentModule,
        PlaygroundModule,
        ApplicationModule,
        ChatroomModule,
        OrderModule,
        OrganizerModule,
        PaymentModule,
        ParticipantModule,
    ],
    providers: []
})
export class AppModule { }
