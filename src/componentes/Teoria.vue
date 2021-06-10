<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Teoria</h2>
      <table class="table table-dark">

            <tr>
              <th>Número de pregunta</th>
              <th>Respuesta</th>
            </tr>
            
            <tr v-for="(respuesta,index) in respuestas" :key="index">
              <td>{{respuesta.numero}}</td>
              <td>{{respuesta.respuesta}}</td>
            </tr>
          </table>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Teoria',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {numero: 1, respuesta: ["c"]},
          {numero: 2, respuesta: ["c"]},
          {numero: 3, respuesta: ["a", "b"]}
        ]
      }
    },
    methods: {
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background: linear-gradient(to bottom,  rgb(221, 200, 180) 0%,rgb(199, 156, 131) 17%,rgb(177, 120, 82) 33%,rgb(138, 83, 0) 67%,rgb(87, 49, 0) 83%,rgba(0,36,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    color: white;
  }
</style>
