export const resourcesEndpoints = {
  //unprotected
  login: '/auth/login',
  logout: '/auth/logout',
  authenticated: '/auth/is-authenticated',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',

  //authn +/- authz protected
  permissions: '/permissions'
}
