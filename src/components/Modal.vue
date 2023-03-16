<template>
  <teleport to="body">
    <div class="backdrop" @click="$emit('close')"></div>
    <div>
      <main>
        <Privacy v-if="topic === 'privacy'"></Privacy>
        <Conditions v-if="topic === 'conditions'"></Conditions>
        <ResponseOk v-if="topic === 'responseOK'"></ResponseOk>
        <ResponseIncomingError
          v-if="topic === 'incomingError'"
        ></ResponseIncomingError>
        <ResponseConfirmationError
          v-if="topic === 'confirmationError'"
        ></ResponseConfirmationError>
      </main>
    </div>
  </teleport>
</template>

<script>
import Privacy from "./textcomponents/Privacy.vue";
import Conditions from "./textcomponents/Conditions.vue";
import ResponseOk from "./textcomponents/ResponseOk.vue";
import ResponseIncomingError from "./textcomponents/ResponseIncomingError.vue";
import ResponseConfirmationError from "./textcomponents/ResponseConfirmationError.vue";

export default {
  components: {
    Privacy,
    Conditions,
    ResponseOk,
    ResponseIncomingError,
    ResponseConfirmationError,
  },
  emits: ["close"],
  props: {
    topic: String,
    orderId: String,
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

div {
  position: fixed;
  text-align: left;
  left: 5%;
  top: 5%;
  bottom: 5%;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  padding-right: 2rem;
}

main {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

@media (min-width: 0rem) {
  div {
    left: 4.5%;
    width: 78%;
  }
}
@media (min-width: 30rem) {
  div {
    left: 15%;
    width: 60%;
  }
}
@media (min-width: 60rem) {
  div {
    left: 20%;
    width: 60%;
  }
}
</style>
