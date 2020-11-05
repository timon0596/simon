import Vue from 'vue';
import app from './app.vue';

const faviconsContext = require.context(
  '!!file-loader?name=icon/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml|json)$/,
);
faviconsContext.keys().forEach(faviconsContext);

require.context('../audio', false, /.wav$/);
new Vue({
  el: '.app',
  render: (h) => h(app),
});
