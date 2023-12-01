export function renderElement(virtualDom) {
  if (typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }

  const element = document.createElement(virtualDom.type);

  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }

  virtualDom.children.forEach(child => {
    element.appendChild(renderElement(child));
  });

  return element;
}

export function render(virtualDom, containerId) {
  const container = document.getElementById(containerId);
  container.appendChild(renderElement(virtualDom));
}