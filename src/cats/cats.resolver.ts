import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';

@Resolver('Cat')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Mutation('createCat')
  create(@Args('createCatInput') createCatInput: CreateCatInput) {
    return this.catsService.create(createCatInput);
  }

  @Query('cats')
  findAll() {
    return this.catsService.findAll();
  }

  @Query('cat')
  findOne(@Args('id') id: number) {
    return this.catsService.findOne(id);
  }

  @Mutation('updateCat')
  update(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catsService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation('removeCat')
  remove(@Args('id') id: number) {
    return this.catsService.remove(id);
  }
}
