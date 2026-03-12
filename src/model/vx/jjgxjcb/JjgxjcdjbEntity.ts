import type { IPayload } from '@airpower/web'
import { Field, Form, Table, Type } from '@airpower/web'

import { BaseEntity } from '@/base/BaseEntity'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'

/**
 * # 用户实体
 */
export class JjgxjcdjbEntity extends BaseEntity implements IPayload {
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
    formatter: row => row.jjgxxqbgl?.dj || '-',
  })
  @Field({
    label: '刀具',
  })
  jjgxxqbglDj!: string

  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Field({
    label: '实测值',
  })
  djscz!: string

  @Field({
    label: '机加工序详情表',
  })
  @Type(JjgxxqbglEntity)
  jjgxxqbgl!: JjgxxqbglEntity

  getPayloadLabel(): string {
    return this.djscz
  }
}
