import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { JjgxbglEntity } from '@/model/vx/jjgxbgl/JjgxbglEntity'
import { WxyhEntity } from '@/model/vx/wxyh/WxyhEntity'

/**
 * # 用户实体
 */
export class JjgxjcbEntity extends BaseEntity implements IPayload {
  @Table({
    formatter: row => row.jjgxbgl?.gxmc || '-',
  })
  @Field({
    label: '工序名称',
  })
  jjgxbglGxmc!: string

  @Table({
    formatter: (row) => {
      const cpxh = row.jjgxbgl.jjcpbgl?.cpxh || '-'
      const cpmc = row.jjgxbgl.jjcpbgl?.cpmc || '-'
      return ` ${cpmc} ${cpxh}`
    },
  })
  @Field({
    label: '产品型号',
  })
  jjgxbgljJcpbglCpxh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '批次号',
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
    label: '设备号',
  })
  sbh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '日期',
  })
  rq!: string

  @Table({
    formatter: row => row.jyy?.realName || '-',
  })
  @Field({
    label: '检验员',
  })
  jyyRealName!: string

  @Table({
    formatter: row => row.qrz?.realName || '-',
  })
  @Field({
    label: '检验员',
  })
  qrzRealName!: string

  @Field({
    label: '检验员信息',
  })
  @Type(WxyhEntity)
  jyy!: WxyhEntity

  @Field({
    label: '确认者信息',
  })
  @Type(WxyhEntity)
  qrz!: WxyhEntity

  @Field({
    label: '机加工序表信息',
  })
  @Type(JjgxbglEntity)
  jjgxbgl!: JjgxbglEntity

  @Field({
    label: '机加产品表信息',
  })
  @Type(JjcpbglEntity)
  jjcpbgl!: JjcpbglEntity

  getPayloadLabel(): string {
    return this.pch
  }
}
