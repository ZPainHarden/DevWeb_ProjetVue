<template>
  <footer class="footer">
    <div>
      <a href="https://thronesapi.com/api/v2/Characters" target="_blank">API</a>
    </div>
    <div>
      <a href="#" target="_blank">GitHub project</a>
    </div>
    <div class="imac">
      <a href="https://www.ingenieur-imac.fr/" target="_blank">IMAC</a>
    </div>


  </footer>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style scoped lang="scss">

  .footer{
    padding: 40px;
    background-color: var(--color-light);
    width: 100vw;
    height: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
      text-align: center;
    }
  }

  a {
    color: var(--color-dark);
    text-decoration: underline;
    font-size: var(--font-main-size);
    border: 1px solid;
    border-color: var(--color-dark);
    padding: 0.5rem;
  }
  
  a:hover {
    font-size: calc(var(--font-main-size)*1.05);
    color: var(--color-light);
    background-color: var(--color-blue);
    transition: 0.5s;
  }

  .imac a{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 400px) {
    .footer{
      flex-direction: row;
    }
    .imac a{
      flex-direction: row;
    }
  }

  @media screen and (min-width: 600px){
        .display{
            display: flex;
            
            .cover{
                width: 50vw;
            }
            .albumInfo{
                width: 40vw;
            }
            

        }
        .cover img{
            width: 40vw;
            max-width: 550px;
        }

    }


</style>
