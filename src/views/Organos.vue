<template>
  <Layout title="AEG - Órganos">
    <h1 class="text-center mb-4">Órganos de la AEG</h1>
    <div class="row g-5 text-center align-items-stretch">
      <div v-for="organo in organosAEG" :key="organo.name" class="col-md-4 d-flex flex-column align-items-center">
        <a :href="organo.route" style="text-decoration: none">
          <img
            :src="organo.image"
            :alt="organo.name"
            class="img-fluid mb-3"
            style="max-height: 200px; object-fit: contain"
          />
          <h4>{{ organo.title }}</h4>
        </a>
        <p class="text-justify">
          {{ organo.description }}
        </p>
      </div>
    </div>

    <h1 class="text-center mb-4">Órganos de la Sede</h1>
    <div class="row g-5 text-center align-items-stretch">
      <div
        v-for="organo in organosSede"
        :key="organo.name"
        class="col-md-4 d-flex flex-column align-items-center"
      >
        <a :href="organo.route" style="text-decoration: none">
          <img
            :src="organo.image"
            :alt="organo.name"
            class="img-fluid mb-3"
            style="max-height: 200px; object-fit: contain"
          />
          <h4>{{ organo.title }}</h4>
        </a>
        <p class="text-justify">
          {{ organo.description }}
        </p>
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
  name: 'Organos',
  data() {
    return {
      organosAEG: [
        {
          name: 'Tribunal Electoral Estudiantil',
          title: 'Tribunal Electoral Estudiantil de Guanacaste (TEEG)',
          description:
            'Responsable de garantizar la transparencia y legalidad en los procesos electorales estudiantiles, asegurando la participación democrática de los estudiantes.',
          image: '/assets/teeg.jpg',
          route: 'teeg',
        },
        {
          name: 'Defensoría Estudiantil',
          title: 'Defensoría Estudiantil (DEFEU)',
          description:
            'La Defensoría Estudiantil Universitaria constituye un órgano esencial de protección y apoyo para los estudiantes. Su función central es velar por la defensa de los derechos estudiantiles, ofreciendo asesoría especializada y acompañamiento integral ante cualquier conflicto, situación o problemática que pueda afectarles en su desarrollo académico y personal dentro del ámbito universitario.',
          image: '/assets/defeu.jpeg',
          route: 'defensoria',
        },
        {
          name: 'Asambleístas',
          title: 'Asambleístas',
          description:
            'Los representantes estudiantiles que participan en las asambleas de la asociación, proponiendo y tomando decisiones en beneficio del estudiantado.',
          image: '/assets/AE.png',
          route: 'asambleistas',
        },
      ],
      organosSede: [
        {
          name: 'Asociaciones de Estudiantes',
          title: 'Asociaciones de Carreras',
          description:
            'Responsable de garantizar la transparencia y legalidad en los procesos electorales estudiantiles, asegurando la participación democrática de los estudiantes.',
          image: '/assets/aso.jpg',
          route: 'asociaciones',
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #006400;
  font-weight: bold;
}
h4 {
  color: #004c40;
  font-weight: bold;
  margin-top: 10px;
}
.text-justify {
  text-align: justify;
}
.img-fluid {
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border: 3px solid #006400;
  transition: transform 0.3s;
}
.img-fluid:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 12px rgba(0,0,0,0.25);
}
</style>