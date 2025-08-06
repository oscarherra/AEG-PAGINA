import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Welcome.vue';
import JuntaDirectiva from '../views/JuntaDirectiva.vue';
import Organos from '../views/Organos.vue';
import Normativa from '../views/Normativa.vue';
import Asambleistas from '../views/Asambleistas.vue';
import Asociaciones from '../views/Asociaciones.vue';
import Defensoria from '../views/Defensoria.vue';
import Teeg from '../views/Teeg.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/junta-directiva', name: 'JuntaDirectiva', component: JuntaDirectiva },
  { path: '/organos', name: 'Organos', component: Organos },
  { path: '/normativa', name: 'Normativa', component: Normativa },
  { path: '/asambleistas', name: 'Asambleistas', component: Asambleistas },
  { path: '/asociaciones', name: 'Asociaciones', component: Asociaciones },
  { path: '/defensoria', name: 'Defensoria', component: Defensoria },
  { path: '/teeg', name: 'Teeg', component: Teeg },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;