<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ATable, DialogProps, useDetail } from '@airpower/web'

import { JjwxjcjgbEntity } from '@/model/vx/jjwxjcjgb/JjwxjcjgbEntity'
import { JjwxjcjgbService } from '@/model/vx/jjwxjcjgb/JjwxjcjgbService'
import { JjwxjcjgxxbEntity } from '@/model/vx/jjwxjcjgb/JjwxjcjgxxbEntity'

const props = defineProps(DialogProps.withParam(new JjwxjcjgbEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjwxjcjgbService, {})
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
          field="jjwxjcbGysmc"
        />
        <AFormField
          disabled
          field="phsl"
        />
        <AFormField
          disabled
          field="ccslwg"
        />
        <AFormField
          disabled
          field="ccslcc"
        />
        <el-form-item label="产品型号">
          <el-input
            :value="`${formData.jjwxjcb.jjcpbgl?.cpmc || '-'} ${formData.jjwxjcb.jjcpbgl?.cpxh || '-'}`"
            disabled
          />
        </el-form-item>
        <el-form-item label="版本号">
          <el-input
            :value="formData.jjwxjcb.jjcpbgl?.cpbb || '-'"
            disabled
          />
        </el-form-item>
        <AFormField
          disabled
          field="pch"
        />
        <AFormField
          disabled
          field="rq"
        />
        <AFormField
          disabled
          field="pdjg"
        />
        <AFormField
          disabled
          field="bz"
        />
        <el-form-item label="检验员">
          <el-input
            :value="formData.jyy?.realName || '-'"
            disabled
          />
        </el-form-item>
      </AGroup>

      <AGroup title="外协检查结果-实测值">
        <ATable
          :data-list="formData.jjwxjcjgxxbEntityList"
          :entity="JjwxjcjgxxbEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
