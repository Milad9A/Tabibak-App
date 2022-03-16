<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <subjects-table />
      </div>
    </div>
  </div>
</template>

<script>
  import SubjectsTable from './components/SubjectsTable.vue';

  export default {
    name: 'tables',
    components: {
      SubjectsTable,
    },
  };
</script>
