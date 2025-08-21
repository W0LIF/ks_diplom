<template>
  <div class="container">
    <section class="py-0">
      <div class="mb-4  justify-content-between align-items-center text-center">
        <h2>Интерфейсы C# </h2>
      </div>
      <div class="row">
        <div class="card mb-3 shadow-lg p-0 pb-3">
          <div>
            <p><b>Определение интерфейсов</b><br /><span>Интерфейс представляет ссылочный тип, который может определять некоторый функционал - набор методов и свойств без реализации. Затем этот функционал реализуют классы и структуры, которые применяют данные интерфейсы.</span><br /><span>Определение интерфейса</span><br /><span>Для определения интерфейса используется ключевое слово interface. Как правило, названия интерфейсов в C# начинаются с заглавной буквы I, например, IComparable, IEnumerable (так называемая венгерская нотация), однако это не обязательное требование, а больше стиль программирования.</span><br /><span>Что может определять интерфейс? В целом интерфейсы могут определять следующие сущности:</span><span></span></p>
            <ul>
              <li>Методы</li>
              <li>Свойства</li>
              <li>Индексаторы</li>
              <li>События</li>
              <li>Статические поля и константы (начиная с версии C# 8.0)</li>
            </ul>
            <p><span>Однако интерфейсы не могут определять нестатические переменные.</span><br /><span>Например, простейший интерфейс, который определяет все эти компоненты:</span><br /><code><span>interface IMovable</span></code><br /><code><span>{</span></code><br /><code><span>// константа</span></code><br /><code><span>const int minSpeed = 0; // минимальная скорость</span></code><br /><code><span>// статическая переменная</span></code><br /><code><span>static int maxSpeed = 60; // максимальная скорость</span></code><br /><code><span>// метод</span></code><br /><code><span>void Move(); // движение</span></code><br /><code><span>// свойство</span></code><br /><code><span>string Name { get; set; } // название</span></code><br /><code><span>delegate void MoveHandler(string message); // определение делегата для события</span></code><br /><code><span>// событие</span></code><br /><code><span>event MoveHandler MoveEvent; // событие движения</span></code><br /><code><span>}</span></code><br /><span>В данном случае определен интерфейс IMovable, который представляет некоторый движущийся объект. Данный интерфейс содержит различные компоненты, которые описывают возможности движущегося объекта. То есть интерфейс описывает некоторый функционал, который должен быть у движущегося объекта.</span><br /><span>Методы и свойства интерфейса могут не иметь реализации, в этом они сближаются с абстрактными методами и свойствами абстрактных классов. В данном случае интерфейс определяет метод Move, который будет представлять некоторое передвижение. Он не имеет реализации, не принимает никаких параметров и ничего не возвращает.</span><br /><span>То же самое в данном случае касается свойства Name. На первый взгляд оно похоже на автоматическое свойство. Но в реальности это определение свойства в интерфейсе, которое не имеет реализации, а не автосвойство.</span><br /><span>Модификаторы доступа</span><br /><span>Еще один момент в объявлении интерфейса: если его члены - методы и свойства не имеют модификаторов доступа, то фактически по умолчанию доступ public, так как цель интерфейса - определение функционала для реализации его классом. Это касается также и констант и статических переменных, которые в классах и структурах по умолчанию имееют модификатор private. В интерфейсах же они имеют по умолчанию модификатор public. И например, мы могли бы обратиться к константе minSpeed и переменной maxSpeed интерфейса IMovable:</span><br /><code><span>Console.WriteLine(IMovable.maxSpeed); // 60</span></code><br /><code><span>Console.WriteLine(IMovable.minSpeed); // 0</span></code><br /><span>Но также, начиная с версии C# 8.0, мы можем явно указывать модификаторы доступа у компонентов интерфейса:</span><br /><code><span>interface IMovable</span></code><br /><code><span>{</span></code><br /><code><span>public const int minSpeed = 0; // минимальная скорость</span></code><br /><code><span>private static int maxSpeed = 60; // максимальная скорость</span></code><br /><code><span>public void Move();</span></code><br /><code><span>protected internal string Name { get; set; } // название</span></code><br /><code><span>public delegate void MoveHandler(string message); // определение делегата для события</span></code><br /><code><span>public event MoveHandler MoveEvent; // событие движения</span></code><br /><code><span>}</span></code><br /><span>Как и классы, интерфейсы по умолчанию имеют уровень доступа internal, то есть такой интерфейс доступен только в рамках текущего проекта. Но с помощью модификатора public мы можем сделать интерфейс общедоступным:</span><br /><code><span>public interface IMovable</span></code><br /><code><span>{ void Move(); }</span></code><br /><span>Добавление интерфейса</span><br /><span>Стоит отметить, что в Visual Studio есть специальный компонент для добавления нового интерфейса в отдельном файле. Для добавления интерфейса в проект можно нажать правой кнопкой мыши на проект и в появившемся контекстном меню выбрать Add-&gt; New Item... и в диалоговом окне добавления нового компонента выбрать пункт Interface (Интерфейс):</span></p>
            <p class="aligncenter"><img src="./../assets/img/interf1.jpg"></p>
            <p class="aligncenter"><img src="./../assets/img/interf2.jpg"></p>
            <p class="aligncenter"><img src="./../assets/img/interf3.jpg"></p>
            <p><span>Хотя мы также может добавить стандартный файл класса или любой другой файл кода C# и в нем определить интерфейс.</span><br /><b>Применение интерфейсов</b><br /><span>Интерфейс представляет некое описание типа, набор компонентов, который должен иметь тип данных. И, собственно, мы не можем создавать объекты интерфейса напрямую с помощью конструктора, как например, в классах:</span><br /><code><span>IMovable m = new IMovable(); // ! Ошибка, так сделать нельзя</span></code><br /><code><span>interface IMovable</span></code><br /><code><span>{ void Move(); }</span></code><br /><span>В конечном счете интерфейс предназначен для реализации в классах и структурах.</span><br /><span>Применение интерфейса в программе:</span><br /><code><span>Person person = new Person();</span></code><br /><code><span>Car car = new Car();</span></code><br /><code><span>DoAction(person);</span></code><br /><code><span>DoAction(car);</span></code><br /><code><span>void DoAction(IMovable movable) =&gt; movable.Move();</span></code><br /><code><span>interface IMovable</span></code><br /><code><span>{ void Move(); }</span></code><br /><code><span>class Person : IMovable</span></code><br /><code><span>{ public void Move() =&gt; Console.WriteLine("Человек идет"); }</span></code><br /><code><span>struct Car : IMovable</span></code><br /><code><span>{ public void Move() =&gt; Console.WriteLine("Машина едет"); }</span></code><br /><span>В данной программе определен метод DoAction(), который в качестве параметра принимает объект интерфейса IMovable. На момент написания кода мы можем не знать, что это будет за объект - какой-то класс или структура. Единственное, в чем мы можем быть уверены, что этот объект обязательно реализует метод Move и мы можем вызвать этот метод.</span><br /><span>Иными словами, интерфейс - это контракт, что какой-то определенный тип обязательно реализует некоторый функционал.</span><br /><span>Консольный вывод данной программы:</span><br /><span>Человек идет</span><br /><span>Машина едет</span><br /><b>Наследование интерфейсов</b><br /><span>Интерфейсы, как и классы, могут наследоваться:</span><br /><code><span>interface IAction</span></code><br /><code><span>{ void Move(); }</span></code><br /><code><span>interface IRunAction : IAction</span></code><br /><code><span>{ void Run(); }</span></code><br /><code><span>class BaseAction : IRunAction</span></code><br /><code><span>{ public void Move()</span></code><br /><code><span>{ Console.WriteLine("Move"); }</span></code><br /><code><span>public void Run()</span></code><br /><code><span>{ Console.WriteLine("Run"); } }</span></code><br /><span>При применении этого интерфейса класс BaseAction должен будет реализовать как методы и свойства интерфейса IRunAction, так и методы и свойства базового интерфейса IAction, если эти методы и свойства не имеют реализации по умолчанию.</span><br /><span>Однако в отличие от классов мы не можем применять к интерфейсам модификатор sealed, чтобы запретить наследование интерфейсов.</span><br /><span>Также мы не можем применять к интерфейсам модификатор abstract, поскольку интерфейс фактически итак, как правило, предоставляет абстрактный функционал, который должен быть реализован в классе или структуре (за исключением методов и свойств с реализацией по умолчанию).</span><br /><span>Однако методы интерфейсов могут использовать ключевое слово new для скрытия методов из базового интерфейса:</span><br /><code><span>IAction action1 = new RunAction();</span></code><br /><code><span>action1.Move(); // I am moving</span></code><br /><code><span>IRunAction action2 = new RunAction();</span></code><br /><code><span>action2.Move(); // I am running</span></code><br /><code><span>interface IAction</span></code><br /><code><span>{ void Move() =&gt; Console.WriteLine("I am moving"); }</span></code><br /><code><span>interface IRunAction : IAction</span></code><br /><code><span>{ // скрываем реализацию из IAction</span></code><br /><code><span>new void Move() =&gt; Console.WriteLine("I am running"); }</span></code><br /><code><span>class RunAction : IRunAction { }</span></code><br /><span>Здесь метод Move из IRunAction скрывает метод Move из базового интерфейса IAction. Это имеет смысл, если в базовом интерфейсе определена реализация по умолчанию, как в случае выше, которую нужно переопределить.</span><br /><span>Но класс RunAction может переопределить метод Move сразу для обоих интерфейсов.</span><br /><code><span>IAction action1 = new RunAction();</span></code><br /><code><span>action1.Move(); // I am tired</span></code><br /><code><span>IRunAction action2 = new RunAction();</span></code><br /><code><span>action2.Move(); // I am tired</span></code><br /><code><span>interface IAction</span></code><br /><code><span>{ void Move() =&gt; Console.WriteLine("I am moving"); }</span></code><br /><code><span>interface IRunAction : IAction</span></code><br /><code><span>{ new void Move() =&gt; Console.WriteLine("I am running"); }</span></code><br /><code><span>class RunAction : IRunAction</span></code><br /><code><span>{ public void Move() =&gt; Console.WriteLine("I am tired"); }</span></code><br /><span>При наследовании интерфейсов следует учитывать, что, как и при наследовании классов, производный интерфейс должен иметь тот же уровень доступа или более строгий, чем базовый интерфейс. Например:</span><br /><code><span>public interface IAction</span></code><br /><code><span>{ void Move(); }</span></code><br /><code><span>internal interface IRunAction : IAction</span></code><br /><code><span>{ void Run(); }</span></code><br /><span>Но не наоборот. Например, в следующем случае мы получим ошибку, и программа не скомпилируется, так как производный интерфейс имеет менее строгий уровень доступа, нежели базовый:</span><br /><code><span>internal interface IAction</span></code><br /><code><span>{ void Move(); }</span></code><br /><code><span>public interface IRunAction : IAction // ошибка IRunAction может быть только internal</span></code><br /><code><span>{ void Run(); }</span></code><br /><b>Про интерфейсы всё</b></p>
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
  name: "interfacee",

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
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