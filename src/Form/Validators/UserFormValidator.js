const validate = values => {
  const errors = {}
  if (!values.username) {
      errors.username = 'Required'
  } else if (values.username.length > 8) {
      errors.username = 'user name be 8 characters or less'
  }
  if (!values.email) {

      errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
  }
  if (!values.age) {
      errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
      errors.age = 'age must be a number'
  } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 13 years old'
  }
  return errors
}

  export default validate