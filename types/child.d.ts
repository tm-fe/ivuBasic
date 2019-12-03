import { PluginFunction } from 'vue';

interface Child extends PluginFunction<any> {}

declare const iChild: Child;
export default iChild;