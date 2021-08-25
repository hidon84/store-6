import { EntityRepository, Repository } from 'typeorm';
import CategoryEntity from '@/entity/category';

@EntityRepository(CategoryEntity)
class CategoryRepository extends Repository<CategoryEntity> {
  async findByName(name: string) {
    const category = await this.findOne({
      where: { name },
    });
    return category;
  }
}

export default CategoryRepository;
