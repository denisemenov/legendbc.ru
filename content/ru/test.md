---
title: Главная страница
description: Пример использования кастомных компонентов Grid и Column
---

# Добро пожаловать!

::btn{blank="true" block="true" href="/price"}
Нажмите здесь
::

::grid{:cols='{"mobile":1,"tablet":2,"desktop":3}'}
  :::column
  **Колонка 1**:brСодержимое.
  :::

  :::column
  **Колонка 2**:brСодержимое.
  :::

  :::column
  **Колонка 3**:brСодержимое.
  :::
::
