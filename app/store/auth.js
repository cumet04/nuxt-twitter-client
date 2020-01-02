export const state = () => ({
  token: '',
  secret: ''
})

export const mutations = {
  set(state, obj) {
    state.token = obj.token
    state.secret = obj.secret
  }
}
