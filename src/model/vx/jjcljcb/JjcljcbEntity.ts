import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcljcxxbEntity } from '@/model/vx/jjcljcb/JjcljcxxbEntity'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'

/**
 * # 用户实体
 */
export class JjcljcbEntity extends BaseEntity implements IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '供应商名称',
  })
  gysmc!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpmc || '-',
  })
  @Field({
    label: '材料名称',
  })
  jjcpbglCpmc!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpxh || '-',
  })
  @Field({
    label: '材料型号',
  })
  jjcpbglCpxh!: string

  @Table({
    formatter: row => row.jjcpbgl?.cpbb || '-',
  })
  @Field({
    label: '材料尺寸',
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
  @Type(JjcljcxxbEntity, true)
  details: JjcljcxxbEntity[] = []

  getPayloadLabel(): string {
    return this.gysmc
  }
}
