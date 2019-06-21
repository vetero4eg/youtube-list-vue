<template>
  <div id="app">
    <router-view/>
    <footer class="footer container">
      <a
        href="mailto:olkaveter@gmail.com?subject=You%20are%20hired!"
        class="footer__link"
      >create by Olga Veter</a>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  height: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  font-family: Tahoma, serif;
  background-color: #eee;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.container {
  width: 100%;
  max-width: 1600px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
}

main {
  flex: 1 0 auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  flex: 0 0 auto;
  background-color: #fff;

  &__link {
    font-size: 18px;
    color: rgb(28, 143, 236);
    transition: color 0.3s ease;

    &:hover,
    &:focus,
    &:active {
      color: #000;
    }
  }
}
</style>
