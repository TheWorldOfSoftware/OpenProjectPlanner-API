import {
  createParamDecorator,
  type ExecutionContext,
  type PipeTransform,
  type Type
} from "@nestjs/common";

// (...dataOrPipes: (string | PipeTransform<any, any> | Type<PipeTransform<any, any>>)[]) => ParameterDecorator
export const BodyParam: (
  param: string,
  ...pipes: (PipeTransform<any, any> | Type<PipeTransform<any, any>>)[]
) => ParameterDecorator = createParamDecorator<string>(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return {
      ...req.body,
      [data]: req.params[data]
    };
  }
);
