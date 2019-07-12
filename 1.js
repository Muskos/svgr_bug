function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  return template.ast`
      ${jsx}
  
      ${exports}
    `;
}

module.exports = template;
