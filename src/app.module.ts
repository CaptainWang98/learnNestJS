import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { constants } from './providers/constants';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    // }),
    CatsModule,
  ],
  controllers: [AppController, DogsController],
  providers: [
    AppService,
    DogsService,
    {
      provide: 'CONSTANTS',
      useValue: constants,
    },
    // {
    //   provide: 'CLASSPROVIDECONSTANTS',
    //   useClass: 
    // },
  ],
})
export class AppModule {}
