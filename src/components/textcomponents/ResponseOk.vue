<template>
  <ContentContainer>
    <slot>
      <h3>Vielen Dank, Deine E-Mail wurde erfolgreich versendet!</h3>
          <p>
            Deine Bestellung ist eingegangen und wir werden diese sobald als
            möglich bearbeiten. Du hast eine E-Mail mit allen notwendigen
            Informationen um den Kauf fertig abzuwickeln in deinem E-Mail
            Postfach. <p>Bitte überweise den Bestellbetrag unter Angabe der
            Bestellnummer <strong>{{ $parent.orderId }}</strong> als Verwendungszweck in
            den nächsten 3 Tagen auf das angegebene Konto. </p>
            <p>Nach Eingang
            der Zahlung auf dem Konto wird das Buch umgehend an dich versandt.
          </p>
          </p>
          <p>
            Für etwaige Rückfragen kontaktiere mich bitte direkt unter
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
  name: "ResponseOk",
  
};
</script>

<style scoped>

</style>
