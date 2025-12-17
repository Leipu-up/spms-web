<script lang="ts" setup>
import { ASelector, DialogProps } from '@airpower/web'
import { WxyhEntity } from '@/model/vx/wxyh/WxyhEntity'
import { WxyhService } from '@/model/vx/wxyh/WxyhService'
import { WxyhEditor } from '.'

const props = defineProps(DialogProps.withSelector<WxyhEntity>())
</script>

<template>
  <ASelector
    :editor="WxyhEditor"
    :entity="WxyhEntity"
    :props="props"
    :service="WxyhService"
  />
</template>

<style lang="scss" scoped></style>
