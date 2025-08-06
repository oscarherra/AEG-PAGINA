import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Welcome.vue';
import JuntaDirectiva from '../views/JuntaDirectiva.vue';
import Organos from '../views/Organos.vue';
import Normativa from '../views/Normativa.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/junta-directiva', name: 'JuntaDirectiva', component: JuntaDirectiva },
  { path: '/organos', name: 'Organos', component: Organos },
  { path: '/normativa', name: 'Normativa', component: Normativa },
  // Agregue aquí las demás rutas para los otros componentes migrados
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;