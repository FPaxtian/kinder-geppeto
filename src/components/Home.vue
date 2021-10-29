<template>
  <div>
    <Carousel Home="true"></Carousel>
    <div class="con-sidebar">
      <article>
        <div class="cont-sidebar">
          <div class="title-cont-sidebar">
            Jardin de niños particular Geppetto
          </div>
          <p>
            Nos preocupamos por brindar una educación de calidad, tenemos la
            experiencia necesaria para ser uno de los mejores jardines de niños
            de la región y nos proponemos cada día a ser mejores en nuestro
            trabajo, nos inspiramos en la alegría, la risa y sorpresas de las
            emociones de nuestros niños, seguiremos formando sonrisas a partir
            de las artes, los valores, y la convivencia social ,que posibiliten
            la participación e investigación; buscamos aprendizajes
            significativos a través de acciones pedagógicas innovadoras,
            desarrollando destrezas y habilidades necesarias para la
            construcción de su propio aprendizaje, ayudándolo a alcanzar sus
            metas, compartir con sus amigos, ser feliz en familia, disfrutar,
            sonreír; y nuestra mayor satisfacción es que trabajamos y cuidamos a
            sus hijos como su segundo hogar.
          </p>
        </div>
      </article>
      <aside class="sibebar">
        <div class="cont-aside">
          <div class="title-aside">
            <div class="p-aside">
              Te preocupa el covid-19 en las aulas
              <div>¡ESTAMOS PREPARADOS!</div>
            </div>
            <div class="a-aside">
              <!--<router-link to="/que-ofrecemos">Saber mas..</router-link>-->
            </div>
            <img
              src="../assets/img/imgRender//angry-bird-corona-min.png"
              alt=""
            />
          </div>
        </div>
      </aside>
    </div>

    <div class="tree-colums">
      <article class="card-home article-1">
        <img src="../assets/img/imgRender/goffy.png" alt="" />
        <div class="card-content">
          <div class="title-card-content">Juego y movimiento</div>
          <div class="p-card-content">
            A través del juego reconocemos tiempo espacio y desarrollamos
            autoconfianza.
          </div>
          <!--<div><router-link to="/que-ofrecemos" class="a-btn">Saber mas..</router-link></div>-->
        </div>
      </article>
      <article class="card-home article-2">
        <img src="../assets/img/imgRender//micky.png" alt="" />
        <div class="card-content">
          <div class="title-card-content">Orientación profesional</div>
          <div class="p-card-content">
            Nuestro equipo de trabajo son de profesionales en la educación ,
            seleccionado y capacitado altamente.
          </div>
          <!--<div><router-link to="/que-ofrecemos" class="a-btn">Saber mas..</router-link></div>-->
        </div>
      </article>
      <article class="card-home article-3">
        <img src="../assets/img/imgRender//tiger.png" alt="" />
        <div class="card-content">
          <div class="title-card-content">Expresión y creatividad</div>
          <div class="p-card-content">
            La danza, la música, la expresión corporal y las artes plásticas son
            aliados.
          </div>
          <!--<div><router-link to="/que-ofrecemos" class="a-btn">Saber mas..</router-link></div>-->
        </div>
      </article>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import M from "materialize-css";
import Carousel from "./Carousel";
import Footer from "./Footer";
import GlobalUrl from "../GlobalUrl";
export default {
  name: "Home",
  components: {
    Carousel,
    Footer,
  },
  data() {
    return {
      url: GlobalUrl,
    };
  },
  mounted() {
    M.AutoInit();
  },
};
</script>