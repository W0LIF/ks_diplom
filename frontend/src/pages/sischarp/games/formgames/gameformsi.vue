<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Игра в форме "Шашки" на языке программирования C#</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            Я тут покажу и напишу как разработать собственную игру в форме на языке программирования C#.
            Начнём с запуска формы если у вас её нету то загрузите в Visual Studio дополнительные библиотеки для разработки игры.
            Я буду разрабатывать игру в WindowsForms, если что код игры я оставлю внизу.
            Начнём
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform1.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform2.jpg" ></p>
            Имя проекта и где он у вас будет храниться выбирайте у меня будет так.
            Нажимаем создать
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform3.jpg" width="1000"></p>
            Появляется форма, нажимаем на неё и видим код формы.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform4.jpg"></p>
            Переходим в [название вашей формы].Designer.cs
            Изменяем тут код и добавляем строчки код.
            Возвращаемся обратно после этого в код формы и начинаем там писать.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform5.jpg"></p>
            Тут мы объявляем переменные которые там будут нужны.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform6.jpg" width="1000"></p>
            Изменяем основной метод [название вашей формы], у меня он называется Form1Б, но перед этим.
            Создаём в проекте папку называем её img и вставляем туда картинки которые будут отвечать за изображение наших шашек
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform7.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform8.jpg"></p>
            После этого пишем код в методе Form1, и создаём новый метод Init в котором сделаем массив где будут у нас стоят в самом начале при запуске игры шашки белый и чёрных.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform9.jpg"></p>
            В методе Init пишем переход в другой метод который создадим под названием CreateMap в нём уже у нас будет прописано размер кнопок на нашей доске с шашками.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform10.jpg"></p>
            Создаём метод SwitchPlayer в котором будет выбор кто будет первым ходить у нас, и будет также переход в другом метод ResetGame.
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform11.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform12.jpg"></p>
            Прописываем очерёдность кто будет первый ходить
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform13.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform14.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform15.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform16.jpg" width="1000"></p>
            Функция для уничтожения шашек
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform17.jpg" width="1000"></p>
            Прописываем как у нас должна ходить шашка
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform18.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform19.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform20.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform21.jpg" width="800"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform22.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform23.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform24.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform25.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform26.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform27.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform28.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform29.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/imggameform/gameform30.jpg" width="1000"></p>
            Запускаем игру и проверяем её работоспособность
            <div class="thumb text-center">
              <img src="../../../../assets/imggameform/gameform32.jpg" width="400" height="400">
              <img src="../../../../assets/imggameform/gameform33.jpg" width="400" height="400">
              <img src="../../../../assets/imggameform/gameform34.jpg" width="400" height="400">
              <img src="../../../../assets/imggameform/gameform35.jpg" width="400" height="400">
            </div>
<!--Доделать загрузку файла с сервера-->
<!--            Сам файл программы:-->
<!--            <a href="./../assets/file/WindowsFormsApp.zip" download="">-->
<!--              <button>Скачать файл <i class="fas fa-download"></i></button>-->
<!--            </a>-->

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "gameformsi",

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