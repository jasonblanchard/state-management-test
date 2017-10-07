export default function(context, methods) {
  return Object.keys(methods).reduce((boundMethods, method) => {
    boundMethods[method] = methods[method].bind(context);
    return boundMethods;
  }, {});
}
