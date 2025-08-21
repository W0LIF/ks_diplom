<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Программирование игр</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><span>Разрабатывать игры будем в движке Unity - 2d и 3d.</span><br /><span>Так же будет ещё игра написанная в visual studio 2022 в форме.</span></p>
            <h1 align="center">Unity</h1>
            <p class="aligncenter"><img src="./../assets/img/unity.jpg" class="rounded mx-auto d-block" width="500" height="400"></p>
            <p><span>Unity (Юнити) &mdash; это одна из лучших платформ разработки 2D и 3D компьютерных игр. Unity позволяет создавать приложения, которые работают на более чем 25 платформах. С её помощью можно создавать программы и игры для компьютеров, консолей, мобильных и других устройств.</span><br /><span>На этой платформе разработано огромное количество игр и приложений, которые стали настоящими хитами в своей отрасли, например, Pok&eacute;mon Go, Kerbal Space Program и др. Для программирования на Unity используется язык C# (Си Шарп). Он не вызывает особых трудностей даже у неопытных пользователей, поэтому работать в Юнити может практически каждый.</span></p>
            <div align="center"><strong>Написание сценария на Unity</strong></div>
            <div><span>Сценарии сообщают нашим игровым объектам, как вести себя; именно скрипты и компоненты, прикрепленные к игровым объектам, и то, как они взаимодействуют друг с другом, создают ваш игровой процесс. Итак, написание сценариев в Unity отличается от чистого программирования. Если вы занимались чистым программированием, например, создали работающее приложение, вы должны понимать, что в Unity вам не нужно создавать код, который запускает приложение, потому что Unity делает это за вас. Вместо этого вы сосредотачиваетесь на игровом процессе в своих сценариях.</span><br /><span>Unity работает в большом цикле. Он считывает все данные, которые находятся в игровой сцене. Например, он считывает источники света, сетки, поведение и обрабатывает всю эту информацию для вас.</span><br /><span>Если вы думаете о телевидении, где, например, в Северной Америке, у вас 29,5 кадра в секунду, Unity нужно сделать то же самое. Он запускает отдельные дискретные фреймы, один за другим. Вы направляете Unity инструкции, которые вы пишете в своих скриптах, а Unity выполняет их кадр за кадром так быстро, как только может.</span><br /><span>Достижение высокой частоты кадров означает, что не только ваша игра будет выглядеть более гибкой, но и ваши скрипты будут выполняться чаще, что сделает управление более отзывчивым.</span><br /><span>Какие языки вы можете использовать в Unity?</span><br /><span>Скрипт должен быть прикреплен к GameObject в сцене, чтобы вызываться Unity. Скрипты написаны на специальном языке, который Unity может понять. И именно с помощью этого языка мы можем общаться с движком и давать ему наши инструкции.</span><br /><span>Язык, который используется в Unity, называется C # (произносится до-диез). Все языки, с которыми работает Unity, являются объектно-ориентированными языками сценариев. Как и любой язык, языки сценариев имеют синтаксис или части речи, а основные части называются переменными, функциями и классами.</span><br /><span>Если вы используете версию Unity до 2017.3, вы заметите, что в ней есть текстовый редактор MonoDevelop: он может помочь нам завершить наш код, он сообщит нам, если мы напишем неправильный фрагмент кода, и позволит нам использовать ярлыки. Начиная с версии 2018.1, вы также можете использовать Visual Studio для сообщества Unity или другие текстовые редакторы, такие как Visual Studio, Notepad или Sublime text.</span></div>
            <p class="aligncenter"><img src="./../assets/img/unitgame.jpg" class="rounded mx-auto d-block"></p>
            <p><span>Как вы можете видеть, существуют переменные, функции и классы.</span></p>
            <div align="center"><strong>Что они делают?</strong></div>
            <p><span>Переменные содержат значения и ссылки на объекты (вы можете видеть объекты как &ldquo;большие&rdquo; переменные). Они похожи на коробку, в которой есть что-то, что мы можем использовать. Переменные начинаются со строчной буквы.</span><br /><span>Функции - это наборы кода, которые сравнивают и управляют этими переменными. Функции начинаются с заглавной буквы. Мы организуем код в функции так, чтобы их можно было легко повторно использовать несколько раз в разных частях программы.</span><br /><span>Классы - это способ структурирования кода для объединения коллекций переменных и функций вместе для создания шаблона, определяющего свойства объекта.</span><br /><span>Создание сценариев - это прежде всего сравнение этих объектов и их текущих состояний и значений. Он основан на логике, определяющей результат или решение.</span><br /><span>Переменные, функции и классы - это всего лишь основы для начала программирования в Unity.</span></p>
          </div>
        </div>

      </div>
    </section>
  </div>
  <nav class="container text-center">
    <router-link @click="scrollToTop()" to="/basicofprogramming"><button type="button" class="btn btn-primary">Основы программирования на C#</button></router-link>
    <router-link @click="scrollToTop()" to="/classstructures"><button type="button" class="btn btn-primary">Классы, структуры и пространства имён</button></router-link>
    <router-link @click="scrollToTop()" to="/objectorientedprogramming"><button type="button" class="btn btn-primary">ООП</button></router-link>
    <router-link @click="scrollToTop()" to="/exceptionhandling"><button type="button" class="btn btn-primary">Обработка исключений</button><br><br></router-link>
    <router-link @click="scrollToTop()" to="/delegate"><button type="button" class="btn btn-primary">Делегаты, события и лямбды</button></router-link>
    <router-link @click="scrollToTop()" to="/interfacee"><button type="button" class="btn btn-primary">Интерфейсы</button></router-link>
    <router-link @click="scrollToTop()" to="/dopioop"><button type="button" class="btn btn-primary">Дополнительны возможности ООП в C#</button><br><br></router-link>
    <router-link @click="scrollToTop()" to="/programmingigr"><button type="button" class="btn btn-primary justify-content-center">Программирование игр</button></router-link>
  </nav>
</template>

<script>
export default {
  name: "programmingigr",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
p{
  font-size: 14px;
  text-indent: 25px;
}
div{
  font-size: 14px;
}
.aligncenter{
  text-align: center;
  margin: 0;
  padding: 0;
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