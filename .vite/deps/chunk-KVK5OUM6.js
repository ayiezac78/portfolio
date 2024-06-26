import {
  init_buffer,
  init_process
} from "./chunk-LMVA6OK4.js";

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/index.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/env.js
init_process();
init_buffer();
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
var isProxyAvailable = typeof Proxy === "function";

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/const.js
init_process();
init_buffer();
var HOOK_SETUP = "devtools-plugin:setup";
var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/proxy.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/time.js
init_process();
init_buffer();
var supported;
var perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/proxy.js
var ApiProxy = class {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target) {
    this.target = target;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
};

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/index.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/api.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/app.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/component.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/context.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/hooks.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/api/util.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/plugin.js
init_process();
init_buffer();

// node_modules/.pnpm/@vue+devtools-api@6.6.1/node_modules/@vue/devtools-api/lib/esm/index.js
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}

export {
  setupDevtoolsPlugin
};
//# sourceMappingURL=chunk-KVK5OUM6.js.map
