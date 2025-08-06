<template>
  <Layout title="AEG - Junta Directiva">
    <h1 class="text-center mb-4">Junta Directiva</h1>
    <div class="row g-4">
      <div v-for="member in juntaDirectiva" :key="member.id" class="col-md-4">
        <div class="profile-card text-center">
          <img :src="member.image" :alt="member.name" class="img-fluid" />
          <h5>{{ member.position }}</h5>
          <p>{{ member.name }}</p>
        </div>
      </div>
    </div>
    <div class="row g-4 mt-5 justify-content-center">
      <div v-for="member in cse" :key="member.id" class="col-md-4 text-center">
        <div class="profile-card">
          <img :src="member.image" :alt="member.name" class="img-fluid" />
          <h5>{{ member.position }}</h5>
          <p>{{ member.name }}</p>
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
  name: 'JuntaDirectiva',
  data() {
    return {
      juntaDirectiva: [
        { id: 1, position: 'Presidencia', name: 'Brandon Fabián Quesada Álvarez', image: '@/assets/persona.png' },
        { id: 2, position: 'Vicepresidencia', name: 'Ayda María Fonseca Fonseca', image: '@/assets/persona.png' },
        { id: 3, position: 'Tesorería', name: 'Sin Representación', image: '@/assets/persona.png' },
        { id: 4, position: 'Secretaría General', name: 'Ericka Alexandra Jimenez Naranjo', image: '@/assets/persona.png' },
        { id: 5, position: 'Secretaría de Comunicación', name: 'Maholy Nicole Valle Pereira', image: '@/assets/persona.png' },
        { id: 6, position: 'Secretaría de Deportes y Cultura', name: 'Anthony Gerardo Gutiérrez Pizarro', image: '@/assets/persona.png' },
        { id: 7, position: 'Fiscalía', name: 'Erick Dilan Viales Ruiz', image: 'cpersona.png' },
        { id: 8, position: 'Vocalía 1', name: 'Gabriel López Arrieta', image: '@/assets/persona.png' },
        { id: 9, position: 'Vocalía 2', name: 'Sin representación', image: '@/assets/persona.png' },
      ],
      cse: [
        { id: 1, position: 'Titular del CSE', name: 'Olger David Urtecho Oporta', image: '@/assets/persona.png' },
        { id: 2, position: 'Suplencia del CSE', name: 'Kembly Tatyana Camacho Rizo', image: '@/assets/persona.png' },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos CSS del archivo `junta-directiva.blade.php` */
.profile-card img {
    width: 180px;
    height: 240px;
    object-fit: cover;
    border: 5px solid #006400;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.profile-card img:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}
.profile-card h5 {
    color: #004c40;
    font-weight: bold;
    margin-top: 20px;
    font-size: 1.1rem;
}
.profile-card p {
    color: #555;
    font-size: 0.9rem;
    margin-top: 10px;
}
h1 {
    color: #006400;
    font-weight: bold;
}
</style>