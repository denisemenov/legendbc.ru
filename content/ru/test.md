---
title: Главная страница
description: Пример использования кастомных компонентов Grid и Column
---

# Добро пожаловать!

::btn{blank="true" block="true" href="/price"}
Нажмите здесь  
::

::grid{:cols='{"mobile":1,"tablet":2,"desktop":3}' id="hall"}
:::column
**Колонка 1**
Содержимое.
:::

:::column
**Колонка 2**
Содержимое.
:::

:::column
**Колонка 3**
Содержимое.
:::
::

::gallery{id="hall" aspect-ratio="square"}
![Трибуны](/images/tv_1.jpg)
![TV-зона](/images/tv_2.jpg)
![Проекционный экран](/images/tv_3.jpg)
::
