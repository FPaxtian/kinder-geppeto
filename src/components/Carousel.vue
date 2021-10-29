<template>
  <div>
    <carousel
      v-if="Home"
      :autoplay="true"
      :perPageCustom="[[0, 1]]"
      :autoplayTimeout="2000"
    >
      <slide class="slide">
        <img src="../assets/img/imgRender/maestras.jpg" />
        <div class="slide-texto">
          <div class="slide-title">Orientación profesional</div>
          <div class="slide-content">
            Nuestro equipo de trabajo son de profesionales en la educación ,
            seleccionado y capacitado altamente.
          </div>
        </div>
      </slide>
      <slide class="slide">
        <img src="../assets/img/imgRender/sombrero loco.jpg" />
        <div class="slide-texto">
          <div class="slide-title">Juego y movimiento</div>
          <div class="slide-content">
            A través del juego reconocemos tiempo espacio y desarrollamos
            autoconfianza.
          </div>
        </div>
      </slide>
      <slide class="slide">
        <img src="../assets/img/imgRender/disfrazados.jpg" />
        <div class="slide-texto">
          <div class="slide-title">Expresion y creatividad</div>
          <div class="slide-content">
            La danza, la música, la expresión corporal y las artes plásticas son
            aliados.
          </div>
        </div>
      </slide>
      <slide class="slide">
        <img src="../assets/img/imgRender//padres.jpg" />
        <div class="slide-texto">
          <div class="slide-title">
            Mantenemos Comunicación frecuente abierta con los padres de familia
          </div>
        </div>
      </slide>
    </carousel>

    <carousel
      v-if="page == 'quienes' && !home"
      :autoplay="true"
      :perPageCustom="[[0, 1]]"
      :autoplayTimeout="2000"
    >
      <slide class="slide2">
        <img src="../assets/img/imgRender/instalaciones6-min.jpg" />
      </slide>
      <slide class="slide2">
        <img src="../assets/img/imgRender/intalaciones2-min.jpg" />
      </slide>
      <slide class="slide2">
        <img src="../assets/img/imgRender/instalaciones3-min.jpg" />
      </slide>
      <slide class="slide2">
        <img src="../assets/img/imgRender/intalaciones4-min.jpg" />
      </slide>
    </carousel>

    <carousel
      v-if="page == 'ofrecemos' && !Home"
      :autoplay="true"
      :perPageCustom="[[0, 1]]"
      :autoplayTimeout="2000"
    >
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/otro2.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/otro3.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/otro4.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/otro5.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/otro7.jpg" />
      </slide>
    </carousel>

    <carousel
      v-if="page == 'danza' && !Home"
      :autoplay="true"
      :perPageCustom="[[0, 1]]"
      :autoplayTimeout="2000"
      class="margin-top-3rem"
    >
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/DANZA ARABE-min.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/DANZA MODERNA-min.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/DANZA POLINESIA-min.jpg" />
      </slide>
      <slide class="slide-ofrecemos">
        <img src="../assets/img/imgRender/BANDA DE GUERRA-min.jpg" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import GlobalUrl from "../GlobalUrl";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Carousel",
  components: {
    carousel: Carousel,
    slide: Slide,
  },
  data() {
    return {
      url: GlobalUrl,
    };
  },
  props: ["Home", "page"],
};
</script>