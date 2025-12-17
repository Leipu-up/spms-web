<script lang="ts" setup>
import { ADialog, AFormField, DialogProps, getFormConfigList, useEditor } from '@airpower/web'
import { WxyhEntity } from '@/model/vx/wxyh/WxyhEntity'
import { WxyhService } from '@/model/vx/wxyh/WxyhService'

const props = defineProps(DialogProps.withParam(new WxyhEntity()))

const {
  title,
  formData,
  rules,
  formRef,
  isLoading,
  onSubmit,
} = useEditor(props, WxyhService)
</script>

<template>
  <ADialog
    :form-ref="formRef"
    :loading="isLoading"
    :title="title"
    @cancel="onCancel"
    @confirm="onSubmit"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
      @submit.prevent
    >
      <AFormField
        v-for="item in getFormConfigList(WxyhEntity)"
        :key="item.key"
        :field="item.key"
      />
    </el-form>
  </ADialog>
</template>
