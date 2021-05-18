
export const signUp = (data) => {
  return fetch('/api/users/signup', { method: 'POST'});
}
