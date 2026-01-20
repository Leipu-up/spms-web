<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ADialog, AFormField, DialogProps } from '@airpower/web'
import { ref } from 'vue'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'
import { JjgxxqbglService } from '@/model/vx/jjgxbgl/JjgxxqbglService'

const props = defineProps(DialogProps.withParam(new JjgxxqbglEntity()))

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
    title="工序明细"
    width="600px"
    @cancel="onCancel"
    @confirm="onSubmit"
  >
    <el-form
      ref="formRef"
      :model="formData"
      :rules="JjgxxqbglService.createValidator()"
      label-width="120px"
      @submit.prevent
    >
      <AFormField
        v-model="formData"
        :entity="JjgxxqbglEntity"
        field="xh"
      />
      <AFormField
        v-model="formData"
        :entity="JjgxxqbglEntity"
        field="gfgc"
      />
      <AFormField
        v-model="formData"
        :entity="JjgxxqbglEntity"
        field="tstx"
      />
      <AFormField
        v-model="formData"
        :entity="JjgxxqbglEntity"
        field="yq"
      />
      <AFormField
        v-model="formData"
        :entity="JjgxxqbglEntity"
        field="pc"
      />
    </el-form>
  </ADialog>
</template>
