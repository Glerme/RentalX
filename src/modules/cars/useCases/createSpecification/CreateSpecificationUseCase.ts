import { inject, injectable } from 'tsyringe';
import { ISpecificationsRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationExists = this.specificationsRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specifications already exists');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
