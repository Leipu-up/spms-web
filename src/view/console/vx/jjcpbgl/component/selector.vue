<script lang="ts" setup>
import { ASelector, DialogProps } from '@airpower/web'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { JjcpbglService } from '@/model/vx/jjcpbgl/JjcpbglService'
import { JjcpbglEditor } from '.'

const props = defineProps(DialogProps.withSelector<JjcpbglEntity>())
</script>

<template>
  <ASelector
    :editor="JjcpbglEditor"
    :entity="JjcpbglEntity"
    :props="props"
    :service="JjcpbglService"
  />
</template>

<style lang="scss" scoped></style>
