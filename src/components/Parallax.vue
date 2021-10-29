<template>
  <div>
    <div class="parallax-container cont-parallax">
      <div class="parallax">
        <img :src="url + '/' + img" />
        <div class="paralla-texto">
          <div class="title-paralla">{{ title }}</div>
          <div class="parra-parlla">{{ parrafo }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalUrl from "../GlobalUrl";
export default {
  name: "Parallax",
  components: {},
  props: ["title", "parrafo", "img"],
  data() {
    return {
      url: GlobalUrl,
    };
  },
};
</script>