import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'

/**
 * # 用户实体
 */
export class JjgxbglEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '工序名称',
  })
  gxmc!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpmc || '-',
  })
  @Field({
    label: '产品名称',
  })
  jjcpbglCpmc!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpxh || '-',
  })
  @Field({
    label: '产品型号',
  })
  jjcpbglCpxh!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpbb || '-',
  })
  @Field({
    label: '产品版本',
  })
  jjcpbglCpbb!: string

  @Field({
    label: '产品信息',
  })
  @Type(JjcpbglEntity)
  jjcpbgl!: JjcpbglEntity

  @Field({
    label: '机加工序详情表',
  })
  @Type(JjgxxqbglEntity, true)
  details: JjgxxqbglEntity[] = []

  getPayloadLabel(): string {
    return this.gxmc
  }
}
