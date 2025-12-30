import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'

/**
 * # 用户实体
 */
export class JjgxjcjgbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjgxxqbgl?.xh || '-',
  })
  @Field({
    label: '序号',
  })
  jjgxxqbglXh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjgxxqbgl?.gfgc || '-',
  })
  @Field({
    label: '规范/公差',
  })
  jjgxxqbglGfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    formatter: row => row.jjgxxqbgl?.yq || '-',
  })
  @Field({
    label: '仪器',
  })
  jjgxxqbglYq!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '工件状态',
  })
  gjzt!: string

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
  @Field({
    label: '不合格品报告',
  })
  bhepbg!: string

  @Field({
    label: '机加工序详情表',
  })
  @Type(JjgxxqbglEntity)
  jjgxxqbgl!: JjgxxqbglEntity

  getPayloadLabel(): string {
    return this.gjzt
  }
}
