import {DefaultCrudRepository} from '@loopback/repository';
import {Person} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonRepository extends DefaultCrudRepository<
  Person,
  typeof Person.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Person, dataSource);
  }
}
