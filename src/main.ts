import dotenv from 'dotenv'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import cookieParser from 'cookie-parser';

// const helmet = require('helmet');
// const csurf = require('csurf');
// const rateLimit = require('express-rate-limit');

dotenv.config()
const port = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.use(cookieParser());
    // app.use(helmet({

    // }));
    // app.use(csurf());
    // app.use(
    //     rateLimit({
    //         windowMs: 15 * 60 * 1000, // 15 minutes
    //         max: 100, // limit each IP to 100 requests per windowMs
    //     }),
    // );
    await app.listen(port);
    Logger.log(`🚀 Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
