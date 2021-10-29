<template>
  <div>
    <Slide title="Galeria escolar" color="2"></Slide>
    <div class="container-ofrecemos">
      <div class="title-sanitazion">Autonomía:</div>
      <div class="p-sanitazion">
        Fomentar la autonomía desde los primeros años de vida es la base del
        aprendizaje... <br />
        Ayudar a los niños a ser mas autónomos es una tarea relativamente
        sencilla, ya que se trata de permitirles tomar decisiones y asumir
        responsabilidades, por medio de actividades o juegos lúdicos.
      </div>
      <div class="con-side-autonomia">
        <div class="colum1-autonomia">
          <div class="side-autonomia">
            <div class="img1-autonomia">
              <img
                src="../assets/img/imgRender/jugando aprendo-min.jpg"
                class="materialboxed"
                alt=""
              />
            </div>
            <div class="img2-autonomia">
              <img
                src="../assets/img/imgRender/que quiero ser de grande (3)-min.jpg"
                class="materialboxed"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="colum2-autonomia">
          <img
            src="../assets/img/imgRender/que quiero ser de grande (2)-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
      </div>

      <div class="title-sanitazion">Jugando aprendo:</div>
      <div class="p-sanitazion">
        La actividad lúdica a través del juego favorece el aprendizaje infantil.
      </div>
      <div class="for-colums-galeria">
        <div class="colum1-galeria">
          <div class="img1-galeria">
            <img
              src="../assets/img/imgRender/actividades  ludicas-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
          <div class="img2-galeria">
            <img
              src="../assets/img/imgRender/aprendo jugando (2)-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
        </div>
        <div class="colum2-galeria">
          <div class="img1-galeria">
            <img
              src="../assets/img/imgRender/aprender jugando-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
          <div class="img2-galeria">
            <img
              src="../assets/img/imgRender/pintura-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="title-sanitazion">Sigo el camino:</div>
      <div class="two-colums-ofrecemos">
        <div class="colum1-ofrecemos">
          <img
            src="../assets/img/imgRender/sigo el camino 2-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
        <div class="colum2-ofrecemos">
          <img
            src="../assets/img/imgRender/sigue el camino-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
      </div>
      <div class="title-sanitazion">Sombrerero loco:</div>
      <img
        src="../assets/img/imgRender/sombrero loco 1-min.jpg"
        class="materialboxed"
        alt=""
      />
      <img
        src="../assets/img/imgRender/sombrero loco-min.jpg"
        class="materialboxed"
        alt=""
      />
      <div class="title-sanitazion">Expresion artistica:</div>
      <div class="for-colums-galeria">
        <div class="colum1-galeria">
          <div class="img1-galeria">
            <img
              src="../assets/img/imgRender/20191218_172608-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
          <div class="img2-galeria">
            <img
              src="../assets/img/imgRender/20191218_173500-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
        </div>
        <div class="colum2-galeria">
          <div class="img1-galeria">
            <img
              src="../assets/img/imgRender/20191218_173957-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
          <div class="img2-galeria">
            <img
              src="../assets/img/imgRender/20191218_174228-min.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import M from "materialize-css";
import Slide from "./Slide";
import Footer from "./Footer";
import GlobalUrl from "../GlobalUrl";
export default {
  name: "Galeria",
  components: {
    Slide,
    Footer,
  },
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      url: GlobalUrl,
    };
  },
};
</script>