<template>

  <section id="home">
    <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">

      <div class="content text-center">
        <img src="../assets/S.png"
        HEIGHT="400" WIDTH="250">
          <h1 class="display-3">Selamat Datang di Websiteku! </h1>
          <p class="lead">"Nama Saya Nova Siska Nurfadilah, biasa teman - teman saya memanggil saya dengan sebutan "Ica atau Nopa"
            dan Saya sekarang berusia 20 Tahun. Saya merupakan Mahasiswa aktif Semester 4 di jurusan Teknik Informatika Fakultas Sains dan Teknologi
            Universitas Islam Negeri Sultan Syarif Kasim Riau. Saya lahir di Pekanbaru 19 Juli 2002. website design ini dibuat untuk keperluan portofolio saya sendiri sebagai Desain Grafis dengan pengalaman 1 tahun di
            perusahaan teknologi global. Memiliki keahlian dalam melakukan desain,editing,animator,fotographer,dan videographer” </p>
          <div class="d-flex">
            <a href=""></a>
          </div>
        </div>
      </div>

  </section>
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
  }
}
</script>
<style>
.container{
  background: #0f58a1;
}
.content{
  color: #ffffff;
}
</style>

<style>
.d-flex {
  text-align: center;
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