<template>
  <Layout title="AEG - TEEG">
    <div class="container mt-5 mb-5">
      <div class="text-center mb-5">
        <h1>Tribunal Electoral Estudiantil</h1>
      </div>

      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-md-4 text-center">
          <img
            src="@/assets/teeg.jpg"
            alt="Tribunal Electoral Estudiantil"
            class="img-fluid mb-3"
            style="max-height: 300px; object-fit: contain"
          />
        </div>
        <div class="col-md-6">
          <p class="lead">
            El Tribunal Electoral Estudiantil (TEEG) es responsable de garantizar la transparencia y
            legalidad en los procesos electorales estudiantiles, asegurando la participación
            democrática de los estudiantes en todos los ámbitos de la Universidad.
          </p>
          <div>
            <a href="mailto:teeg@ucr.ac.cr" class="btn btn-primary btn-lg mb-2 d-block">
              <i class="fas fa-envelope"></i> teeg@ucr.ac.cr
            </a>
            <a href="tel:+50625115380" class="btn btn-success btn-lg d-block">
              <i class="fas fa-phone"></i> Teléfono: +506 2511-5380
            </a>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <h2 class="text-center mb-4">Pleno</h2>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card shadow-lg border-0">
            <div class="card-header text-white" style="background-color: #28a745">
              <h3 class="mb-0 text-center">Miembros del Tribunal</h3>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped table-hover mb-0 text-center">
                  <thead style="background-color: #28a745; color: white">
                    <tr>
                      <th>Puesto</th>
                      <th>Nombre</th>
                      <th>Carné</th>
                      <th>Correo Electrónico</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(member, index) in tribunalMembers" :key="index">
                      <td>{{ member.position }}</td>
                      <td>{{ member.name }}</td>
                      <td>{{ member.card }}</td>
                      <td>{{ member.email }}</td>
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
  name: 'Teeg',
  data() {
    return {
      tribunalMembers: [
        { position: 'Presidencia', name: '', card: '', email: '' },
        { position: 'Vicepresidencia', name: '', card: '', email: '' },
        { position: 'Secretaría', name: '', card: '', email: '' },
        { position: 'Tesorería', name: '', card: '', email: '' },
        { position: 'Fiscalía', name: '', card: '', email: '' },
        { position: 'Suplencia I', name: '', card: '', email: '' },
        { position: 'Suplencia II', name: '', card: '', email: '' },
      ],
    };
  },
};
</script>