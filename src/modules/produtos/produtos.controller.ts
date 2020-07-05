import { Controller, Param, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { ProdutoDto } from './produto.dto';

@Controller('produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutosService) {}

    @Get()
    async buscaTodos(): Promise<Produto[]> {
        return this.produtoService.buscaTodos();
    }

    @Get(':id')
    async buscaUm(@Param('id') id: number) : Promise<Produto> {
        return this.produtoService.buscaUm(id);
    }

    @Post()
    async cria(@Body() produto: ProdutoDto): Promise<Produto> {
        return this.produtoService.cria(produto);
    }

    @Put(':id')
    async atualiza(@Param('id') id: number, @Body() produto: ProdutoDto) {
        this.produtoService.atualiza(id, produto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        this.produtoService.remove(id);
    }
}
