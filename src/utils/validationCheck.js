export function emailCheck(email) {
  let regExpEmailCheck = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  return regExpEmailCheck.test(email);
}

export function passwordCheck(pass) {
  return (pass.length > 3);
}