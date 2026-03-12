import { AbstractBaseService } from '@/base/AbstractBaseService'
import {JjwxjcxxbEntity} from './JjwxjcxxbEntity'

export class JjwxjcxxbService extends AbstractBaseService<JjwxjcxxbEntity> {
  entityClass = JjwxjcxxbEntity

  baseUrl = 'jjwxjcb'
}
