import { AbstractBaseService } from '@/base/AbstractBaseService'
import { JjcpbglEntity } from './JjcpbglEntity'

export class JjcpbglService extends AbstractBaseService<JjcpbglEntity> {
  entityClass = JjcpbglEntity

  baseUrl = 'jjcpbgl'
}
