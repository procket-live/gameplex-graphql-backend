import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from '@nestjs/graphql';

export const ResGql = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        return ctx.switchToHttp().getResponse()
    },
);


export const GqlUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        return ctx.switchToHttp().getResponse()
    },
);

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    }
)