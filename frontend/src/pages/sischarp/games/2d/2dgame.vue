<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Игра 2D "Прыгалка" в Unity</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p>Прежде чем создавать 2D-игру, сперва  нужно определиться с перспективой игры и художественным стилем. Чтобы создать 2D-игру, настраиваем свой проект Unity</p>
            <p>Как вы уже прочитали тут я буду показывать как создавать 2d игру</p>
            <p>Создадим пинг-понг</p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d21.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d22.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d23.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d24.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d25.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d26.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d27.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d28.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d29.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d210.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d211.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d212.jpg" width="1000"></p>
            <p>Запускаем игру и проверяем её работоспособность</p>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d213.jpg" width="1000"></p>
            <br>
            <p class="aligncenter"><img src="../../../../assets/d2gameping/d214.jpg" width="1000"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "d2game"
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