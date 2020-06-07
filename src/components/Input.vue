<template>
  <form>
    <input type="text" v-model="todo" />
    <button class="submit" v-on:click="addTodo" @keyup.enter="addTodo">+</button>
  </form>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      if (this.todo.length > 0) {
        this.$emit("addTodo", this.todo);
        this.todo = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
}
input {
  border: none;
  border-bottom: 2px solid #42b983;
  padding: 8px;
  font-size: 15px;
  flex: 10;
  background-color: #e0f5ec;
  transition: background-color 1s;
}
input:focus {
  outline: none;
  background-color: #b1ebd2;
}
input:hover {
  background-color: #b1ebd2;
}
.submit {
  border: none;
  background-color: #fff;
  color: #42b983;
  font-size: 30px;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;

  transition: background-color 0.5s;
}
.submit:focus {
  outline: none;
}

.submit:hover {
  background-color: #b1ebd2;
}
</style>