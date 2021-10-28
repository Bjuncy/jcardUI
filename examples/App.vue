<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <j-card
        imgSrc="01.png"
        summary="测试01图片"
    >
        <template v-slot:footer>
            <div class="footer">
                <div class="level">终极： 2345人报名</div>
                <div class="price">$2996.00</div>
            </div>
        </template>
    </j-card>
    <j-card
        imgSrc="02.jpg"
        :width="370"
        :imgHeight="90"
    >
    这是描述
        <template v-slot:footer>
            <div class="footer-spring">
                <div class="level">4步骤 6门课</div>
                <div class="price">$300.00</div>
            </div>
        </template>
    </j-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
