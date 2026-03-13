import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjcljcxxbEntity } from './JjcljcxxbEntity'

export class JjcljcxxbService extends AbstractBaseService<JjcljcxxbEntity> {
  entityClass = JjcljcxxbEntity

  baseUrl = 'jjcljcb'
}
