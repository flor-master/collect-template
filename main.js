const form = VGSCollect.create("tntudjqjiuy", "sandbox", (state) => {});
// form.useCname("flor-test-collect.verygoodsecurity.io");

form.field("#field", {
  type: "text",
  name: "name",
  placeholder: "qweqwe",
  validations: [
    'required',
    '/^\\d+/g',
  ],
});
document.getElementById("app").addEventListener("submit", (event) => {
  event.preventDefault();
  form.submit("/post", {}, (status, data) => {
    console.log(data);
  }, (error) => {
    console.log('ERROR', error)
  });
});
