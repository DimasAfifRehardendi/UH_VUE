<template>
  <div id="app">
    <div id="nav">
      <div class="wrapper">
        <router-view name= 'header'/>
        <router-view name= 'sidebar'/>
        <router-view />
        <router-view name= 'footer'/>
      </div>
    </div>
  </div>
</template>
