import type { IPayload } from '@airpower/web'
import { Field, Form, Table } from '@airpower/web'
import { BaseEntity } from '@/base/BaseEntity'

/**
 * # 用户实体
 */
export class JjcljcxxbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
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
  @Field({
    label: '检查项目',
  })
  jcxm!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '尺寸/参数',
  })
  gfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
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
  @Field({
    label: '样品数量',
  })
  ypsl!: string

  getPayloadLabel(): string {
    return this.xh
  }
}
