<template>
  <div class="container">
    <transition name="strike">
      <span v-if="todo.complete" class="line"></span>
    </transition>
    <p class="text" v-on:click="toggleTodo">{{ todo.item }}</p>
    <button class="fa fa-close" v-on:click="$emit('deleteTodo',todo.id)"></button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    toggleTodo() {
      this.todo.complete = !this.todo.complete;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  position: relative;
}
p {
  flex: 10;
  line-height: 2;
  margin: 10px 0px;
  padding: 8px;
  border-bottom: 1px solid #c1cad6;
  transition: background-color 0.5s;
}

p:hover {
  background-color: #d1d4d8;
}
.strike-enter-active {
  animation: strike-in 0.5s ease-in-out;
}
.strike-leave-active {
  animation: strike-in 0.5s ease-in-out reverse;
}
@keyframes strike-in {
  0% {
    width: 0%;
  }
  100% {
    width: 88%;
  }
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 88%;
  height: 1px;
  background: black;
}
@keyframes strike {
  0% {
    width: 0;
  }
  100% {
    width: 88%;
  }
}

button {
  border: none;
  background-color: #fff;
  color: #d82424;
  font-size: 25px;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: background-color 0.5s;
}
button:focus {
  outline: none;
}
button:hover {
  background-color: #fbbbbb;
}
</style>