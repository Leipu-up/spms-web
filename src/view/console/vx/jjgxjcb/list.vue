<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjgxjcbService } from '@/model/vx/jjgxjcb/JjgxjcbService'
import { JjgxjcbDetail } from './component'

const hook = useMyTable(JjgxjcbService, {
  detailView: JjgxjcbDetail,
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
