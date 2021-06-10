<template>
    <section class="src-componentes-formulario">
        <div class="jumbotron">

        <h2>Notas</h2>
        <hr>
        <br>

        <vue-form :state="formState" @submit.prevent="enviar()">

            <validate tag="div">
            <label for="nombre">Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                class="form-control"
                autocomplete="off"
                v-model.trim="formData.nombre"
                required
                :minlength="nombreLengthMin"
                :maxlength="nombreLengthMax"
                no-spaces
            >

            <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
                <div slot="no-spaces" class="alert alert-danger mt-1">
                No se permiten espacios intermedios en este campo
                </div>            
                <div slot="minlength" class="alert alert-danger mt-1">
                Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
                </div>            
                <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
                Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
                </div>            
            </field-messages>
            </validate>
            <br>

            <validate tag="div">
            <label for="apellido">Apellido</label>
            <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                class="form-control"
                autocomplete="off"
                v-model.trim="formData.apellido"
                required
                :minlength="nombreLengthMin"
                :maxlength="nombreLengthMax"
                no-spaces
            >

            <field-messages name="apellido" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
                <div slot="no-spaces" class="alert alert-danger mt-1">
                No se permiten espacios intermedios en este campo
                </div>            
                <div slot="minlength" class="alert alert-danger mt-1">
                Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
                </div>            
                <div v-if="formData.apellido.length == nombreLengthMax" class="alert alert-warning mt-1">
                Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
                </div>            
            </field-messages>
            </validate>
            <br>

            <validate tag="div">
            <label for="nota">Nota</label>
            <input 
                type="number" 
                id="nota" 
                name="nota" 
                class="form-control"
                autocomplete="off"
                v-model.number="formData.nota"
                required
                :min="notaMin"
                :max="notaMax"
            >

            <field-messages name="nota" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
                <div slot="min" class="alert alert-danger mt-1">La nota mínima permitida es de {{notaMin}}</div>            
                <div slot="max" class="alert alert-danger mt-1">La nota máxima permitida es de {{notaMax}}</div>            
            </field-messages>

            </validate>
            <br>


            <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Ingresar</button>

        </vue-form>

        <div v-if="alumnosIngresados.length" class="table-responsive">
            <table class="table table-dark">

            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Nota</th>
            </tr>
            
            <tr v-for="(alumno,index) in alumnosIngresados" :key="index" >
                <td>{{alumno.nombre}}</td>
                <td>{{alumno.apellido}}</td>
                <td :style="{'color': (getColor(alumno.nota))}" >{{alumno.nota}}</td>               
            </tr>

            <tr>
                <th :style="{'color': (getColor(prom))}" >El promedio total es de: {{this.prom}}</th>
            </tr>
            </table>
            <h4 class="alert alert-primary">Se {{alumnosIngresados.length > 1 ? 'encontraron' : 'encontro'}} {{alumnosIngresados.length}} {{alumnosIngresados.length > 1 ? 'notas' : 'nota'}}</h4>
        </div>
        <h4 v-else class="alert alert-danger">No se encontraron notas</h4>
        </div>
    </section>
</template>

<script lang="js">

export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      notaMin : 0,
      notaMax : 10,
      acumNotas: 0,
      contAlumnos: 0,
      alumnosIngresados: []
    }
  },
  computed: {
      prom: function getProm() {
        return (this.acumNotas / this.contAlumnos).toFixed(2)
      }
  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: '',
      }    
    },

    getColor(valor){
      return valor >= 7 ? 'green' : valor >= 4  ? 'yellow' : 'red'
    },

    enviar() {
      this.contAlumnos++
      this.acumNotas += this.formData.nota
      this.alumnosIngresados.push({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}



</script>

<style>
.jumbotron {
  background-color: rgb(106, 106, 168);
  color: white;
}

hr {
  background-color: #eee;
}

</style>

