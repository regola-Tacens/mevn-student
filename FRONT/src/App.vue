<template>
<div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a  class="navbar-brand float-left"></a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/view">View Student</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
