<template>
  <Layout title="AEG - Inicio">
    <section class="elegant-section">
      <h2 class="elegant-title">
        <i class="fas fa-users icon"></i> Conoce la Junta Directiva
      </h2>
      <p class="elegant-description">
        Descubre quiénes forman parte de la Junta Directiva de la AEG y qué roles desempeñan.
      </p>
      <a href="/junta-directiva" class="btn btn-outline-secondary btn-elegant">Ver Junta Directiva</a>
    </section>

    <hr class="elegant-divider" />

    <section class="elegant-section">
      <h2 class="elegant-title">
        <i class="fas fa-sitemap icon"></i> Órganos de la Asociación
      </h2>
      <p class="elegant-description">
        Explora los órganos que conforman la estructura organizativa de la AEG.
      </p>
      <a href="/organos" class="btn btn-outline-info btn-elegant">Ver Órganos</a>
    </section>

    <hr class="elegant-divider" />

    <section class="elegant-section">
      <h2 class="elegant-title">
        <i class="fas fa-gavel icon"></i> Normativa
      </h2>
      <p class="elegant-description">
        Conoce las normativas que rigen la Asociación de Estudiantes de Guanacaste.
      </p>
      <a href="/normativa" class="btn btn-outline-success btn-elegant">Ver Normativa</a>
    </section>
    <hr class="elegant-divider" />
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue';

export default {
  components: {
    Layout
  },
  name: 'Welcome',
};
</script>