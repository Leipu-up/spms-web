<script lang="ts" setup>
import { ADialog, AFormField, AGroup, ATable, DialogProps, useDetail } from '@airpower/web'

import { computed, ref } from 'vue' // 添加 computed 导入
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'
import { JjgxjcbEntity } from '@/model/vx/jjgxjcb/JjgxjcbEntity'
import { JjgxjcbService } from '@/model/vx/jjgxjcb/JjgxjcbService'
import { JjgxjcjgbEntity } from '@/model/vx/jjgxjcb/JjgxjcjgbEntity'

const props = defineProps(DialogProps.withParam(new JjgxjcbEntity()))

const {
  title,
  formData,
  isLoading,
} = useDetail(props, JjgxjcbService, {})

// 只保存选中行的ID
const selectedRowId = ref<string | number | null>(null)

// 添加 selectedRowData 计算属性
const selectedRowData = computed(() => {
  // 这里返回空数组，或者根据实际需求返回对应数据
  return []
})

// 处理行点击事件，只保存ID
function handleRowClick(row: any) {
  selectedRowId.value = row.id
  console.log('Row clicked:', row)
  console.log('Selected Row ID:', selectedRowId.value)
  alert(`选中行ID: ${row.id}`) // 添加alert确保能看到输出
}
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

      <AGroup title="工序明细">
        <ATable
          :data-list="formData.jjgxbgl.jjgxxqbglList"
          :entity="JjgxxqbglEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>

      <AGroup title="工序明细实测值">
        <ATable
          :data-list="selectedRowData"
          :entity="JjgxjcjgbEntity"
          ctrl-width="60"
          hide-add
          hide-ctrl
        />
      </AGroup>
    </el-form>
  </ADialog>
</template>
