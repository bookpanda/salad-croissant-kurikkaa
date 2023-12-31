import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ClicksService } from './clicks.service';
import { Namespace, Socket } from 'socket.io';

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

  async handleConnection(client: Socket) {
    const sockets = this.io.sockets;
    this.logger.log(`Socket connected with user`);
    this.logger.debug(`Number of connected sockets: ${sockets.size}`);
    client.emit('update', await this.clicksService.getScores());
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

    const newScores = await this.clicksService.getScores();
    this.io.emit('update', newScores);
  }
}
