import type { IPayload, IUser } from '@airpower/web'
import { DesensitizeType, Field, Form, Search, Table } from '@airpower/web'
import { BaseEntity } from '@/base/BaseEntity'
import { UserGenderEnum } from '@/model/personnel/user/UserGenderEnum'

/**
 * # 用户实体
 */
export class WxyhEntity extends BaseEntity implements IUser, IPayload {
  @Form({
    requiredString: true,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '工号',
  })
  employeeNo!: string

  @Form({
    requiredString: false,
  })
  @Table({
    force: true,
  })
  @Search()
  @Field({
    label: '微信名',
  })
  nickname!: string

  @Form({
    mobilePhone: true,
    requiredString: true,
    defaultValue: '13888888888',
  })
  @Table({
    force: true,
    phone: true,
    copy: true,
    desensitize: DesensitizeType.MOBILE,
  })
  @Search()
  @Field({
    label: '手机',
  })
  phone!: string

  @Form({
    requiredString: true,
  })
  @Table({
    copy: true,
    force: true,
  })
  @Search()
  @Field({
    label: '姓名',
  })
  realName!: string

  @Form({
    requiredString: true,
  })
  @Table({
    hide: false,
    copy: true,
  })
  @Field({
    label: '身份证号',
  })
  idCard!: string

  @Field({
    label: '头像',
  })
  avatar!: string

  @Field({
    label: '性别',
    dictionary: UserGenderEnum,
  })
  @Form({
    defaultValue: UserGenderEnum.FEMALE.key,
    clearable: false,
    radio: true,
  })
  gender!: number

  @Table({
    removed: false,
  })
  @Search({
    hide: false,
  })
  declare isDisabled: boolean

  getPayloadLabel(): string {
    return this.nickname
  }
}
