<template>
  <div>
    <Swiper />
    <div class="container">
      <h4>
        Wie kann man das Fußballspiel besser lesen? Was steckt hinter den
        Begriffen key performance indicator, Pressingindex, xG oder PPDA? Welche
        Werkzeuge gibt es für Trainer, um eine computerunterstützte Videoanalyse
        durchführen zu können? Wie gelingt es Trainingsformen aus der
        Spielanalyse abzuleiten? Das sind nur einige interessante Fragen, die
        die beiden Autoren in diesem Buch beantworten.
      </h4>
      <h2>Bestellformular</h2>
      <h5>
        Das Buch ist innerhalb Österreichs (€ 40,- inkl. MwSt. und Versand) und
        in Deutschland und der Schweiz (€ 46,- inkl. MwSt. und Versand) gegen
        Vorkasse erhältlich. Die Bezahlmodalitäten erhältst du nach erfolgter
        Bestellung an die angegebene E-Mail Adresse.
      </h5>
      <form>
        <div class="row">
          <div class="col-left">
            <label for="firstname">Vorname</label>
          </div>
          <div class="col-right">
            <input
              type="text"
              name="firstname"
              v-model.trim="orderData.firstname"
            />
            <p v-if="!orderData.firstname && validate" class="form-error">
              Geben Sie einen Vornamen an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="lastname">Nachname</label>
          </div>
          <div class="col-right">
            <input
              type="text"
              name="lastname"
              v-model.trim="orderData.lastname"
            />
            <p v-if="!orderData.lastname && validate" class="form-error">
              Geben Sie einen Nachnamen an
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-left">
            <label for="street">Strasse</label>
          </div>
          <div class="col-right">
            <input type="text" name="street" v-model.trim="orderData.street" />
            <p v-if="!orderData.street && validate" class="form-error">
              Geben Sie eine Strasse an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="street-nr">Nummer</label>
          </div>
          <div class="col-right">
            <input
              type="text"
              name="street-nr"
              min="1"
              max="4"
              v-model.trim="orderData.streetNr"
            />
            <p v-if="!orderData.streetNr && validate" class="form-error">
              Geben Sie eine Hausnummer an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="postcode">Postleitzahl</label>
          </div>
          <div class="col-right">
            <input
              type="number"
              name="postcode"
              min="1"
              max="6"
              v-model.number="orderData.postcode"
            />
            <p v-if="!orderData.postcode && validate" class="form-error">
              Geben Sie eine Postleitzahl an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="location">Ort</label>
          </div>
          <div class="col-right">
            <input
              type="text"
              name="location"
              v-model.trim="orderData.location"
            />
            <p v-if="!orderData.location && validate" class="form-error">
              Geben Sie einen Ort an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="country">Land</label>
          </div>
          <div class="col-right">
            <select name="country" v-model="orderData.country">
              <option value="">Bitte wähle ein Land aus</option>
              <option value="Österreich">Österreich</option>
              <option value="Deutschland">Deutschland</option>
              <option value="Schweiz">Schweiz</option>
            </select>
            <p v-if="!orderData.country && validate" class="form-error">
              Geben Sie ein Land an
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-left">
            <label for="email">E-Mail Adresse</label>
          </div>
          <div class="col-right">
            <input
              type="email"
              name="email"
              id="email"
              v-model.trim="orderData.email"
              required="required"
            />
            <p v-if="!validEmail && validate" class="form-error">
              Geben Sie einen E-Mail Adresse an
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="amount">Menge</label>
          </div>
          <div class="col-right">
            <input
              type="number"
              name="amount"
              v-model.number="orderData.amount"
              min="1"
            />
            <p v-if="!orderData.amount && validate" class="form-error">
              Geben Sie eine Menge an (mind. 1 Stück)
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-left">
            <label for="privacy"
              >Datenschutz
              <span @click="toggleModal('privacy')">mehr lesen</span></label
            >
          </div>
          <div class="col-right">
            <input
              type="checkbox"
              name="privacy"
              v-model.trim="orderData.privacy"
            />
            <p v-if="orderData.privacy == false && validate" class="form-error">
              Bitte akzeptieren Sie die Datenschutzbestimmungen
            </p>
          </div>
          <div class="col-left">
            <label for="conditions"
              >AGBs<span @click="toggleModal('conditions')"
                >mehr lesen</span
              ></label
            >
          </div>
          <div class="col-right">
            <input
              type="checkbox"
              name="conditions"
              v-model.trim="orderData.conditions"
            />
            <p
              v-if="orderData.conditions == false && validate"
              class="form-error"
            >
              Bitte akzeptieren Sie die AGBs
            </p>
          </div>
        </div>
        <div class="total-price">
          <strong>Bestellsumme: € {{ computePriceTotal }},-</strong> (inkl.
          MWSt)
        </div>
      </form>
      <button @click="validateForm">
        <p v-if="this.loading"><Loading /></p>
        <p v-else>Buch verbindlich bestellen</p>
      </button>
      <div class="imprint">
        <strong>Impressum: </strong><br />Roland Leser (Einzelunternehmer);
        Weingartengasse 3, A - 7301 Deutschkreutz<br />
        E-Mail:
        <a href="mailto:rolandleser@rolandleser.com"
          >rolandleser[at]rolandleser.com</a
        ><br />
        GLN: 9110010525200; GISA: 28301899; BH-Oberpullendorf; UID-Nr:
        ATU56473925
      </div>
    </div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      :topic="topic"
      :orderId="orderId"
    ></Modal>
  </div>
</template>

<script>
import Swiper from "./components/Swiper.vue";
import Modal from "./components/Modal.vue";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const API = import.meta.env.VITE_API;

export default {
  components: {
    Swiper,
    Modal,
  },
  props: {
    close: Boolean,
  },

  data() {
    return {
      orderData: {
        firstname: "",
        lastname: "",
        email: "",
        street: "",
        streetNr: "",
        postcode: "",
        location: "",
        country: "",
        amount: "",
        privacy: "",
        conditions: "",
      },
      validate: false,
      showModal: false,
      topic: "",
      orderId: "",
      validEmail: false,
      loading: false,
      priceTotal: 0,
    };
  },
  computed: {
    computePriceTotal() {
      if (
        this.orderData.country === "Deutschland" ||
        this.orderData.country === "Schweiz"
      ) {
        return (this.priceTotal = 46 * this.orderData.amount);
      } else if (this.orderData.country === "") {
        return (this.priceTotal = 0);
      } else {
        return (this.priceTotal = 40 * this.orderData.amount);
      }
    },
  },
  methods: {
    validateForm() {
      this.validate = true;
      if (
        !Object.values(this.orderData).every(
          (data) => data !== "" && data !== 0
        ) ||
        !this.validEmail
      ) {
        return;
      } else {
        this.orderId = this.orderData.lastname + uuidv4().slice(0, 5);
        this.sendEmail();
      }
    },

    async sendEmail() {
      this.loading = true;
      const response = await Promise.all([
        axios.post(API, {
          to: [`${"rolandleser@rolandleser.com"}`], // [`${this.orderData.email}`]
          subject: `Bestellformular (Nr.: ${this.orderId})`,
          text: `
            Vorname:       ${this.orderData.firstname}
            Nachnname:     ${this.orderData.lastname}
            E-Mail:        ${this.orderData.email}
            Strasse:       ${this.orderData.street}
            Hausnummer:    ${this.orderData.streetNr}
            Postleitzahl:  ${this.orderData.postcode}
            Ort:           ${this.orderData.location}
            Land:          ${this.orderData.country}

            -------------------------------------

            Menge:         ${this.orderData.amount} Stück
            Bestellnummer: ${this.orderId}
            Gesamtpreis:   ${this.priceTotal}
            Datenschutz:   ${this.orderData.privacy}
            AGBs:          ${this.orderData.privacy}
          `,
        }),
        axios.post(API, {
          to: [`${this.orderData.email}`],
          subject: `Bestellnummer (Nr.: ${this.orderId})`,
          text: `
          Liebe/r Fußballbegeisterte/r!

          Vielen Dank für Dein Interesse an unserem Buch „Das Fußballspiel unter der Lupe“!

          Deine Bestellnummer lautet: ${this.orderId}. Bitte gib die Bestellnummer als Verwendungszweck bei der Überweisung an!
          
          Um deine Bestellung abzuschließen, überweise bitte als Vorkasse € ${this.priceTotal},- auf folgendes Konto:
          _________________________________
          Roland Leser
          IBAN: AT15 3301 0000 0000 8052
          BIC: RLBBAT2E010
          _________________________________
          Du erhältst das Buch per Post innerhalb von 10 Tagen nach Eingang deiner Einzahlung.

          Viel Spaß mit dem Buch wünschen Dir
          Manfred und Roland
          `,
        }),
      ]);
      this.loading = false;
      this.getResponseText(response);
    },

    toggleModal(topic) {
      this.showModal = true;
      this.topic = topic;
    },

    getResponseText(resp) {
      if (resp[0].status !== 200) {
        this.topic = "incomingError";
      } else if (resp[1].status !== 200) {
        this.topic = "confirmationError";
      } else {
        this.topic = "responseOK";
      }
      this.showModal = true;
    },
  },

  watch: {
    "orderData.email": function (newVal, oldVal) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newVal)) {
        this.validEmail = true;
      } else {
        this.validEmail = false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
}
form {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: rgb(175, 218, 141);
  border-radius: 6px;
}
label {
  text-align: left;
}
input,
select {
  box-sizing: border-box;
  background-color: rgba(0, 82, 31, 0.87);
  border: 0;
  border-radius: 3px;
  height: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

h2 {
  text-align: left;
}
h4 {
  color: #333;
  text-align: left;
}

h5 {
  text-align: left;
  color: #333;
  margin-top: 0;
}
span {
  display: block;
  font-size: 0.7rem;
  text-decoration: underline;
  cursor: pointer;
}
.total-price {
  background-color: white;
  border-radius: 4px;
  margin-top: 2rem;
  padding: 0.5rem;
}
.col-left {
  display: flex;
  width: 25%;
}
.col-right {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.row {
  display: flex;
}

.form-error {
  background-color: white;
  color: red;
  border-radius: 3px;
}

.imprint {
  background-color: rgba(175, 218, 141, 0.35);
  margin-top: 2.5rem;
  font-size: 0.75rem;
  border-radius: 6px;
  padding: 0.5rem;
  text-align: left;
}

@media screen and (max-width: 600px) {
  input {
    margin-bottom: 0.5rem;
  }
  .row {
    flex-direction: column;
  }
  .col-left {
    width: 100%;
  }
  .col-right {
    width: 100%;
  }
}
</style>
