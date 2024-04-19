<template>
  <section>
    <div class="container">
          <div class="testmamen">
            <h2>
              All characters 
            </h2>
          </div>
          
          <!--   <input type="text" v-model="searchForCharacter" placeholder="Search Character"></input>   -->
          
          <div id="TEST">
            
            <table>
              <thead>
                <tr>
                  <th v-for="item in headers">
                    {{ item.toUpperCase() }} <br>
                    <button class="sortButton" @click="sortData(item)">
                    Sort
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(character, id) in allCharacters":key="id">
                <td>
                {{ character.id }}
                </td>
                <td>
                {{ character.firstName }}
                </td>
                <td>
                {{ character.lastName }}
                </td>
                <td>
                {{ character.title }}
                </td>
                <td>
                {{ character.family }}
                </td>
              </tr>
              </tbody>
            </table>

          </div>

    </div>

  
    <div>
      <ul></ul>
    </div>

  </section>     
      
</template>

<script>

import {ref} from 'vue'

export default {
  name: 'Table',
  data() {
    return {
      headers: ["id", "firstName", "lastName", "title", "family"],
      allCharacters: [],
      searchCharacter: '',
      };
  },

  methods: {
 
    getAllCharacters() { 
      fetch(`https://thronesapi.com/api/v2/Characters`,)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.allCharacters = ref(data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
    },
    
    sortData(sortBy) {
      switch (sortBy) {
        case 'id' :
          console.log("Sort by ID");
          let sortedCharactersID = this.allCharacters;
          sortedCharactersID = sortedCharactersID.sort((a,b) => {
          return a.id - b.id;
          })
          
        break
        default :
          console.log(`Sort by ${sortBy}`);
          let sortedCharacters = this.allCharacters;
          
          sortedCharacters = sortedCharacters.sort((a, b) => {
            if(sortBy == "firstName") {
              let fa = a.firstName.toLowerCase();
              let fb = b.firstName.toLowerCase();
              if (fa < fb) {
                return -1;
              }
              if (fb < fa) {
                return 1;
              }
              return 0;
            }
            if(sortBy == "lastName") {
              let fa = a.lastName.toLowerCase();
              let fb = b.lastName.toLowerCase();
              if (fa < fb) {
                return -1;
              }
              if (fb < fa) {
                return 1;
              }
              return 0;
            }
            if(sortBy == "title") {
              let fa = a.title.toLowerCase();
              let fb = b.title.toLowerCase();
              if (fa < fb) {
                return -1;
              }
              if (fb < fa) {
                return 1;
              }
              return 0;
            }
            if(sortBy == "family") {
              let fa = a.family.toLowerCase();
              let fb = b.family.toLowerCase();
              if (fa < fb) {
                return -1;
              }
              if (fb < fa) {
                return 1;
              }
              return 0;
            }            
          })
        break
      }
  
    },
  },
/*
  computed :{ // Don't know why I get the error 'Write operation failed: computed property "searchForCharacter" is readonly.' :'(
    searchForCharacter(){
      console.log(123);
      let sortedCharacters = this.allCharacters;
      if (this.searchCharacter){
        sortedCharacters = sortedCharacters.filter((item) => {
          return item.firstName.toUpperCase().includes(this.searchCharacter.toUpperCase())
        })
      }        
      return sortedCharacters;
    }
  },
*/
  
  
  mounted(){
    this.getAllCharacters();
  }

}


</script>


<style>

  table {
    padding: 5rem 0;
  }

  th {
    color : var(--color-light);
    border: 1px solid;
    border-color: var(--color-light);
    padding: 1rem;
  }

  td {
    color : var(--color-light);
    border: 1px solid;
    border-color: var(--color-light);
    padding: 0.2rem;
  }

  .testmamen * {
    color : var(--color-light);
  }

  .sortButton {
    height: 1.5rem;
    width : 4rem;
  }  

  /*========== Responsive typography ==========*/
  @media screen and (min-width: 1120px) {
    :root {
      --h2-font-size: 1.5rem;
      --small-font-size: .875rem;
    }
  }

  /*=============== BASE ===============*/
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: var(--body-font);
    color: var(--text-color);
  }

</style>

