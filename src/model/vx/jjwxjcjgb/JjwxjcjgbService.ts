import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjwxjcjgbEntity } from './JjwxjcjgbEntity'

export class JjwxjcjgbService extends AbstractBaseService<JjwxjcjgbEntity> {
  entityClass = JjwxjcjgbEntity

  baseUrl = 'jjwxjcjgb'
}
