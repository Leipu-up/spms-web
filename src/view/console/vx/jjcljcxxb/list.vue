<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjcljcjgbService } from '@/model/vx/jjcljcjgb/JjcljcjgbService'
import { JjcljcxxbDetail } from './component'

const hook = useMyTable(JjcljcjgbService, {
  detailView: JjcljcxxbDetail,
})
</script>

<template>
  <APanel>
    <ATable
      :use-hook="hook"
      ctrl-width="150"
      hide-add
      hide-edit
      show-detail
    />
  </APanel>
</template>

<style lang="scss" scoped></style>
