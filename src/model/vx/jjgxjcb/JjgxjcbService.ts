import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjgxjcbEntity } from './JjgxjcbEntity'

export class JjgxjcbService extends AbstractBaseService<JjgxjcbEntity> {
  entityClass = JjgxjcbEntity

  baseUrl = 'jjgxjcb'
}
