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
import db from "@/firebase";

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
  created() {
    // db.collection("todos").onSnapshot(res => {
    //   const changes = res.docChanges();
    //   changes.forEach(change => {
    //     if (change.type == "added") {
    //       this.todos.push({
    //         ...change.doc.data(),
    //         id: change.doc.id
    //       });
    //     } else if (change.type == "removed") {
    //       this.todos.filter(todo => todo.id != change.doc.id);
    //     }
    //   });
    // });
    this.$bind("todos", db.collection("todos")).then(todos => {
      this.todos === todos;
      // todos are ready to be used
      // if it contained any reference to other document or collection, the
      // promise will wait for those references to be fetched as well

      // you can unbind a property anytime you want
      // this will be done automatically when the component is destroyed
      // this.$unbind('todos')
    });
  },
  firestore: {
    todos: db.collection("todos")
  },
  methods: {
    onAddTodo(todo) {
      let newTodo = { item: todo, complete: false };
      db.collection("todos")
        .add(newTodo)
        .then(() => {
          console.log("added");
        });
    },
    onDeleteTodo(id) {
      db.collection("todos")
        .doc(id)
        .delete()
        .then(() => {
          console.log("deleted");
        });
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