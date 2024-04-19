<template>
  <section>
    <div class="container">
      <h2 class="trendingCharacter">
        Trending Character
      </h2>
      <div class="card__container">
        <article class="card__article">
            <img v-if="characterImage" :src="characterImage" class="card__img" :alt="`Image of ${singleCharacter.name}`">
            <div class="card__data">
                <span class="card__family">{{singleCharacter.family}}</span>
                <h2 class="card__name">{{singleCharacter.fullName}}</h2>
                <span class="card__title">{{singleCharacter.title}}</span>
              <a v-if="characterAPI" :href="characterAPI" target="_blank">Character's API</a>
              </div>
          </article>
      </div>
      <button @click="updateID_random()">Get random character</button>
      <button @click="updateID_next()">Get next character</button>
    </div>

  
    <div>
      <ul></ul>
    </div>

  </section>     
      
</template>

<script>

export default {
  name: 'TrendingCharacters',

  data(){
    return {
      characterID: 0,
      allCharacters: [],
      singleCharacter: [],
      characterImage: null,
      characterAPI: null,
    };
  },

  methods: {

    getCharacterByID() { 
      this.characterAPI = `https://thronesapi.com/api/v2/Characters/${this.characterID.toString()}`;
      fetch(this.characterAPI)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.singleCharacter = data;
        this.characterImage = this.singleCharacter.imageUrl;
        // console.log(this.singleCharacter); //Help you to visualize characters attributes
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
      },

    updateID_random() {
      this.characterID = Math.floor(Math.random() * 53);
      // console.log("New ID", this.characterID);
    },
    updateID_next() {
      if (this.characterID == 52) {
        this.characterID = 0;

      } else {
        this.characterID += 1;
      }
      // console.log("New ID", this.characterID);
    },

    },

    watch : {
      characterID() {
        this.getCharacterByID();
      }
    },
    
  mounted(){
    this.getCharacterByID();
  }

}

</script>


<style>

    a {
      color: var(--color-blue);
      font-family: var(--font-main);
      font-size: calc(var(--font-main-size)*0.7);
      text-decoration: underline;
    }

    a:hover {
      cursor: pointer;
    }
  
  .trendingCharacter {
    color : var(--color-light);
    text-align: center;
  }

  button {
    background-color: var(--color-light);
    width: 13rem;
    height: 3rem;
    color: var(--color-dark);
    font-family: var(--font-main);
    font-size: var(--font-main-size);
    border-radius: 1rem;
  }

  button:hover {
    background-color: var(--color-blue);
    color: var(--color-dark);
    font-size: calc(var(--font-main-size)*1.01);
    transition : 1s;
  }

  /*=============== VARIABLES CSS ===============*/
  :root {

    --h2-font-size: 1.25rem;
    --small-font-size: 0.8rem;
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

  img {
  display: block;
}

  /*=============== CARD ===============*/
.container {
    display: grid;
    place-items: center;
    margin-inline: 1.5rem;
    padding-block: 5rem;
  }

  .card__container {
    padding: 5rem 0;
    display: grid;
    row-gap: 3.5rem;
  }

  .card__article {
    height: 328px;
    width : 328px;
    position: relative;
    overflow: hidden;
  }

  .card__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
  }

  .card__data {
    width: 280px;
    background-color: var(--color-light);
    padding: 1.5rem 2rem;
    box-shadow: 0 8px 16px var(--color-blue);
    border-radius: 1rem;
    position: absolute;
    bottom: -9rem;
    left: 0;
    right: 0;
    margin-inline: auto;
    opacity: 0;
    transition: opacity 1s 1s;
  }

  .card__family, .card__title {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: .25rem;
  }

  .card__name {
    font-size: var(--h2-font-size);
    font-weight: 500;
    color: var(--color-dark);
    margin-bottom: .75rem;
  }

  .card__button {
    text-decoration: none;
    font-size: var(--small-font-size);
    font-weight: 500;
    color: var(--first-color);
  }

  .card__button:hover {
    text-decoration: underline;
  }

  /* Naming animations in hover */
  .card__article:hover .card__data {
    animation: show-data 1s forwards;
    opacity: 1;
    transition: opacity .3s;
  }

  .card__article:hover {
    animation: remove-overflow 2s forwards;
  }

  .card__article:not(:hover) {
    animation: show-overflow 2s forwards;
  }

  .card__article:not(:hover) .card__data {
    animation: remove-data 1s forwards;
  }

  /* Card animation */
  @keyframes show-data {
    50% {
      transform: translateY(-10rem);
    }
    100% {
      transform: translateY(-7rem);
    }
  }

  @keyframes remove-overflow {
    to {
      overflow: initial;
    }
  }

  @keyframes remove-data {
    0% {
      transform: translateY(-7rem);
    }
    50% {
      transform: translateY(-10rem);
    }
    100% {
      transform: translateY(.5rem);
    }
  }

  @keyframes show-overflow {
    0% {
      overflow: initial;
      pointer-events: none;
    }
    50% {
      overflow: hidden;
    }
  }


</style>