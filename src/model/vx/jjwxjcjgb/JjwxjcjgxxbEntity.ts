import type { IPayload } from '@airpower/web'
import { Field, Form, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjwxjcxxbEntity } from '@/model/vx/jjwxjcb/JjwxjcxxbEntity'

/**
 * # 用户实体
 */
export class JjwxjcjgxxbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjwxjcxxb?.xh || '-',
  })
  @Field({
    label: '序号',
  })
  jjwxjcxxbXh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjwxjcxxb?.gfgc || '-',
  })
  @Field({
    label: '规范/公差',
  })
  jjwxjcxxbGfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjwxjcxxb?.yq || '-',
  })
  @Field({
    label: '仪器',
  })
  jjwxjcxxbYq!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '实测值',
  })
  scz!: string

  @Field({
    label: '机表外协检查详细表',
  })
  @Type(JjwxjcxxbEntity)
  jjwxjcxxb!: JjwxjcxxbEntity

  getPayloadLabel(): string {
    return this.scz
  }
}
