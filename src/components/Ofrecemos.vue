<template>
  <div>
    <Slide title="¿Como combatimos el covid?" color="1"></Slide>
    <div class="container-ofrecemos">
      <div class="con-sidebar-sanitazion">
        <div class="colum1">
          <div class="title-sanitazion">
            En caso de que te preocupe la pandemia covid, no te preocupes
            informamos que:
          </div>
          <div class="p-sanitazion">
            <div>
              Contaremos con mesas covid, donde cada niño tendrá su propio
              espacio para interactuar, así como nuestro arco sanitizante
            </div>
            <div>
              Por si su hijo no pudiera asistir a la escuela se les dotara de un
              tablet personal para poder acceder a las clases o videos virtuales
            </div>
            <div>
              Desde la comodidad de su casa o de su trabajo podrá monitorear el
              aprendizaje de su hijo con las cámaras de circuito cerrado de la
              escuela que estará ya programada en sus respectivas tablet/ ipad
            </div>
          </div>
        </div>
        <div class="colum2">
          <div class="title-sanitazion">Sanitización periodica</div>
          <Carousel page="ofrecemos"></Carousel>
        </div>
      </div>
      <Parallax
        title="Atencion personalizada"
        parrafo="Queremos acompañarlos desde los primeros pasos de su educación infantil hasta que llegue el momento de ir a la primaria, para ello ofrecemos un amplio abanico de oportunidades para que los niños y las niñas reciban siempre lo mejor en su aprendizaje."
        img="atencion personalizada-min.jpg"
      ></Parallax>
      <div class="tre-colums-ofrecemos">
        <div class="colum1-ofrecemos">
          <img
            src="../assets/img/imgRender/atencion personalizada 2-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
        <div class="colum2-ofrecemos">
          <img
            src="../assets/img/imgRender/atencion personalizada 3-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
        <div class="colum3-ofrecemos">
          <img
            src="../assets/img/imgRender/Atencion personalizada 1-min.jpg"
            class="materialboxed"
            alt=""
          />
        </div>
      </div>
      <Parallax
        title="Enfoque educativo"
        parrafo="Nuestro Jardín de niños es una escuela con enfoque constructivista, donde el niño es creador de su propio conocimiento. ¡Creemos que los niños aprenden haciendo!"
        img="juego y aprendo 2-min.jpg"
      ></Parallax>
      <Parallax
        title="Comunicación con  los padres"
        parrafo="Mantenemos comunicación frecuente y abierta con los padres. ¡Ustedes tambien participan!"
        img="platica con padres de familia-min.jpg"
      ></Parallax>
      <div class="tre-colums-ofrecemos">
        <div class="colum1-ofrecemos">
          <img
            :src="url + '/act. padres-min.jpg'"
            class="materialboxed"
            alt=""
          />
        </div>
        <div class="colum2-ofrecemos">
          <img
            :src="url + '/IMG_20191204_162225-min.jpg'"
            class="materialboxed"
            alt=""
          />
        </div>
        <div class="colum3-ofrecemos">
          <img
            :src="url + '/platica con padres de familia-min.jpg'"
            class="materialboxed"
            alt=""
          />
        </div>
      </div>
      <Parallax
        title="Expresion y creatividad"
        parrafo="La danza, la música, la expresión corporal y las artes plásticas son aliados, para el aprendizaje por eso se crearon talleres de expresiones artísticas donde el niño decide en que taller participar.(dibujo danza polinesia, danza árabe, estimulación musical, banda de guerra, danza moderna)."
        img="TEATRO-min.jpg"
      ></Parallax>
      <Carousel page="danza"></Carousel>
      <Parallax
        title="Talento humano"
        parrafo="En la familia Geppetto nos dedicamos a ofrecer una educación de alta calidad con métodos innovadores para lograr su autonomía intelectual, emocional y social, esto ha hecho que GEPPETTO sea una excelente opción para los padres."
        img="pintura 2.jpg"
      ></Parallax>
      <div class="two-colums-ofrecemos">
        <div class="colum1-ofrecemos">
          <img :src="url + '/pintura 1.jpg'" class="materialboxed" alt="" />
        </div>
        <div class="colum2-ofrecemos">
          <img :src="url + '/pintura.jpg'" class="materialboxed" alt="" />
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
import Carousel from "./Carousel";
import GlobalUrl from "../GlobalUrl";
import Parallax from "./Parallax";
export default {
  name: "Ofrecemos",
  components: {
    Slide,
    Footer,
    Carousel,
    Parallax,
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