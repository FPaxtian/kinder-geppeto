<template>
  <div>
    <Slide title="Descarga de documentos" color="2"></Slide>
    <div class="container-ofrecemos aling-center">
      <div class="title-sanitazion">
        Inserte la clave para descargar los documentos
      </div>

      <div class="input">
        <input id="txt-clave" type="text" class="validate" v-model="message" />
        <label>Clave</label>
      </div>

      <a to="/" v-on:click="viewDocuments()" class="a-btn">Presione aqui</a>
      <div class="documents" v-if="document == true">
        <div class="p-sanitazion margin-button-3rem margin-top-3rem">
          Ficha de entrevista
        </div>
        <a
          class="a-btn"
          href="../assets/documents/ficha de entrevista.docx"
          download="ficha de entrevista.docx"
          >Descargar</a
        >
        <div class="p-sanitazion margin-button-3rem margin-top-3rem">
          Ficha de identificacion
        </div>
        <a
          class="a-btn"
          href="../assets/documents/FICHA DE IDENTIFICACION.docx"
          download="FICHA DE IDENTIFICACION.docx"
          >Descargar</a
        >

        <div class="p-sanitazion margin-button-3rem margin-top-3rem">
          Modelo de uniforme de niñas
        </div>
        <a
          class="a-btn"
          href="../assets/documents/Modelo de uniforme de niñas.docx"
          download="Modelo de uniforme de niñas.docx"
          >Descargar</a
        >
        <div class="p-sanitazion margin-button-3rem margin-top-3rem">
          Modelo de uniforme de niños
        </div>
        <a
          class="a-btn"
          href="../assets/documents/Modelo de uniforme de niños.docx"
          download="Modelo de uniforme de niños.docx"
          >Descargar</a
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import M from "materialize-css";
import Slide from "./Slide";
import swal from "sweetalert";
import Footer from "./Footer";
export default {
  name: "Inscripciones",
  components: {
    Slide,
    Footer,
  },
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      document: false,
      passwords: [
        "gepettojardin",
        "kinderGepetto.com",
        "Geppetto1993",
        "1993geppetto",
        "2020geppetto",
        "G2p02p0etto",
        "gp1999",
        "KD119",
        "jardinPrivado2020",
        "jardinPrivadoGepetto",
        "1993gpki",
        "bienvenidoAgepetto",
        "19932020gp",
        "privadoGp",
        "k1nd3rGepetto",
        "g3ppt0",
        "inscribeteGepetto",
        "g3pett0.com",
        "kiGp1993",
      ],
      messagePass: "",
    };
  },
  methods: {
    viewDocuments() {
      this.messagePass = this.message;
      if (
        this.message == null ||
        this.message == undefined ||
        this.message == ""
      ) {
        swal("Lo siento!", "Por favor rellenar la clave", "error");
      } else {
        const result = this.passwords.find(
          (element) => element == this.messagePass
        );
        if (result == undefined || result == null) {
          swal("Lo siento!", "Clave incorrecta", "error");
          this.document = false;
        } else {
          swal(
            "Clave correcta felicidades!",
            "Puede descargar sus archivos",
            "success"
          );
          this.document = true;
        }
      }
    },
  },
};
</script>