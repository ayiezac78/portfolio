import {
  init_buffer,
  init_process
} from "./chunk-LMVA6OK4.js";

// node_modules/.pnpm/vue-demi@0.14.7_vue@3.4.26/node_modules/vue-demi/lib/index.mjs
init_process();
init_buffer();
var isVue2 = false;
var isVue3 = true;
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}

export {
  isVue2,
  isVue3,
  set,
  del
};
//# sourceMappingURL=chunk-UXCEK6M7.js.map
