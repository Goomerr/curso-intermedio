import EventEmitter from "eventemitter3";
import { params as paramsCard } from "../aleatorio";

export const emiter: EventEmitter<string | symbol, any> = new EventEmitter();

export const emittedId = (id: string) => emiter.emit("click", id);

export const emittedData = (data: paramsCard[]) => emiter.emit("data", data);
