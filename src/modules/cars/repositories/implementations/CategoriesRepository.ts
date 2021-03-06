import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepositoryInterface';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

   constructor() {
    this.repository = getRepository(Category);
  }


  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    //SELECT * FROM CATEGORIES WHERE NAME = "NAME" limit=1
    const category = await this.repository.findOne({ name });

    if (!category) {
      throw new Error('Erro');
    }

    return category;
  }
}

export { CategoriesRepository };
