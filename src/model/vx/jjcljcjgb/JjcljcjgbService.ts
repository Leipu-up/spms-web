import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjcljcjgbEntity } from './JjcljcjgbEntity'

export class JjcljcjgbService extends AbstractBaseService<JjcljcjgbEntity> {
  entityClass = JjcljcjgbEntity

  baseUrl = 'jjcljcjgb'
}
