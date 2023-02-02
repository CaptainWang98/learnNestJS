import { Body, Controller, Post, Get, Res, HttpStatus } from '@nestjs/common';
import { CreateDogDto } from './create-dog.dto';
import { DogsService } from './dogs.service';
import { Dog } from 'src/interfaces/dogs.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  findAll(): Promise<Dog[]> {
    return new Promise((resolve, reject) => {
      resolve(this.dogsService.findAll());
    });
  }
}
