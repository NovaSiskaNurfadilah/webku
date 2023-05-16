<template>
  <!--banner image-->

  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
    <div class="images">
      <img src="../assets/N(1).png" class="rounded"
           height="400" width="400">
    </div>
    <div class="content text-center">
      <h1 class="text-white">Welcome To Nova Siska Nurfadilah </h1>
    </div>
  </div>

  <section id = "sec-6" class = "py-5 ">
      <div class = "row mb-5">
        <div class = "col-12 text-center text-white">
          <h3 class = "mb-4" >これは私のソーシャルメディアです！</h3>
          <p class = "lh-lg fw-light pt-2 w-75 mx-auto"> Watashi ga motte iru sōsharu media akaunto no ichibu
            o tsugini shimeshimasu. Gutaitekini wa, Instagram, Youtube, Github, TikTokdesu.</p>
        </div>
      </div>
      <div class = "row text-uppercase text-center text-white">
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://instagram.com/nopaicaai_19?igshid=YmMyMTA2M2Y=" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <h6>Instagram</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.youtube.com/@novasiskanurfadilah1017" target="_blank">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
          <h6>Youtube</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://github.com/NovaSiskaNurfadilah" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </div>
          <h6>Github</h6>
        </div>
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.tiktok.com/@bukannopaa?lang=id-ID" target="_blank">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
          <h6>Tiktok</h6>
        </div>
      </div>
  </section>


</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.banner-image{
  background: #0f58a1;
  font-family: "Calibri Light" ;
  font-style: italic;
  font-size: 30px;

}

#sec-6{
  background:dodgerblue center;
}

#sec-6 .row{
  background: dodgerblue;
}
#sec-6 .circle-icon{
  width: 100px;
  height: 100px;
  border-radius: 100%;

}
#sec-6 .lh-lg{
  font-size: 20px;
  font-style: italic;
  font-family: "Franklin Gothic Book";
}
</style>