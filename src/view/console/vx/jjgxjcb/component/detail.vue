<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ATable, DialogProps, useDetail } from '@airpower/web'

import { JjgxjcbEntity } from '@/model/vx/jjgxjcb/JjgxjcbEntity'
import { JjgxjcbService } from '@/model/vx/jjgxjcb/JjgxjcbService'
import { JjgxjcjgbEntity } from '@/model/vx/jjgxjcb/JjgxjcjgbEntity'

const props = defineProps(DialogProps.withParam(new JjgxjcbEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjgxjcbService, {})
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
        title="机加工序检查表"
      >
        <AFormField
          disabled
          field="jjgxbglGxmc"
        />
        <el-form-item label="产品型号">
          <el-input
            :value="`${formData.jjgxbgl.jjcpbgl?.cpmc || '-'} ${formData.jjgxbgl.jjcpbgl?.cpxh || '-'}`"
            disabled
          />
        </el-form-item>
        <el-form-item label="版本号">
          <el-input
            :value="formData.jjgxbgl.jjcpbgl?.cpbb || '-'"
            disabled
          />
        </el-form-item>
        <AFormField
          disabled
          field="pch"
        />
        <AFormField
          disabled
          field="sbh"
        />
        <AFormField
          disabled
          field="rq"
        />
        <el-form-item label="检验员">
          <el-input
            :value="formData.jyy?.realName || '-'"
            disabled
          />
        </el-form-item>
        <el-form-item label="确认者">
          <el-input
            :value="formData.qrz?.realName || '-'"
            disabled
          />
        </el-form-item>
      </AGroup>

      <AGroup title="工序明细-实测值">
        <ATable
          :data-list="formData.jjgxjcjgbEntityList"
          :entity="JjgxjcjgbEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
