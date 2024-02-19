import { h } from 'snabbdom';
import { patch } from '../utils/snabbdomHelpers'; // Assuming you have a separate file for snabbdomHelpers

function UIComponent({ template }) {
  let state = { count:0 };
  let vnode = null;
  let root = null;

  function updateState(newState) {
    state = { ...state, ...newState };
    render();
  }

  function render() {
    const newVnode = template(state, {updateState});
    if (!vnode) {
      vnode = newVnode;
      root = document.createElement('div');
      root.append(vnode.elm);
      document.getElementById('app').append(root);
    } else {
      const newRoot = document.createElement('div');
      newRoot.append(newVnode.elm);
      root.parentNode.replaceChild(newRoot, root);
      root = newRoot;
    } 
  }

  return { updateState, render ,state };
}

export default UIComponent;
