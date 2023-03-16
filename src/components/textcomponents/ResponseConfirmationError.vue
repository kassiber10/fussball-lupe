<template>
  <ContentContainer>
    <slot>
      <h3 class="error">
        Deine Bestellbestätigung konnte nicht an deine E-Mail versendet werden.
      </h3>
      <p>
        Möglicherweise war die Verbindung zu deinem Mailserver kurzfristig
        unterbrochen. Bitte versuche es nach kurzer Zeit noch einmal. Falls der
        Fehler weiterhin auftritt, kontaktiere mich bitte direkt unter
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
  name: "ResponseConfirmationError",
};
</script>

<style scoped>
.error {
  background-color: white;
  color: red;
  border-radius: 3px;
}
</style>
