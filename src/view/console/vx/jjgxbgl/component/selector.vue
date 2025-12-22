<script lang="ts" setup>
import { ASelector, DialogProps } from '@airpower/web'
import { JjgxbglEntity } from '@/model/vx/jjgxbgl/JjgxbglEntity'
import { JjgxbglService } from '@/model/vx/jjgxbgl/JjgxbglService'
import { JjgxbglEditor } from '.'

const props = defineProps(DialogProps.withSelector<JjgxbglEntity>())
</script>

<template>
  <ASelector
    :editor="JjgxbglEditor"
    :entity="JjgxbglEntity"
    :props="props"
    :service="JjgxbglService"
  />
</template>

<style lang="scss" scoped></style>
