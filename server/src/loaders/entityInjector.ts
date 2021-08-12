import { BaseEntity, Connection } from 'typeorm';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';
import Cart from '@/entity/cart';
import Category from '@/entity/category';
import Like from '@/entity/like';
import Login from '@/entity/login';
import Option from '@/entity/option';
import OptionItem from '@/entity/optionItem';
import Product from '@/entity/product';
import ProductImage from '@/entity/productImage';
import Review from '@/entity/review';
import Shipping from '@/entity/shipping';
import User from '@/entity/user';
import View from '@/entity/view';


const entityInjector = (connection: Connection) => {
  User.useConnection(connection);

  const entities: DependencyInfo<BaseEntity>[] = [
    { name: 'cartEntity', dependency: new Cart() },
    { name: 'categoryEntity', dependency: new Category() },
    { name: 'likeEntity', dependency: new Like() },
    { name: 'loginEntity', dependency: new Login() },
    { name: 'optionEntity', dependency: new Option() },
    { name: 'optionItemEntity', dependency: new OptionItem() },
    { name: 'productEntity', dependency: new Product() },
    { name: 'productImageEntity', dependency: new ProductImage() },
    { name: 'reviewEntity', dependency: new Review() },
    { name: 'shippingEntity', dependency: new Shipping() },
    { name: 'userEntity', dependency: new User() },
    { name: 'viewEntity', dependency: new View() },
  ];
    
  dependencyInjector<BaseEntity>(entities);
};

export default entityInjector;
