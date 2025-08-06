<template>
  <Layout title="AEG - Asambleístas">
    <div class="container-fluid mt-5 mb-5">
      <h1 class="text-center mb-5">Asambleístas</h1>

      <div class="row g-4 text-center justify-content-center align-items-stretch">
        <div v-for="assembly in assemblies" :key="assembly.name" class="col-lg-4 col-md-6 d-flex flex-column">
          <div class="card shadow-lg border-0 h-100 mb-5">
            <div class="card-header text-white" style="background-color: #28a745">
              <h3 class="mb-0">{{ assembly.name }}</h3>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped table-hover mb-0">
                  <thead style="background-color: #28a745; color: white">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Carné</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(member, index) in assembly.members" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ member.name }}</td>
                      <td>{{ member.card }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';

export default {
  components: {
    Layout
  },
  name: 'Asambleistas',
  data() {
    const members = [
      { name: 'OSCAR ANDRES HERRA ABARCA', card: 'C13719' },
      { name: 'MAHOLY NICOLE VALLE PEREIRA', card: 'C18058' },
      { name: 'BRANDON FABIAN QUESADA ALVAREZ', card: 'C16085' },
      { name: 'KEMBLY TATYANA CAMACHO RIZO', card: 'C11496' },
      { name: 'FABRICIO ALVAREZ VALVERDE', card: 'C4C421' },
      { name: 'XIMENA CENTENO RODRIGUEZ', card: 'C21976' },
      { name: 'ERICKA ALEXANDRA JIMENEZ NARANJO', card: 'C24066' },
      { name: 'GABRIEL LOPEZ ARRIETA', card: 'C24322' },
      { name: 'MARCO VINICIO VARGAS AVILA', card: 'C28096' },
      { name: 'ESTIVEN JESUS GONZALEZ MURILLO', card: 'C29012' },
      { name: 'JUAN ELIAS AVILA ELIZONDO', card: 'C10783' },
      { name: 'ANTHONY GERARDO GUTIERREZ PIZARRO', card: 'C23635' },
      { name: 'BYRON RODOLFO NAVARRETE ZUÑIGA', card: '' },
    ];

    return {
      assemblies: [
        { name: 'Asamblea de Sede', members },
        { name: 'Asamblea Colegiada', members },
        { name: 'Asamblea Plebiscitaria', members },
      ],
    };
  },
};
</script>