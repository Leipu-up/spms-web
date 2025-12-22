<script lang="ts" setup>
import { ADialog, AFormField, DialogProps, getFormConfigList, useEditor } from '@airpower/web'
import { JjcpbglEntity } from '@/model/vx/jjcpbgl/JjcpbglEntity'
import { JjcpbglService } from '@/model/vx/jjcpbgl/JjcpbglService'

const props = defineProps(DialogProps.withParam(new JjcpbglEntity()))

const {
  title,
  formData,
  rules,
  formRef,
  isLoading,
  onSubmit,
} = useEditor(props, JjcpbglService)
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
        v-for="item in getFormConfigList(JjcpbglEntity)"
        :key="item.key"
        :field="item.key"
      />
    </el-form>
  </ADialog>
</template>
