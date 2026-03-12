import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { JjwxjcbEntity } from '@/model/vx/jjwxjcb/JjwxjcbEntity'
import { WxyhEntity } from '@/model/vx/wxyh/WxyhEntity'
import { JjwxjcjgxxbEntity } from './JjwxjcjgxxbEntity'

/**
 * # 用户实体
 */
export class JjwxjcjgbEntity extends BaseEntity implements IPayload {
  @Table({
    formatter: row => row.jjwxjcb?.gysmc || '-',
  })
  @Field({
    label: '供应商名称',
  })
  jjwxjcbGysmc!: string

  @Table({
    formatter: (row) => {
      const cpxh = row.jjwxjcb.jjcpbgl?.cpxh || '-'
      const cpmc = row.jjwxjcb.jjcpbgl?.cpmc || '-'
      return ` ${cpmc} ${cpxh}`
    },
  })
  @Field({
    label: '产品型号',
  })
  jjwxjcbjJcpbglCpxh!: string

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

  @Table({
    formatter: row => row.jyy?.realName || '-',
  })
  @Field({
    label: '检验员',
  })
  jyyRealName!: string

  @Field({
    label: '检验员信息',
  })
  @Type(WxyhEntity)
  jyy!: WxyhEntity

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

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '批货数量',
  })
  phsl!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '抽查数量外观',
  })
  ccslwg!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '抽查数量尺寸',
  })
  ccslcc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '判定结果',
  })
  pdjg!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: false,
  })
  @Search()
  @Field({
    label: '备注',
  })
  bz!: string

  @Field({
    label: '机加外协检查表信息',
  })
  @Type(JjwxjcbEntity)
  jjwxjcb!: JjwxjcbEntity

  @Field({
    label: '机加产品表信息',
  })
  @Type(JjcpbglEntity)
  jjcpbgl!: JjcpbglEntity

  @Field({
    label: '机加外协检查结果详细信息',
  })
  @Type(JjwxjcjgxxbEntity, true)
  jjwxjcjgxxbEntityList: JjwxjcjgxxbEntity[] = []

  getPayloadLabel(): string {
    return this.pch
  }
}
