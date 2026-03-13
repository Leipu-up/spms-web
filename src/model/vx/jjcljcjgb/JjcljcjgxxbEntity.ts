import type { IPayload } from '@airpower/web'
import { Field, Form, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcljcxxbEntity } from '@/model/vx/jjcljcb/JjcljcxxbEntity'

/**
 * # 用户实体
 */
export class JjcljcjgxxbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjcljcxxb?.xh || '-',
  })
  @Field({
    label: '序号',
  })
  jjcljcxxbXh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjcljcxxb?.jcxm || '-',
  })
  @Field({
    label: '检查项目',
  })
  jjcljcxxbJcxm!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjcljcxxb?.gfgc || '-',
  })
  @Field({
    label: '规范/公差',
  })
  jjcljcxxbGfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjcljcxxb?.yq || '-',
  })
  @Field({
    label: '仪器',
  })
  jjcljcxxbYq!: string

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
  @Type(JjcljcxxbEntity)
  jjcljcxxb!: JjcljcxxbEntity

  getPayloadLabel(): string {
    return this.scz
  }
}
