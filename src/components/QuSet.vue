<script setup>
import { ref } from "vue";
import { Settings } from "@vicons/carbon";
import { state } from "../store";

const showModal = ref(false);
const input = ref("");
const save = async () => {
  showModal.value = false;
  if (input.value.trim() !== "") {
    localStorage.setItem("token", btoa(input.value));
  }
  input.value = "";
};
</script>

<template>
  <n-button
    #icon
    style="position: fixed; right: 40px; bottom: 40px"
    @click="showModal = true"
  >
    <n-icon> <Settings /> </n-icon>
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="token设置"
    positive-text="确认"
    negative-text="取消"
    @positive-click="save"
    style="width: 600px"
  >
    提交题目需要 github 的 token
    <n-input v-model:value="input" type="text" placeholder="请输入" />
  </n-modal>
</template>

<style scoped></style>
