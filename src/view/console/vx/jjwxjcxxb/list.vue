<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjwxjcjgbService } from '@/model/vx/jjwxjcjgb/JjwxjcjgbService'
import { JjwxjcxxbDetail } from './component'

const hook = useMyTable(JjwxjcjgbService, {
  detailView: JjwxjcxxbDetail,
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
