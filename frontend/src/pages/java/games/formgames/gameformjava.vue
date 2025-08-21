<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Игра в форме "Змейка" на языке программирования Java</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            Я тут покажу и напишу как разработать собственную игру в форме на языке программирования Java.
            Запускаем приложение IntelliJ IDEA или другое где можно программировать на Java.
            Создаём новый проект
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava1.jpg"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava2.jpg" width="1000"></p>
            В папке src создаём классы с .java.
            В классе GameFrame.java пишем создание формы название размер и другое.
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava3.jpg" width="1000"></p>
            Делаем отдельный класс SnakeGame для удобства запуска игры
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava4.jpg" width="1000"></p>
            Создаём ещё один класс в котором будет весь функционал игры и назовём его GamePanel.java.
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava5.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava6.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava7.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava8.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava9.jpg" width="1000"></p>
            <p class="aligncenter"><img src="../../../../assets/gmjava/gmjava10.jpg" width="1000"></p>
            Запускаем игру и проверяем её работоспособность
            <div class="thumb text-center">
              <img src="../../../../assets/gmjava/gmjava11.jpg" width="400" height="400">
              <img src="../../../../assets/gmjava/gmjava12.jpg" width="400" height="400">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "gameformjava"
}
</script>

<style scoped>
.aligncenter{
  text-align: center;
  margin: 0;
  padding: 0;
}
div{
  font-size: 16px;
}
.thumb img  {
  padding: 15px; /* Расстояние от картинки до рамки */
  margin-right: 10px; /* Отступ справа */
  margin-bottom: 10px; /* Отступ снизу */
}
</style>