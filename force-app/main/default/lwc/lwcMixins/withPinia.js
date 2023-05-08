
export function withPinia(
  stores = {},
  lightningElementCls
) {
  const subscriptions = new WeakMap();

  return class extends lightningElementCls {
      connectedCallback() {
          for (let [storeId, store] of Object.entries(stores)) {
              this.$$unsubscribe = store.$subscribe((action, state) => {
                  this[storeId] = { ...state };
              });
  
              if (subscriptions.has(this)) {
                  const currentSubscriptions = subscriptions.get(this) || [];
                  currentSubscriptions.push(this.$$unsubscribe);
                  // No need to set map again, because array mutated by reference
              } else {
                  subscriptions.set(this, [this.$$unsubscribe]);
              }
          }
      }

      disconnectedCallback() {
          const unsubscribeFns = subscriptions.get(this);

          if (Array.isArray(unsubscribeFns)) {
              unsubscribeFns.forEach(unsibscribeFn => {
                  if (typeof unsibscribeFn === 'function') {
                      unsibscribeFn();
                  }
              });
          }
      }
  };
}