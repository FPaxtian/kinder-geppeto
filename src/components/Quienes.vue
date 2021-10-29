<template>
  <div>
    <Slider></Slider>
    <div class="content-quienes">
      <div class="p-quienes">
        Gracias por su preferencia en la educación de sus hijos, en la escuela
        uno de los puntos más importantes es la seguridad de nuestros niños no
        solo en nuestras instalaciones sino sobre todo en la nueva normalidad
        que se vivirá a partir del próximo ciclo escolar 2020-2021 por lo que le
        anunciamos : que contaremos con mesas covid(panel protector para
        resguardar a cada menor), donde cada niño tendrá su propio espacio para
        interactuar, así como nuestro arco sanitizante, y por si su hijo no
        pudiera asistir a la escuela se les dotara de un tablet personal para
        poder acceder a las clases o videos virtuales y por si fuera poco desde
        la comodidad de su casa o de su trabajo podrá monitorear el aprendizaje
        de su hijo con las cámaras de circuito cerrado de la escuela que estará
        ya programada en sus respectivas tablet.
      </div>
      <div>
        <video class="responsive-video" controls controlsList="nodownload">
          <source
            src="https://mxitli.000webhostapp.com/video/matrogimnacia.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="cont-nuetras">
        <div class="cont-nuetras-con-sidebar">
          <div class="sidebar-nuestras">
            <img
              src="../assets/img/imgRender/aulainteractiva2.jpg"
              class="materialboxed"
              alt=""
            />
          </div>
          <div class="content-nuestras">
            <div class="content-nuestras-colum-1">
              <div>Nuestras instalaciones</div>
              <div>
                Contamos con un aula interactiva como herramienta tecnológica
                para mejorar y hacer divertido los aprendizajes de los alumnos
              </div>
            </div>
            <div class="content-nuestras-colum-2">
              <img
                src="../assets/img/imgRender/aulainteractiva3 (1).jpg"
                class="materialboxed"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Carousel page="quienes"></Carousel>
      <div class="map-quienes">
        <MglMap
          :accessToken="accessToken"
          :center="coordinates"
          :zoom="zoom"
          :mapStyle="mapStyle"
        >
        </MglMap>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
import GlobalUrl from "../GlobalUrl";
import Slider from "./Slider";
import M from "materialize-css";
import Carousel from "./Carousel";
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  name: "Quienes",
  components: {
    Slider,
    Footer,
    Carousel,
    MglMap,
  },
  data() {
    return {
      url: GlobalUrl,
      accessToken:
        "pk.eyJ1IjoiZmNvLXBheHRpYW4iLCJhIjoiY2s4Y2N5b2h3MGlhdDNqbzVoeXducTMwaSJ9.UaAmWj2bQT57Nr1KRq8A8Q",
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      coordinates: [-94.55266356, 17.98441206],
      zoom: 15,
    };
  },
  methods: {},
  mounted() {
    M.AutoInit();
    this.mapbox = Mapbox;
  },
};
</script>