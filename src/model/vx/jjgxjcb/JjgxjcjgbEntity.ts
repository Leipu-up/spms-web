import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'

/**
 * # 用户实体
 */
export class JjgxjcjgbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '工件状态(首件,工序检验,尾件)',
  })
  pch!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '检查时间',
  })
  jcsj!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '实测值',
  })
  scz!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '判定结果(OK/NG)',
  })
  pdjg!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '不合格品报告',
  })
  bhepbg!: string

  getPayloadLabel(): string {
    return this.pch
  }
}
