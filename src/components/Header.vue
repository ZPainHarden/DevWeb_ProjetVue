<template>
  <div class="header">
    <a class="headerTitle" href="/"><h1>API of Thrones</h1><br>
      <p>AN IMAC STUDENT PROJECT</p>
    </a>>
    
  </div>

</template>

<script>

export default {
  name: 'Header',
}

</script>

<style scoped lang="scss">
  .header{

    background-color: var(--color-dark);
    padding: var(--margin);
    display: flex;
    h1{
      color : var(--color-blue);
      padding-top: var(--margin);
      text-align: center;
    }
  }

  a {
    text-decoration: none;
  }

  .headerTitle{
    flex-grow: 1;
  }

  .headerTitle :hover {
    cursor: pointer;
  }

  p {
    color: var(--color-light);
    text-align: center;
    font-family: var(--font-main);
    font-size: var(--font-main-size);
  }
</style>
