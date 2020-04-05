import clientEventEmitter from "../InteractionEventHandler";
import serverEventEmitter from "../../alt-server/InteractionEventHandler";

export const onServer = (eventName: string, callBack: any) => {
  clientEventEmitter.on(eventName, callBack);
};

export const emitServer = (eventName: string, ...data: any[]) => {
  serverEventEmitter.emitServerEvent(eventName, ...data);
};
