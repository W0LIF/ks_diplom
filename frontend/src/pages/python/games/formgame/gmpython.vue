<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Игра в форме "Тетрис" на языке программирования C#</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p>Я тут покажу и напишу как разработать собственную игру в форме на языке программирования Python.
            Начнём с запуска формы если у вас её нету то загрузите в PyCharm дополнительные библиотеки для разработки игры.
            Начнём</p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p21.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p22.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p23.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p24.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p25.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p26.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p27.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p28.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p29.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p210.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p211.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p212.jpg" width="1000"></p>
            <p>Запускаем игру и проверяем её работоспособность</p>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p213.jpg" width="1000"></p>
            <br>
            <p class="aligncenter"><img src="../../../../assets/gmpython/p214.jpg" width="1000"></p>
        </div>
       </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "gmpython",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.thumb img  {
  padding: 15px; /* Расстояние от картинки до рамки */
  margin-right: 10px; /* Отступ справа */
  margin-bottom: 10px; /* Отступ снизу */
}
.aligncenter{
  text-align: center;
  margin: 0;
  padding: 0;
}
div{
  font-size: 16px;
}
@media (max-width: 768px) {
  #menu-btn {
    display: inline-block;
  }

  .home-main .home-parallax-img {
    top: 0;
    right: 0;
    width: 100%;
  }

  .grid-banner .content h3 {
    font-size: 15px !important;
  }

  .grid-banner .content.center {
    padding-left: 0px !important;
  }
  img{
    width:auto ;
    height: auto;
  }

}

@media (max-width: 576px) {
  .home-main .content h3 {
    font-size: 3rem;
  }

  .home-main .content p {
    font-size: 1.5rem;
  }

  img {
    width:300px ;
    height: 250px;
  }
}
</style>