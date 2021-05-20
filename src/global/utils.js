
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
      }
    })
  })
  return errors
}
export const checkName = name => {
  const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
  return !!name.trim().match(regex)
}
