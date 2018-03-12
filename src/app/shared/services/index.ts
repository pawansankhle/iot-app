import { MessageService } from './message.service';
import { ConfigService } from './config.service';
import { HttpClientService } from './http.service';
import { ErrorEventHandlerService } from './error.event.handler.service';
import { MenuService } from './menu.service';


export * from './config.service';
export * from './message.service';
export * from './http.service';
export * from './error.event.handler.service';
export * from './menu.service';
export * from './error.message.service';
export * from './location.service';

export const Services = [
  ConfigService,
  MessageService,
  HttpClientService,
  ErrorEventHandlerService,
  MenuService
];
