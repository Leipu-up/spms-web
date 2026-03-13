<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ATable, DialogProps, useDetail } from '@airpower/web'

import { JjcljcjgbEntity } from '@/model/vx/jjcljcjgb/JjcljcjgbEntity'
import { JjcljcjgbService } from '@/model/vx/jjcljcjgb/JjcljcjgbService'
import { JjcljcjgxxbEntity } from '@/model/vx/jjcljcjgb/JjcljcjgxxbEntity'

const props = defineProps(DialogProps.withParam(new JjcljcjgbEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjcljcjgbService, {})
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
          field="jjcljcbGysmc"
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
            :value="`${formData.jjcljcb.jjcpbgl?.cpmc || '-'} ${formData.jjcljcb.jjcpbgl?.cpxh || '-'}`"
            disabled
          />
        </el-form-item>
        <el-form-item label="版本号">
          <el-input
            :value="formData.jjcljcb.jjcpbgl?.cpbb || '-'"
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
          :data-list="formData.jjcljcjgxxbEntityList"
          :entity="JjcljcjgxxbEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
