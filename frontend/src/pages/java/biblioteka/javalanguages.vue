<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Язык программирования Java</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><b> Java </b> <span> &nbsp; </span> &mdash;  строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle). Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL. Права на торговую марку принадлежат корпорации Oracle.</p>
            <p><b> Особенности языка </b></p>
            <p>Ключевой особенностью языка Java является то, что его код сначала транслируется в специальный байт-код, независимый от платформы. А затем этот байт-код выполняется виртуальной машиной JVM (Java Virtual Machine). В этом плане Java отличается от стандартных интерпретируемых языков как. PHP или Perl, код которых сразу же выполняется интерпретатором. В то же время Java не является и чисто компилируемым языком, как С или С++.</p>
          </div>
        </div>

      </div>
    </section>
  </div>
  <!--  <nav class="container text-center">-->
  <!--    <router-link @click="scrollToTop()" to="/basicofprogramming"><button type="button" class="btn btn-primary">Основы программирования на C#</button></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/classstructures"><button type="button" class="btn btn-primary">Классы, структуры и пространства имён</button></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/objectorientedprogramming"><button type="button" class="btn btn-primary">ООП</button></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/exceptionhandling"><button type="button" class="btn btn-primary">Обработка исключений</button><br><br></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/delegate"><button type="button" class="btn btn-primary">Делегаты, события и лямбды</button></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/interfacee"><button type="button" class="btn btn-primary">Интерфейсы</button></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/dopioop"><button type="button" class="btn btn-primary">Дополнительны возможности ООП в C#</button><br><br></router-link>-->
  <!--    <router-link @click="scrollToTop()" to="/programmingigr"><button type="button" class="btn btn-primary justify-content-center">Программирование игр</button></router-link>-->
  <!--  </nav>-->
</template>

<script>

export default {
  name: "javalanguages",

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