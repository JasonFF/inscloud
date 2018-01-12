import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StatisticsMap from '@/containers/StatisticsMap/StatisticsMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/statistics_map',
      name: 'StatisticsMap',
      component: StatisticsMap
    }
  ]
})
