<template>
  <div>
    <nav class="nav-content">
      <router-link to="/inicio" class="brand-logo"
        ><img id="img-logo-navbar" src="../assets/img/imgRender/logo-min.png" />
      </router-link>
      <a data-target="mobile-demo" class="sidenav-trigger menu-hamburguesa"
        ><img src="../assets/img/menu.svg" alt="" srcset=""
      /></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/inicio">Inicio</router-link></li>
        <li>
          <router-link to="/quienes-somos">Quienes somos</router-link>
        </li>
        <li>
          <router-link to="/que-ofrecemos">Que ofrecemos</router-link>
        </li>
        <li><router-link to="/galeria">Galeria</router-link></li>
        <li>
          <router-link to="/inscripciones">Inscripciones</router-link>
        </li>
      </ul>
    </nav>

    <div class="sidenav" id="mobile-demo">
      <div class="sidenav-cont">
        <div><router-link to="/inicio">Inicio</router-link></div>
        <div><router-link to="/quienes-somos">Quienes somos</router-link></div>
        <div><router-link to="/que-ofrecemos">Que ofrecemos</router-link></div>
        <div><router-link to="/galeria">Galeria</router-link></div>
        <div><router-link to="/inscripciones">Inscripciones</router-link></div>
      </div>
    </div>

    <a href="" class="ir-arriba a2-btn" v-if="scrollCont"
      ><img
        src="https://mxitli.000webhostapp.com/imgRender/chevron-flecha-hacia-arriba.png"
        alt=""
    /></a>
  </div>
</template>

<script>
import GlobalUrl from "../GlobalUrl";
import M from "materialize-css";
export default {
  name: "Header",
  data() {
    return {
      box: null,
      scrollCont: false,
      url: GlobalUrl,
    };
  },
  mounted() {
    this.box = this.$refs.scrollHeader;
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 100) {
          this.scrollCont = false;
        }
        if (window.pageYOffset < 100) {
          this.scrollCont = false;
        }
      },
      //:class="{ 'nav-content-small': scrollCont == true }"
      false
    );

    M.AutoInit();
  },
  methods: {
    di: function (mensaje) {
      console.log(mensaje);
      var instance = M.Sidenav.getInstance(".sidenav");
      instance.close();
      //this.$router.push('/')
    },
  },
};
</script>