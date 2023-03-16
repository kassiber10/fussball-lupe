<template>
  <div>
    <span @click="$parent.$parent.$emit('close')">&#xd7;</span>
    <slot> </slot>
    <button @click="$parent.$parent.$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  emits: [" close"],
  name: "ContentContainer",
};
</script>

<style scoped>
div {
  overflow-y: auto;
  padding: 2rem 6rem 2rem 2rem;
}

span {
  cursor: pointer;
  margin-right: 1rem;
  font-size: 2rem;
}
</style>
