import { init,classModule, propsModule, styleModule, eventListenersModule,h } from 'snabbdom';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

export { patch };
