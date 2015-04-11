export default (input)=>
  input
    .replace(/(\d) x (\d)/gim, '$1 × $2')
    .replace(/(\d) - (\d)/gim, '$1 − $2');
