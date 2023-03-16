<template>
  <ContentContainer>
    <slot>
      <h3 class="error">
        Deine Daten konnten nicht an bestellung[at]rolandleser.com gesendet
        werden.
      </h3>
      <p>
        Bitte kontaktiere mich direkt unter
        <a href="mailto: bestellung@rolandleser.com"
          >bestellung[at]rolandleser.com</a
        >
      </p>
    </slot>
  </ContentContainer>
</template>

<script>
import ContentContainer from "../ContentContainer.vue";
export default {
  components: { ContentContainer },
  name: "ResponseIncomingError",
};
</script>

<style scoped>
.error {
  background-color: white;
  color: red;
  border-radius: 3px;
}
</style>
