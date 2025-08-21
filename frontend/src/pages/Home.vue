<template>
    <div>
      <div class="home-main">
        <div class="content">
          <div class="thumb text-center">
            <img src="./../assets/img/img1.jpg" class="img1" width="750" height="750">
            <img src="./../assets/img/001093746.jpg" class="img1" width="750" height="750">
            <img src="./../assets/img/ee35e7c782791419f29316f183d5d6d3.jpg" class="img1" width="750" height="750">
            <img src="./../assets/img/491909.jpg" class="img1" width="750" height="750">
          </div>

          <div>
              <h2 align="center">О сайте</h2>
              <p align="center">Данный сайт посвящен различным языкам и технологиям программирования, компьютерам, мобильным платформам и ИТ-технологиям.<br>
                Здесь будут выкладываться различные руководства и учебные материалы, статьи и примеры.<br>
                На сайте можно найти материалы по таким направлениям, как язык C# , C++ , Java, Python.<br>
                Поскольку жизнь не стоит на месте, все материалы по возможности дополняются и обновляются, чтобы соответствовать духу времени и не терять своей актуальности.<br>
                По всем вопросам касательно сайта пишите по адресу GameDevDip@mail.ru.
                Спасибо за посещение сайта. </p>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "Home",

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
};

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

.home-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 2rem;
    position: relative;
    overflow: hidden;
}

.home-main .content {
    flex: 1 1 41rem;
}

.home-main .content span {
    font-size: 2rem;
    color: #27ae60;
}

.home-main .content h3 {
    font-size: 4rem;
    color: #130f40;
    padding-top: 1rem;
}

.home-main .content p {
    font-size: 1.4rem;
    color: #666;
    line-height: 2;
    padding: 1rem 0;
}

.home-main .image {
    flex: 1 1 41rem;
    margin: 2rem 0;
    pointer-events: none;
}

.home-main .image .home-img {
    width: 100%;
    margin-top: 5rem;
}

.home-main .home-parallax-img {
    position: absolute;
    top: -15rem;
    right: -15rem;
    width: 80vw;

}
.box {
    padding: 2rem;
    text-align: center;
    border-radius: .5rem;
    background: #f7f7f7;
}
.box:hover {
    background: #27ae60;
}

.box:hover h3 {
    color: #fff;
}
.box img {
    height: 7rem;
}

.box h3 {
    font-size: 1.8rem;
    color: #130f40;
}

.row-banner .content {
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translateY(-50%);
}

 .row-banner .content span {
    font-family: 'Satisfy', cursive;
    font-size: 4rem;
    color: #130f40;
}

 .row-banner .content h3 {
    font-size: 6rem;
    color: red;
    text-transform: uppercase;
}

 .row-banner .content p {
    font-size: 2rem;
    padding-bottom: 1rem;
}


 .grid-banner .grid {
    border-radius: 1rem;
    overflow: hidden;
    height: 45rem;
}

 .grid-banner .grid:hover img {
    transform: scale(1.2);
}

 .grid-banner .grid img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

 .grid-banner .grid .content {
    position: absolute;
    top: 2rem;
    padding: 0 2rem;
}

 .grid-banner .grid .content.center {
    text-align: center;
    width: 100%;
}

 .grid-banner .grid .content.center span {
    color: #666;
}

 .grid-banner .grid .content.center h3 {
    color: #130f40;
}

 .grid-banner .grid .content span {
    font-size: 2.5rem;
    color: #fff;
}

 .grid-banner .grid .content h3 {
    font-size: 3rem;
    color: #fff;
    padding-top: .5rem;
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




