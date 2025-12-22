import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'

/**
 * # 用户实体
 */
export class JjgxxqbglEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '序号',
  })
  xh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '规范/公差',
  })
  gfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '特殊特性',
  })
  tstx!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '仪器',
  })
  yq!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '频次',
  })
  pc!: string

  getPayloadLabel(): string {
    return this.xh
  }
}
