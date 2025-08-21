<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Создания игр</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p>Игры приобрели массовый характер в современном мире они сейчас есть на всех электронных устройствах.</p>
            <p>Тут я вам покажу как создавать игры на 4 языках программирования: C#, C++, Java, Python.</p>
            <p>И вы научитесь их создавать в форме, 2d и 3d игры на движках</p>
            <p>Выбор правильного языка программирования, фреймворка или других инструментов имеет важное значение в успешной разработке программного обеспечения. Это решение повлияет на то, как вы будете использовать свои основные ресурсы, такие как время, бюджет, оборудование и т. д. Игровая индустрия очень разнообразна, и выбор языка программирования для игры во многом зависит от ваших целей и задач. Этому выбору также способствуют многие другие факторы – целевая платформа, сложность проекта или жанр игры. Мы разделим игры на категории и подберем соответствующие языки программирования для каждой.</p>
            <p>Игровой движок – это среда разработки для создания видеоигр и других интерактивных приложений. Термин может относиться к программному обеспечению с различными уровнями абстракции, однако основные функциональные возможности игрового движка включают рендеринг графики (2D или 3D), моделирование физики, звук, написание сценариев, анимацию, искусственный интеллект, сетевое соединение, управление памятью и потоковую передачу. Несмотря на растущую популярность коммерческих движков, многие компании-разработчики предпочитают создавать собственные, чтобы избежать проблем с лицензированием или добиться большей гибкости.</p>
            <p>Игры создаются с помощью движков — набора инструментов, который позволяет работать с графикой, физикой, скриптами и прочим.</p>
            <p>Список современных движков</p>
            <ul>
              <li>Unity;</li>
              <li>Unreal Engine 5;</li>
              <li>CryEngine 3;</li>
              <li>Source, Source 2;</li>
              <li>Creation Engine;</li>
              <li>Godot;</li>
              <li>Cocos2D;</li>
              <li>RPG Maker и другие.</li>
            </ul>
            <p>Впрочем, вы можете обойтись и без движка, если игра очень маленькая, вроде браузерки или небольшого платформера.</p>
            <p>Начните изучать и потихоньку определитесь что вам походит</p>
            <nav class="container text-center">
              <a class="btn btn-primary" href="#css-modal-target">Игры в форме</a>&nbsp;&nbsp;&nbsp;
              <a class="btn btn-primary" href="#css-modal-target2">2D игры</a>&nbsp;&nbsp;&nbsp;
              <a class="btn btn-primary" href="#css-modal-target3">3D игры</a>&nbsp;&nbsp;&nbsp;
            </nav>
            <div class="css-modal-target" id="css-modal-target">
              <div class="cmt">
                <h1>Игры в форме</h1>
                <router-link @click="scrollToTop()" to="/gameformsi"><button type="button" class="btn btn-primary">C#</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/gameformsiplusplus"><button type="button" class="btn btn-primary">C++</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/gameformjava"><button type="button" class="btn btn-primary">Java</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/gmpython"><button type="button" class="btn btn-primary">Python</button></router-link>&nbsp;&nbsp;&nbsp;
              </div>
              <a href="#close" class="css-modal-close"></a>
            </div>
            <div class="css-modal-target" id="css-modal-target2">
              <div class="cmt">
                <h1>2D игры</h1>
                <router-link @click="scrollToTop()" to="/d2game"><button type="button" class="btn btn-primary">C#</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d2gamesiplusplus"><button type="button" class="btn btn-primary">C++</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d2gamejava"><button type="button" class="btn btn-primary">Java</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d2gamepython"><button type="button" class="btn btn-primary">Python</button></router-link>&nbsp;&nbsp;&nbsp;
              </div>
              <a href="#close" class="css-modal-close"></a>
            </div>
            <div class="css-modal-target" id="css-modal-target3">
              <div class="cmt">
                <h1>3D игры</h1>
                <router-link @click="scrollToTop()" to="/d3game"><button type="button" class="btn btn-primary">C#</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d3gamesiplusplus"><button type="button" class="btn btn-primary">C++</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d3gamesijava"><button type="button" class="btn btn-primary">Java</button></router-link>&nbsp;&nbsp;&nbsp;
                <router-link @click="scrollToTop()" to="/d3gamesipython"><button type="button" class="btn btn-primary">Python</button></router-link>&nbsp;&nbsp;&nbsp;
              </div>
              <a href="#close" class="css-modal-close"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "games"
}
</script>

<style scoped>
ul{
  font-size: 16px;
  list-style-position: inside;
}
/* Контейнер для кнопки */
.css-modal-target-container {
  height: 60px;
  display:flex;
  align-items:center;
  justify-content:center;
}
/* Кнопка для открытия */
.css-modal-open {
  display: inline-flex;
  margin: 10px;
  text-decoration: none;
  position: relative;
  font-size: 20px;
  line-height: 20px;
  padding: 12px 30px;
  color: #FFF;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto', Тahoma, sans-serif;
  background: #337AB7;
  cursor: pointer;
  border: 2px solid #BFE2FF;
  overflow: hidden;
  z-index: 1;
}
.css-modal-open:hover,
.css-modal-open:active,
.css-modal-open:focus {
  color: #FFF;
}
.css-modal-open:before {
  content: '';
  position: absolute;
  top: 0;
  right: -50px;
  bottom: 0;
  left: 0;
  border-right: 50px solid transparent;
  border-top: 50px solid #2D6B9F;
  transition: transform 0.5s;
  transform: translateX(-100%);
  z-index: -1;
}
.css-modal-open:hover:before,
.css-modal-open:active:before,
.css-modal-open:focus:before {
  transform: translateX(0);
}

/* Контейнер, который затемняет страницу */
.css-modal-target {
  display: none;
}
.css-modal-target:target {
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: bg 0.5s ease;
  background: rgba(51, 122, 183, 0.7);
}

/* Модальное окно */
.css-modal-target .cmt {
  font-family: Verdana, sans-serif;
  font-size: 16px;
  padding: 20px;
  width: 80%;
  z-index: 8;
  max-width: 600px;
  max-height: 70%;
  transition: 0.5s;
  border: 6px solid #BFE2FF;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
  text-align: center;
  overflow: auto;
  animation: scale 0.5s ease;
}

/* Кнопка с крестиком закрывающая окно */
.css-modal-close {
  position: relative;
  display: block;
}
.css-modal-close:after {
  content: "";
  width: 50px;
  height: 50px;
  border: 6px solid #BFE2FF;
  border-radius: 12px;
  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23337AB7' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cline x1='18' y1='6' x2='6' y2='18'%3e%3c/line%3e%3cline x1='6' y1='6' x2='18' y2='18'%3e%3c/line%3e%3c/svg%3e");
  background-color: #FFF;
  background-size: cover;
  animation: move 0.5s ease;
}
.css-modal-close:before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  content: "";
  cursor: default;
}

/* Анимации */
@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes move {
  0% {
    right: -80px;
  }
  100% {
    right: 20px;
  }
}
@keyframes bg {
  0% {
    background: rgba(51, 122, 183, 0);
  }
  100% {
    background: rgba(51, 122, 183, 0.7);
  }
}
</style>