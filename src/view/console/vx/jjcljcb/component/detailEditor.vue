<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ADialog, AFormField, DialogProps } from '@airpower/web'
import { ref } from 'vue'
import { JjcljcxxbEntity } from '@/model/vx/jjcljcb/JjcljcxxbEntity'
import { JjcljcxxbService } from '@/model/vx/jjcljcb/JjcljcxxbService'

const props = defineProps(DialogProps.withParam(new JjcljcxxbEntity()))

const formData = ref(props.param.copy())

const isLoading = ref(false)

const formRef = ref<FormInstance>()

async function onSubmit() {
  props.onConfirm(formData.value)
}
</script>

<template>
  <ADialog
    :form-ref="formRef"
    :loading="isLoading"
    title="外协检查报告明细"
    width="600px"
    @cancel="onCancel"
    @confirm="onSubmit"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="JjcljcxxbService.createValidator()"
      label-width="120px"
      @submit.prevent
    >
      <AFormField
        v-model="formData"
        :entity="JjcljcxxbEntity"
        field="xh"
      />
      <AFormField
        v-model="formData"
        :entity="JjcljcxxbEntity"
        field="jcxm"
      />
      <AFormField
        v-model="formData"
        :entity="JjcljcxxbEntity"
        field="gfgc"
      />
      <AFormField
        v-model="formData"
        :entity="JjcljcxxbEntity"
        field="yq"
      />
      <AFormField
        v-model="formData"
        :entity="JjcljcxxbEntity"
        field="ypsl"
      />
    </el-form>
  </ADialog>
</template>
