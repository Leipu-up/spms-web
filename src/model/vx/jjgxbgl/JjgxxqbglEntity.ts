import type { IPayload } from '@airpower/web'
import { Field, Form, Table } from '@airpower/web'
import { BaseEntity } from '@/base/BaseEntity'

import { PcTypeEnum } from './PcTypeEnum'
import { TstxTypeEnum } from './TstxTypeEnum'

/**
 * # 用户实体
 */
export class JjgxxqbglEntity extends BaseEntity implements IPayload {
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
    label: '规范/公差',
  })
  gfgc!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '特殊特性',
    dictionary: TstxTypeEnum,
  })
  tstx!: string

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
    label: '频次',
    dictionary: PcTypeEnum,
  })
  pc!: string

  getPayloadLabel(): string {
    return this.xh
  }
}
