<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Язык программирования С++</h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><b> C++ </b> <span> &nbsp; </span> &mdash;  компилируемый, статически типизированный язык программирования общего назначения. Поддерживая разные парадигмы программирования, сочетает свойства как высокоуровневых, так и низкоуровневых языков. В сравнении с его предшественником— языком C, — наибольшее внимание уделено поддержке объектно-ориентированного и обобщённого программирования. Название «C++» происходит от языка C, в котором унарный оператор ++ обозначает инкремент переменной.</p>
            <p><b> Особенности языка </b></p>
            <p>Широко используется для разработки программного обеспечения, являясь одним из самых популярных языков программирования. Область его применения включает создание операционных систем, разнообразных прикладных программ, драйверов устройств, приложений для встраиваемых систем, высокопроизводительных серверов, а также компьютерных игр. Существует множество реализаций языка C++, как бесплатных, так и коммерческих и для различных платформ. Например, на платформе x86 это GCC, Visual C++, Intel C++ Compiler, Embarcadero C++ Builder и другие. C++ оказал огромное влияние на другие языки программирования, в первую очередь на Java и C#.</p>
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
  name: "siplusplus",

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