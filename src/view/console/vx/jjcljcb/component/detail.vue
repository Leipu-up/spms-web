<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ASelect, ATable, DialogProps, useDetail } from '@airpower/web'
import { JjcljcbService } from '@/model/vx/jjcljcb/JjcljcbService'

import { JjcljcxxbEntity } from '@/model/vx/jjcljcb/JjcljcxxbEntity'
import { JjgxbglEntity } from '@/model/vx/jjgxbgl/JjgxbglEntity'

import { JjcpbglSelector } from '@/view/console/vx/jjcpbgl/component'

const props = defineProps(DialogProps.withParam(new JjgxbglEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjcljcbService, {})
</script>

<template>
  <ADialog
    :loading="isLoading"
    :title="title"
    height="80%"
    width="80%"
    @cancel="onCancel"
    @confirm="onConfirm"
  >
    <el-form
      :model="formData"
      label-width="120px"
      @submit.prevent
    >
      <AGroup
        :column="3"
        title="外协检查报告"
      >
        <AFormField
          disabled
          field="gysmc"
        />

        <el-form-item
          label="关联产品"
          prop="jjcpbgl"
        >
          <ASelect
            v-model="formData.jjcpbgl"
            :selector="JjcpbglSelector"
            disabled
          />
        </el-form-item>
      </AGroup>
      <AGroup title="材料检查报告明细">
        <ATable
          :data-list="formData.details"
          :entity="JjcljcxxbEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
