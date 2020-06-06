<template>
  <div class="home">
    <transition
      name="slidein"
      enter-active-class="animate__animated animate__lightSpeedInRight"
      appear
    >
      <h1>// Todo: todo list</h1>
    </transition>
    <ul id="todo-list">
      <transition-group name="list-complete" tag="p">
        <li v-for="todo of todos" :key="todo.id" class="list-complete-item">
          <Todo v-bind:todo="todo" @deleteTodo="onDeleteTodo" />
        </li>
      </transition-group>
    </ul>

    <transition enter-active-class="animate__animated animate__fadeInUp" appear>
      <Input @addTodo="onAddTodo" />
    </transition>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import Input from "@/components/Input.vue";
import { todosRef } from "../firebase";

export default {
  name: "Home",
  components: {
    Todo,
    Input
  },
  data() {
    return {
      todos: []
    };
  },
  // created() {
  //   todosRef.on("value", snap => {
  //     snap.forEach(childSnap => {
  //       this.todos.push({
  //         id: childSnap.key,
  //         item: childSnap.val().item,
  //         complete: childSnap.val().complete
  //       });
  //     });
  //   });
  // },
  firebase: {
    todos: todosRef
  },
  methods: {
    onAddTodo(todo) {
      console.log(todosRef);
      todosRef.push({ item: todo, complete: false });
    },
    onDeleteTodo(id) {
      todosRef.child(id).remove();
    }
  }
};
</script>

<style scoped>
.home {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 0px;
}
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>