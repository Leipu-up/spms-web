import { AbstractBaseService } from '@/base/AbstractBaseService'
import { WxyhEntity } from './WxyhEntity'

export class WxyhService extends AbstractBaseService<WxyhEntity> {
  entityClass = WxyhEntity

  baseUrl = 'wxyh'
}
