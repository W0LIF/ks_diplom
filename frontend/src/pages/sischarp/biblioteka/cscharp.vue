<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Язык программирования С#</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><b> C# </b> <span> &nbsp; </span> &mdash; современный объектно-ориентированный и типо безопасный язык программирования. C# позволяет разработчикам создавать разные типы безопасных и надежных приложений, выполняющихся в .NET. C# относится к широко известному семейству языков C, и покажется хорошо знакомым любому, кто работал с C, C++, Java или JavaScript.</p>
            <p><b> Особенности языка </b></p>
            <p>С# разрабатывался как язык программирования прикладного уровня для CLR и, как таковой, зависит, прежде всего, от возможностей самой CLR. Это касается, прежде всего, системы типов С#&lrm;, которая отражает BCL. Присутствие или отсутствие тех или иных выразительных особенностей языка диктуется тем, может ли конкретная языковая особенность быть транслирована в соответствующие конструкции CLR. Так, с развитием CLR от версии 1.1 к 2.0 значительно обогатился и сам C#; подобного взаимодействия следует ожидать и в дальнейшем (однако, эта закономерность была нарушена с выходом C# 3.0, представляющего собой расширения языка, не опирающиеся на расширения платформы .NET). CLR предоставляет С#&lrm;, как и всем другим .NET-ориентированным языкам, многие возможности, которых лишены &laquo;классические&raquo; языки программирования. Например, сборка мусора не реализована в самом C#&lrm;, а производится CLR для программ, написанных на C#, точно так же, как это делается для программ на VB.NET, J# и др.</p>
            <p><b> Что разрабатывают с помощью С# </b></p><p>Язык C# практически универсален. Можно использовать его для создания любого ПО: продвинутых бизнес-приложений, видеоигр, функциональных веб-приложений, приложений для Windows, macOS, мобильных программ для iOS и Android.</p>
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
  name: "cscharp",

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
  }
</style>