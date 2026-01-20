import { WebColor, WebEnum } from '@airpower/web'

export class PcTypeEnum extends WebEnum<string> {
  static readonly ONE = new PcTypeEnum('1pcs/1h', '1pcs/1h')
    .setColor(WebColor.NORMAL)

  static readonly TWO = new PcTypeEnum('1pcs/2h', '1pcs/2h')
    .setColor(WebColor.NORMAL)

  static readonly THREE = new PcTypeEnum('1pcs/4h', '1pcs/4h')
    .setColor(WebColor.NORMAL)

  static readonly FOUR = new PcTypeEnum('1pcs/6h', '1pcs/6h')
    .setColor(WebColor.NORMAL)

  static readonly FIVE = new PcTypeEnum('1pcs/每班', '1pcs/每班')
    .setColor(WebColor.NORMAL)

  static readonly SIX = new PcTypeEnum('剖件/2h', '剖件/2h')
    .setColor(WebColor.NORMAL)

  static readonly SEVEN = new PcTypeEnum('剖件/4h', '剖件/4h')
    .setColor(WebColor.NORMAL)

  static readonly EIGHT = new PcTypeEnum('剖件/6h', '剖件/6h')
    .setColor(WebColor.NORMAL)

  static readonly NINE = new PcTypeEnum('剖件/每班', '剖件/每班')
    .setColor(WebColor.NORMAL)

  static readonly TEN = new PcTypeEnum('换刀/调试', '换刀/调试')
    .setColor(WebColor.NORMAL)
}
