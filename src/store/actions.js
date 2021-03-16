import { nextTick } from 'vue';

export default {
    async setLoading({ commit }, value) {
        commit('setLoading', value);
        return new Promise((resolve) => nextTick(resolve));
    },
};
