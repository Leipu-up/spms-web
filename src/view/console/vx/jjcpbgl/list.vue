<script lang="ts" setup>
import { APanel, ATable } from '@airpower/web'
import { useMyTable } from '@/hook/useMyTable'
import { JjcpbglService } from '@/model/vx/jjcpbgl/JjcpbglService'
import { JjcpbglEditor } from './component'

const hook = useMyTable(JjcpbglService, {
  editView: JjcpbglEditor,
})
</script>

<template>
  <APanel>
    <ATable
      :use-hook="hook"
      ctrl-width="150"
    />
  </APanel>
</template>

<style lang="scss" scoped></style>
