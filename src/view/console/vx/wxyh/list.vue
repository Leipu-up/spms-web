<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { WxyhService } from '@/model/vx/wxyh/WxyhService'
import { WxyhEditor } from './component'

const hook = useMyTable(WxyhService, {
  editView: WxyhEditor,
})
</script>

<template>
  <APanel>
    <ATable
      :use-hook="hook"
      ctrl-width="150"
      show-enable-and-disable
      show-export
    />
  </APanel>
</template>

<style lang="scss" scoped></style>
