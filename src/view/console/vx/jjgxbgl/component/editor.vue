<script lang="ts" setup>
import {
  AButton,
  ADialog,
  AFormField,
  AGroup,
  ASelect,
  ATable,
  DialogProps,
  DialogUtil,
  FeedbackUtil,
  getFormConfigList,
  getTableConfigList,
  useEditor,
} from '@airpower/web'
import { JjgxbglEntity } from '@/model/vx/jjgxbgl/JjgxbglEntity'
import { JjgxbglService } from '@/model/vx/jjgxbgl/JjgxbglService'
import { JjgxxqbglEntity } from '@/model/vx/jjgxbgl/JjgxxqbglEntity'
import { JjcpbglSelector } from '@/view/console/vx/jjcpbgl/component'
import { JjgxbglDetailEditor } from '.'

const props = defineProps(DialogProps.withParam(new JjgxbglEntity()))

const {
  title,
  formData,
  rules,
  formRef,
  isLoading,
  onSubmit,
} = useEditor(props, JjgxbglService)

async function addDetail() {
  const detail: JjgxxqbglEntity = await DialogUtil.show(JjgxbglDetailEditor)
  formData.value.details.push(detail)
}

async function deleteDetail(index: number) {
  await FeedbackUtil.confirmWarning('是否删除选中行的工序？')
  formData.value.details.splice(index, 1)
}
</script>

<template>
  <ADialog
    :form-ref="formRef"
    :loading="isLoading"
    :title="title"
    height="80%"
    width="80%"
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
      <AGroup
        :column="2"
        title="机加工序"
      >
        <AFormField
          v-for="item in getFormConfigList(JjgxbglEntity)"
          :key="item.key"
          :field="item.key"
        />
        <el-form-item
          label="关联产品"
          prop="jjcpbgl"
        >
          <ASelect
            v-model="formData.jjcpbgl"
            :selector="JjcpbglSelector"
          />
        </el-form-item>
      </AGroup>
      <AGroup title="机加工序详细">
        <ATable
          :column-list="getTableConfigList(JjgxxqbglEntity).filter((item) => !['createTime'].includes(item.key))"
          :data-list="formData.details"
          :entity="JjgxxqbglEntity"
          hide-delete
          hide-edit
        >
          <template #addButton>
            <AButton
              icon="ADD"
              @click="addDetail()"
            >
              添加工序
            </AButton>
          </template>
          <template #customRow="{ index }">
            <AButton
              danger
              link
              @click="deleteDetail(index)"
            >
              删除
            </AButton>
          </template>
        </ATable>
      </AGroup>
    </el-form>
  </ADialog>
</template>
