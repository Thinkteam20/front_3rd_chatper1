export function createElement(vNode) {
  console.log(vNode)

  if (!vNode) {
    return document.createTextNode('');
  }

  if (typeof vNode === 'string' || typeof vNode === 'number') {
    return document.createTextNode(vNode);
  }

  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach(child => fragment.appendChild(createElement(child)));
    return fragment;
  }

  if (typeof vNode.type === 'function') {
    const componentVNode = vNode.type(vNode.props || {});
    return createElement(componentVNode);
  }

  const element = document.createElement(vNode.type);

  const { props = {} } = vNode;

  for (const [key, value] of Object.entries(props)) {
    if (key === 'className') {
      element.className = value;
    }
    else if (key.startsWith('on') && typeof value === 'function') {
      const eventType = key.slice(2).toLowerCase();
      element.addEventListener(eventType, value);
    }
    else {
      element.setAttribute(key, value);
    }
  }

  const { children = [] } = vNode;
  children.forEach(child => {
    element.appendChild(createElement(child));
  });

  return element;
}
