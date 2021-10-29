<template>
  <footer>
    <div class="con-sidebar-footer">
      <div class="footer-slogan">
        <div class="slogan">
          La diversión y el aprendizaje no terminan nunca. Por eso la mejor
          elección para tus hijos es Geppetto. ¡Contáctanos ya!
        </div>

        <a href="https://api.whatsapp.com/send?phone=529221261828"
          >Desarrollo y diseño {{ name }} (dale click para contacto)</a
        >
      </div>
      <div class="foooter-contacts">
        <div class="contact">Nuestras redes!!</div>
        <div class="contact-cont">
          Teléfono 22 3 35 24
          <div><a href="mailto:j.n.geppetto@hotmail.com">Gmail</a></div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100006478064318"
              >Facebook</a
            >
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=529221401026"
              >Whatsapp</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      name: "</Paxtian>",
    };
  },
};
</script>