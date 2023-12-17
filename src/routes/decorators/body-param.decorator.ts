import {
  type ExecutionContext,
  type PipeTransform,
  type Type,
  createParamDecorator
} from "@nestjs/common";

export const BodyParam: (
  param: string,
  ...pipes: (PipeTransform | Type<PipeTransform>)[]
) => ParameterDecorator = createParamDecorator<string>(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return {
      ...req.body,
      [data]: req.params[data]
    };
  }
);

export const BodyParams: (
  ...pipes: (PipeTransform | Type<PipeTransform>)[]
) => ParameterDecorator = createParamDecorator(
  (_data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return {
      ...req.body,
      ...req.params
    };
  }
);
