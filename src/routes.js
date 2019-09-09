// Import Parent Compontents
import Home                 from './components/home/home.vue';
import Styleguide           from './components/styleguide/styleguide.vue';
// Export routes as named constant array.
// Routes consist of desired path + bound parent component
export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/styleguide',
    component: Styleguide
  }
];
