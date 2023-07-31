import { EventEmitter } from "events";
//这个单例的对象充当全局事件总线的角色
export default new EventEmitter();