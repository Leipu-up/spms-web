<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ASelect, ATable, DialogProps, useDetail } from '@airpower/web'
import { JjgxbglEntity } from '@/model/vx/jjgxbgl/JjgxbglEntity'

import { JjgxbglService } from '@/model/vx/jjgxbgl/JjgxbglService'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'

import { JjcpbglSelector } from '@/view/console/vx/jjcpbgl/component'

const props = defineProps(DialogProps.withParam(new JjgxbglEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjgxbglService, {})
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
        title="机加工序"
      >
        <AFormField
          disabled
          field="gxmc"
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
      <AGroup title="工序明细">
        <ATable
          :data-list="formData.details"
          :entity="JjgxxqbglEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
