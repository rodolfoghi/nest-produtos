import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { produtosProviders } from './produtos.provider';
import { ProdutosController } from './produtos.controller';

@Module({
  providers: [ProdutosService, ...produtosProviders],
  exports: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
