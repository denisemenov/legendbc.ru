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

::gallery{:cols='{"mobile":1,"tablet":2,"desktop":3}' id=hall aspectRatio=square}
:::column
![Трибуны](/images/tv_1.jpg)
:::

:::column
![TV-зона](/images/tv_2.jpg)
:::

:::column
![Проекционный экран](/images/tv_3.jpg)
:::
::
