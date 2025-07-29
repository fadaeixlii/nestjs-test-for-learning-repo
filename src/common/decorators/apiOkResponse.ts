import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiSuccessResponse = (resultDto: any) => {
  return applyDecorators(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    ApiExtraModels(resultDto),
    ApiOkResponse({
      description: 'Response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'success',
          },
          result: {
            type: 'object',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            $ref: getSchemaPath(resultDto),
          },
          timestamp: {
            type: 'Date',
            example: new Date(),
          },
        },
      },
    }),
  );
};
