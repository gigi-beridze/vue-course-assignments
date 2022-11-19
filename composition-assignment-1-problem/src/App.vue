<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="visible">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>


<!--  separate refs  -->
<script setup>
import { ref } from 'vue'

const courseGoal = ref('Finish the vue course')
const visible = ref(false)

const toggleGoal = () => {
  visible.value = !visible.value
}

</script>

<!-- ref object -->
<!-- 
<script>
export default{
  data() {
    return {
      courseGoal: {
        text: 'Finish the vue course',
        visible: true
      }
    }
  },
  methods: {
    toggleGoal() {
      this.courseGoal.visible = !this.courseGoal.visible
    }
  }
}
</script> -->

<!-- <script setup>
  import { reactive } from 'vue'

  const courseGoal = reactive({
    text: 'Finish the vue course',
    visible: true
  })

  const toggleGoal = () => {
    courseGoal.visible = !courseGoal.visible
  }
</script> -->

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>