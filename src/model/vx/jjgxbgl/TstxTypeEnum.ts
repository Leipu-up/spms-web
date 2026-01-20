import { WebColor, WebEnum } from '@airpower/web'

export class TstxTypeEnum extends WebEnum<string> {
  static readonly OTHER = new TstxTypeEnum('重要', '重要')
    .setColor(WebColor.DANGER)

  static readonly SALE = new TstxTypeEnum('关键', '关键')
    .setColor(WebColor.SUCCESS)

  static readonly PURCHASE = new TstxTypeEnum('SPC', 'SPC')
    .setColor(WebColor.WARNING)

  static readonly LABOR = new TstxTypeEnum('无', '无')
    .setColor(WebColor.NORMAL)
}
