<template>
  <swiper :pagination="true" :zoom="true" :modules="modules" class="swiper">
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/COVER-FINAL_front2.png" alt="Buchcover" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/autoren.png" alt="Autoren" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/inhaltsverz.png" alt="Inhaltsverzeichnis" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/inhaltsverz2.png" alt="Inhaltsverzeichnis 2" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/vorwort_autoren.png" alt="Vorwort Autoren" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/vorwort_stranzl.png" alt="Vorwort Stranzl" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img
          src="../assets/imgs/vorwort_ivanschitz.png"
          alt="Vorwort Ivanschitz"
        />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/leseprobe1.png" alt="Leseprobe 1" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/leseprobe2.png" alt="Leseprobe 2" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="../assets/imgs/leseprobe3.png" alt="Leseprobe 3" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Zoom } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Zoom],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 100%;
  max-height: 25%;
  width: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
