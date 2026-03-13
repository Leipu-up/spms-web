import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjcljcbEntity } from './JjcljcbEntity'

export class JjcljcbService extends AbstractBaseService<JjcljcbEntity> {
  entityClass = JjcljcbEntity

  baseUrl = 'jjcljcb'
}
