import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjgxxqbglEntity } from './JjgxxqbglEntity'

export class JjgxxqbglService extends AbstractBaseService<JjgxxqbglEntity> {
  entityClass = JjgxxqbglEntity

  baseUrl = 'jjgxbgl'
}
