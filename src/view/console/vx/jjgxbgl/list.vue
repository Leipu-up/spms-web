<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjgxbglService } from '@/model/vx/jjgxbgl/JjgxbglService'
import { JjgxbglDetail, JjgxbglEditor } from './component'

const hook = useMyTable(JjgxbglService, {
  editView: JjgxbglEditor,
  detailView: JjgxbglDetail,
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
