<template>
  <div class="box" :class="{ 'is-hidden' : checkConditionsToHide }">
    <div class="columns center-content">

      <div class="column is-2">
        <span class="icon is-pulled-left">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </div>

      <div class="column is-5" @click="editMode = true">
        <p v-if="!editMode" :class="{ 'has-text-danger' : checkIfLate }">{{ taskText }}</p> 
        <input type="text" class="input" :class="{ 'has-text-danger' : checkIfLate }" v-model="taskText" v-else @keyup.enter="sendTaskChange" @blur="sendTaskChange">
      </div>

      <div class="column is-2">
        <div class="field has-addons">
          <div class="control">
            <span class="icon is-pulled-left">
              <i class="fa fa-lg fa-calendar icon-fix" aria-hidden="true"></i>
            </span>
          </div>
          <div class="control">
              <DatePicker v-model="datePickerAcceptedData" v-on:selected="sendDateLimitChange"></DatePicker>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <label class="checkbox is-pulled-right">Completed
          <input type="checkbox" v-model="todoObj.isCompleted" @change="changeCompletionStatus">
        </label>
      </div>
      <div class="column is-1">
        <span class="icon" @click="deleteTodo()">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DatePicker from 'vuejs-datepicker';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

export default {
  components: {
    DatePicker,
  },
  props: [
    'todoObj',
    'wantCompletedFiltered',
  ],
  watch: {
    completeBeforeDate(val) {
      this.sendDateLimitChange(new Date(val).getTime());
    },
  },
  data() {
    return {
      baseURL: `https://nodejs-vue-js-todo.herokuapp.com/todos/${this.todoObj._id}`,
      completed: this.todoObj.isCompleted,
      editMode: false,
      taskText: this.todoObj.task,
      completeBeforeDate: this.todoObj.completeByTime,
    };
  },
  computed: { // Most unused but keeping for future change's sake
    checkIfLate() {
      return (this.completeBeforeDate < new Date().getTime() && !this.completed);
    },
    checkConditionsToHide() {
      return (this.wantCompletedFiltered && this.completed);
    },
    ISOToReadable() {
      const date = new Date(this.completeBeforeDate);
      return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
    },
    EpochToUTC() {
      const date = new Date(this.completeBeforeDate);
      return new Date(date).getTime();
    },
    datePickerAcceptedData() {
      const date = new Date(this.completeBeforeDate);
      return date;
    },
  },
  methods: {
    changeCompletionStatus() {
      axios({
        method: 'PATCH',
        url: this.baseURL,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        headers: {
          'x-auth': sessionStorage.getItem('token'),
        },
        data: {
          isCompleted: !this.completed,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.completed = !this.completed;
          this.$parent.$parent.$parent.updateDBPopup('Task status has been changed', 'is-success', 'Success');
        } else {
          this.$parent.$parent.$parent.updateDBPopup('Something went wrong', 'is-danger', 'Success');
        }
      });
    },

    sendTaskChange() {
      axios({
        method: 'PATCH',
        url: this.baseURL,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        headers: {
          'x-auth': sessionStorage.getItem('token'),
        },
        data: {
          task: this.taskText,
          isCompleted: this.completed,
        },
      }).then((res) => {
        this.editMode = false;
        if (res.status === 200) {
          this.$parent.$parent.$parent.updateDBPopup('Task have been changed', 'is-success', 'Success');
        } else {
          this.$parent.$parent.$parent.updateDBPopup('Something went wrong', 'is-danger', 'Success');
        }
      });
    },

    sendDateLimitChange(newDate) {
      axios({
        method: 'PATCH',
        url: this.baseURL,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        headers: {
          'x-auth': sessionStorage.getItem('token'),
        },
        data: {
          task: this.taskText,
          isCompleted: this.completed,
          completeByTime: new Date(newDate).getTime(),
        },
      }).then((res) => {
        if (res.status === 200) {
          this.completeBeforeDate = newDate;
          this.$parent.$parent.$parent.updateDBPopup('Limit has been changed', 'is-success', 'Success');
        } else {
          this.$parent.$parent.$parent.updateDBPopup('Something went wrong', 'is-danger', 'Success');
        }
      });
    },

    deleteTodo() {
      this.$emit('deleteTodo', this.todoObj._id);
    },
  },
};
</script>

<style>
.icon-fix {
  margin: 10px 5px 0 0;
}
.center-content {
  display: flex;
  align-items: center;
}
.icon:hover {
  cursor: pointer;
}
</style>