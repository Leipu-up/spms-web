import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table } from '@airpower/web'
import { BaseEntity } from '@/base/BaseEntity'

/**
 * # 用户实体
 */
export class JjcpbglEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '产品名称',
  })
  cpmc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '产品型号',
  })
  cpxh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '产品版本',
  })
  cpbb!: string

  getPayloadLabel(): string {
    return this.cpmc
  }
}
