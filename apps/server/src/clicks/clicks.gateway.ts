import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ClicksService } from './clicks.service';
import { Namespace } from 'socket.io';

@WebSocketGateway({ namespace: 'clicks' })
export class ClicksGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(ClicksGateway.name);
  constructor(private readonly clicksService: ClicksService) {}

  @WebSocketServer() io: Namespace;

  afterInit() {
    this.logger.log('Websocket gateway initialized');
  }

  async handleConnection() {
    const sockets = this.io.sockets;
    this.logger.log(`Socket connected with user`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
  }

  async handleDisconnect() {
    const sockets = this.io.sockets;
    this.logger.log(`Socket disconnected with user`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
  }

  @SubscribeMessage('click')
  async click(@MessageBody('choice') choice: string) {
    this.logger.debug(`click, ${choice}`);

    this.clicksService.click(choice);

    this.io.emit('click', choice);
  }
}
