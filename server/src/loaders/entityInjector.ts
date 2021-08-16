import { ObjectLiteral } from 'typeorm';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';
import CartEntity from '@/entity/cart';
import CategoryEntity from '@/entity/category';
import LikeEntity from '@/entity/like';
import LoginEntity from '@/entity/login';
import OptionEntity from '@/entity/option';
import OptionItemEntity from '@/entity/optionItem';
import ProductEntity from '@/entity/product';
import ProductImageEntity from '@/entity/productImage';
import ReviewEntity from '@/entity/review';
import ShippingEntity from '@/entity/shipping';
import UserEntity from '@/entity/user';
import ViewEntity from '@/entity/view';

const entityInjector = () => {
  const entities: DependencyInfo<ObjectLiteral>[] = [
    { name: 'cartEntity', dependency: new CartEntity() },
    { name: 'categoryEntity', dependency: new CategoryEntity() },
    { name: 'likeEntity', dependency: new LikeEntity() },
    { name: 'loginEntity', dependency: new LoginEntity() },
    { name: 'optionEntity', dependency: new OptionEntity() },
    { name: 'optionItemEntity', dependency: new OptionItemEntity() },
    { name: 'productEntity', dependency: new ProductEntity() },
    { name: 'productImageEntity', dependency: new ProductImageEntity() },
    { name: 'reviewEntity', dependency: new ReviewEntity() },
    { name: 'shippingEntity', dependency: new ShippingEntity() },
    { name: 'userEntity', dependency: new UserEntity() },
    { name: 'viewEntity', dependency: new ViewEntity() },
  ];

  dependencyInjector<ObjectLiteral>(entities);
};

export default entityInjector;
