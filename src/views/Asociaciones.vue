<template>
  <Layout title="AEG - Asociaciones de carrera">
    <h1 class="text-center mt-4 mb-4">Asociaciones de Carrera</h1>

    <div class="row justify-content-center">
      <div v-for="(association, index) in associations" :key="index" class="col-lg-8 col-md-10">
        <div class="card shadow-lg border-0 mb-4">
          <div class="card-header text-white text-center" style="background-color: #28a745">
            <h3 class="mb-0">{{ association.name }}</h3>
          </div>
          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead class="text-white" style="background-color: #28a745">
                  <tr>
                    <th scope="col">Puesto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Carné</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(member, memberIndex) in association.members" :key="memberIndex">
                    <td>{{ member.position }}</td>
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
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';

export default {
  components: {
    Layout
  },
  name: 'Asociaciones',
  data() {
    return {
      associations: [
        {
          name: 'Educación Primaria',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Aduanas y Comercio Exterior',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Psicología',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Salud Ambiental',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Derecho',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Informática Empresarial',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Educación Inicial y Primera Infancia',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Inglés',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
        {
          name: 'Ingenería en Alimentos',
          members: [
            { position: 'Presidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vicepresidencia', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Tesorería', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Secretaría', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Fiscalía', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía I', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Vocalía II', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Titularidad del CAC', name: 'Pendiente', card: 'Pendiente' },
            { position: 'Suplencia del CAC', name: 'Pendiente', card: 'Pendiente' },
          ]
        },
      ],
    };
  },
};
</script>