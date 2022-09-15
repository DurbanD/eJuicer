<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: rgb(50, 50, 60);
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;

  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(50, 50, 60);
}
</style>
