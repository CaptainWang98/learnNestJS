import { Inject, Injectable, Scope } from '@nestjs/common';
import { Dog } from 'src/interfaces/dogs.interface';

@Injectable({ scope: Scope.REQUEST })
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
