import {
  type ExecutionContext,
  type PipeTransform,
  type Type,
  createParamDecorator
} from "@nestjs/common";

export const BodyParam: (
  param: string,
  ...pipes: readonly (PipeTransform | Type<PipeTransform>)[]
) => ParameterDecorator = createParamDecorator<string>(
  (identifier, ctx: Readonly<ExecutionContext>) => {
    const req = ctx
      .switchToHttp()
      .getRequest<Request & { params: Record<string, unknown> }>();
    return {
      ...req.body,
      [identifier]: req.params[identifier] as string
    };
  }
);

export const BodyParams: (
  ...pipes: readonly (PipeTransform | Type<PipeTransform>)[]
) => ParameterDecorator = createParamDecorator(
  (_data, ctx: Readonly<ExecutionContext>) => {
    const req = ctx
      .switchToHttp()
      .getRequest<Request & { params: Record<string, unknown> }>();
    return {
      ...req.body,
      ...req.params
    };
  }
);
