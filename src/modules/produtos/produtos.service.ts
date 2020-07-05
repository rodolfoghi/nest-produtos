import { Injectable, Inject } from '@nestjs/common';
import { Produto } from './produto.entity';
import { ProdutoDto } from './produto.dto';

@Injectable()
export class ProdutosService {
    constructor(@Inject('PRODUTO_REPOSITORY') private readonly produtoRepository: typeof Produto) { }

    async buscaTodos(): Promise<Produto[]> {
        return this.produtoRepository.findAll();
      }
    
      async buscaUm(id: number): Promise<Produto> {
        return this.produtoRepository.findOne({
          where: {
            id,
          },
        });
      }
    
      async remove(id: number): Promise<void> {
        const produto = await this.buscaUm(id);
        await produto.destroy();
      }
    
      async cria(produto: ProdutoDto): Promise<Produto> {
        return this.produtoRepository.create<Produto>(produto);
      }
    
      async atualiza(id: number, produto: ProdutoDto): Promise<void> {
        this.produtoRepository.update<Produto>(produto, {
          where: {
            id: id
          }
        });
      }
}
