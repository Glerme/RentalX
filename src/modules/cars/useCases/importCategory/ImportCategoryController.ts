import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    if (!file) {
      throw new Error('File Not exist');
    }

    await importCategoryUseCase.execute(file);

    return res.send();
  }
}
export { ImportCategoryController };
