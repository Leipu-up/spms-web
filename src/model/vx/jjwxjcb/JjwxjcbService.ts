import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjwxjcbEntity } from './JjwxjcbEntity'

export class JjwxjcbService extends AbstractBaseService<JjwxjcbEntity> {
  entityClass = JjwxjcbEntity

  baseUrl = 'jjwxjcb'
}
