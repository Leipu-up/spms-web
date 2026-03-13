<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjcljcbService } from '@/model/vx/jjcljcb/JjcljcbService'
import { JjcljcbDetail, JjcljcbEditor } from './component'

const hook = useMyTable(JjcljcbService, {
  editView: JjcljcbEditor,
  detailView: JjcljcbDetail,
})
</script>

<template>
  <APanel>
    <ATable
      :use-hook="hook"
      ctrl-width="150"
      show-detail
    />
  </APanel>
</template>

<style lang="scss" scoped></style>
