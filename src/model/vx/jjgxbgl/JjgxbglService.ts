import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjgxbglEntity } from './JjgxbglEntity'

export class JjgxbglService extends AbstractBaseService<JjgxbglEntity> {
  entityClass = JjgxbglEntity

  baseUrl = 'jjgxbgl'
}
