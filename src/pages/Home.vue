<template>
  <Header/>
  <div class="display">
    <div class ="intro">
      <h1 class="title">
              REMEMBER<br>
              <span>EVERY<br></span>
              CHARACTER</h1>                
    </div>

    <TrendingCharacters/>

    <Table/>
        
    <div class ="presentation">
      <p>API of Thrones is an <a href="https://www.ingenieur-imac.fr" target="_blank">IMAC</a> project made by <a href="https://www.instagram.com/zachariepain" target="_blank">Zacharie PAIN</a> and inspired by another API called <a href="https://thronesapi.com/" target="_blank">THRONES API</a>.<br><br>
      API of Thrones uses a Game of Thrones databank to allow you finding informations about the series characters. You will first see a 'Trending Character', which is in reality a more aesthetic way to display one character informations - Daenerys Targaryen when loaded - and you can use the two buttons to display other characters. Then, you will have access to every character's data displayed in a table. For now, there is 53 characters but we could easily post new ones thanks to the <a href="https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2" target="_blank">THRONES API DOCUMENTATION</a>.</p>
    </div>
  </div>
    
  <Footer/>


</template>

<script>
// components imports
import Header from "../components/Header.vue";
import TrendingCharacters from "../components/TrendingCharacters.vue"; 
import Table from "../components/Table.vue"
import Footer from "../components/Footer.vue";

export default {
    name: 'Home',
    data() {
        return {
            searchValue: "",
        }; 
    },
    methods: {

    }, 
    components: {Header, TrendingCharacters, Table, Footer}
}
</script>


<style>

  .intro {
    background-image: url("../assets/img/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    height : 60rem;
  }

  .presentation > * {
    padding : 10px 30%;
    color : var(--color-light);
    text-align: center;
  }

  .presentation a {
    color : var(--color-light);
    text-decoration: underline;
    font-size: var(--font-main-size);
  }

  .presentation a:hover {
    cursor: pointer;
    color : var(--color-blue);
    transition: 0.5s;
  }

  .display{
    min-height: 90vh;
    padding-bottom: var(--margin2);
    display: flex;
    flex-direction: column;

    .title{
      margin-top: var(--margin2); 
      text-align: center;
      font-size: 4rem;
      line-height: 6rem;
    }
    .title span{
      text-align: center;
      font-size: 8rem;
      line-height: 12rem;
      color: var(--color-dark);
      text-shadow: 0px 0px 10px var(--color-blue);

    }
  }

</style>
