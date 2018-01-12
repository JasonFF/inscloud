import _ from 'lodash'
import initialState from './initialState'
import fetch from 'isomorphic-fetch'
import Vue from 'vue'

const baseUrl = 'https://www.easy-mock.com/mock/5a57283085b0e15d8db5239e/instrumentCloud'

const TREEADD = 'TREEADD'
const state = initialState

const getters = {
    tree: state => state
}

const actions = {
    action ({ commit }, data) {
        commit(TREEADD, data)

        if (data.method && data.url) {
            return fetch(baseUrl + data.url, {
                method: data.method,
                headers: data.headers
            }).then(res => res.json()).then(res => {
                data.goods = _.extend({}, data.goods, res.data)
                commit(TREEADD, data)
            })
        }
    }
}

const mutations = {
    [TREEADD] (state, data) {
        Vue.set(state, data.moduleName, _.merge(state[data.moduleName], data.goods))
        console.group('tree')
        console.log('action', data)
        console.log('state', state)
        console.groupEnd('end')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
