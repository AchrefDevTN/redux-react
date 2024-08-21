export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
