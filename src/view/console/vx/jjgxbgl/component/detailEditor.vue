<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import { ADialog, AInput, DialogProps, getFieldLabel } from '@airpower/web'
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
      <el-form-item
        :label="getFieldLabel(JjgxxqbglEntity, 'xh')"
        prop="xh"
      >
        <AInput
          v-model.quantity="formData.xh"
          :entity="JjgxxqbglEntity"
        />
      </el-form-item>
      <el-form-item
        :label="getFieldLabel(JjgxxqbglEntity, 'gfgc')"
        prop="gfgc"
      >
        <AInput
          v-model.quantity="formData.gfgc"
          :entity="JjgxxqbglEntity"
        />
      </el-form-item>
      <el-form-item
        :label="getFieldLabel(JjgxxqbglEntity, 'tstx')"
        prop="tstx"
      >
        <AInput
          v-model.quantity="formData.tstx"
          :entity="JjgxxqbglEntity"
        />
      </el-form-item>
      <el-form-item
        :label="getFieldLabel(JjgxxqbglEntity, 'yq')"
        prop="yq"
      >
        <AInput
          v-model.quantity="formData.yq"
          :entity="JjgxxqbglEntity"
        />
      </el-form-item>
      <el-form-item
        :label="getFieldLabel(JjgxxqbglEntity, 'pc')"
        prop="pc"
      >
        <AInput
          v-model.quantity="formData.pc"
          :entity="JjgxxqbglEntity"
        />
      </el-form-item>
    </el-form>
  </ADialog>
</template>
