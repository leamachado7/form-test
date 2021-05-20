
export const checkEmail = email => {
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !!email.match(regex)
}
export const validateForm = (form, requiredFields) => {
  const errors = {}
  Object.keys(form).forEach( i => {
    requiredFields.forEach(j => {
      if(i === j){
        const v = form[j]
        let e = 'This field cant be empty'
        if(!v)
        {
          errors[i] = e
        }
        if(i === 'email'){
          if(!checkEmail(v)){
            e = 'Email is invalid'
            errors[i] = e;
          }
        }
      }
    })
  })
  return errors
}