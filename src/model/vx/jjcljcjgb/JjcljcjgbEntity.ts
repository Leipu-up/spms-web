import type { IPayload } from '@airpower/web'
import { Field, Form, Search, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjcljcbEntity } from '@/model/vx/jjcljcb/JjcljcbEntity'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { WxyhEntity } from '@/model/vx/wxyh/WxyhEntity'
import { JjcljcjgxxbEntity } from './JjcljcjgxxbEntity'

/**
 * # 用户实体
 */
export class JjcljcjgbEntity extends BaseEntity implements IPayload {
  @Table({
    formatter: row => row.jjcljcb?.gysmc || '-',
  })
  @Field({
    label: '供应商名称',
  })
  jjcljcbGysmc!: string

  @Table({
    formatter: (row) => {
      const cpxh = row.jjcljcb.jjcpbgl?.cpxh || '-'
      const cpmc = row.jjcljcb.jjcpbgl?.cpmc || '-'
      return ` ${cpmc} ${cpxh}`
    },
  })
  @Field({
    label: '产品型号',
  })
  jjcljcbjJcpbglCpxh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '批货号',
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
    label: '炉号',
  })
  lh!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '受入日',
  })
  srr!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '检查日',
  })
  jcr!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
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
  @Field({
    label: '备注',
  })
  bz!: string

  @Field({
    label: '机加外协检查表信息',
  })
  @Type(JjcljcbEntity)
  jjcljcb!: JjcljcbEntity

  @Field({
    label: '机加产品表信息',
  })
  @Type(JjcpbglEntity)
  jjcpbgl!: JjcpbglEntity

  @Field({
    label: '机加外协检查结果详细信息',
  })
  @Type(JjcljcjgxxbEntity, true)
  jjcljcjgxxbEntityList: JjcljcjgxxbEntity[] = []

  getPayloadLabel(): string {
    return this.pch
  }
}
