<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, PropType, reactive } from "vue";
  import { emitter } from "./ValidateForm.vue";

  interface RuleProp {
    type: "required" | "email";
    message: string;
  }

  export type RulesProp = RuleProp[];

  defineOptions({
    name: "validateInput",
    inheritAttrs: false,
  });

  const props = defineProps({
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  });
  const emit = defineEmits();

  const emailReg =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const inputRef = reactive({
    val: props.modelValue || "",
    error: false,
    message: "",
  });

  const validateInput = () => {
    if (props.rules) {
      const allPassed = props.rules.every((rule) => {
        let passed = true;
        inputRef.message = rule.message;
        switch (rule.type) {
          case "required":
            passed = inputRef.val.trim() !== "";
            break;
          case "email":
            passed = emailReg.test(inputRef.val);
            break;
          default:
            break;
        }
        return passed;
      });
      inputRef.error = !allPassed;
      return allPassed;
    } else {
      return true;
    }
  };
  const updateValue = (e: Event) => {
    if (e as KeyboardEvent) {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      emit("update:modelValue", targetValue);
    }
  };

  // 将事件发射出去，其实就是把验证函数发射出去
  onMounted(() => {
    emitter.emit("form-item-created", validateInput);
  });
</script>
