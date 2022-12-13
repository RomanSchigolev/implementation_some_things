# Implementation of some things in JavaScript

## Debouncing

Если дословно переводить — «устранение дребезга». Такой декоратор позволяет превратить несколько вызовов функции в течение определенного времени в один вызов, причем задержка начинает заново отсчитываться с каждой новой попыткой вызова.

---

## Promise.all

Метод `all()` — это один из статических методов объекта Promise. Метод all() используют, когда нужно запустить несколько промисов параллельно и дождаться их выполнения.

`Promise.all()` принимает итерируемую коллекцию промисов (чаще всего — массив) и возвращает новый промис, который будет выполнен, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонён, если хотя бы один из переданных промисов завершится с ошибкой.

Метод `Promise.all()` возвращает массив значений всех переданных промисов, при этом сохраняя порядок оригинального (переданного) массива, но не порядок выполнения.
