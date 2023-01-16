# Implementation of some things in JavaScript

## Debouncing

Если дословно переводить — «устранение дребезга». Такой декоратор позволяет превратить несколько вызовов функции в течение определенного времени в один вызов, причем задержка начинает заново отсчитываться с каждой новой попыткой вызова.

---

## Promise.all

Метод `all()` — это один из статических методов объекта Promise. Метод all() используют, когда нужно запустить несколько промисов параллельно и дождаться их выполнения.

`Promise.all()` принимает итерируемую коллекцию промисов (чаще всего — массив) и возвращает новый промис, который будет выполнен, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонён, если хотя бы один из переданных промисов завершится с ошибкой.

Метод `Promise.all()` возвращает массив значений всех переданных промисов, при этом сохраняя порядок оригинального (переданного) массива, но не порядок выполнения.

---

## Throttling

Данный декоратор позволяет «затормозить» функцию — функция будет выполняться не чаще одного раза в указанный период, даже если она будет вызвана много раз в течение этого периода. Т.е. все промежуточные вызовы будут игнорироваться.

---

## Array.prototype.map()

Метод `map()` позволяет трансформировать один массив в другой при помощи функций-колбэка. Переданная функция будет вызвана для каждого элемента массива по порядку. Из результатов вызова функции будет собран новый массив.

---

## Array.prototype.filter()

Метод массива `filter()` позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

---

## Promise.allSettled

Метод `allSettled()` — это один из статических методов объекта Promise. Его используют, когда нужно запустить несколько промисов параллельно и дождаться их выполнения.
`Promise.allSettled()` очень похож на метод `Promise.all()`, но работает немного по-другому. В отличие от `Promise.all()`, `Promise.allSettled()` ждёт выполнения всех промисов, при этом неважно, завершились они успешно или с ошибкой.

---

## Promise.race

Метод `race()` — это один из статических методов объекта `Promise`. Его используют, чтобы запустить несколько промисов и дождаться того, который выполнится быстрее.
