import { Produto } from './produto.entity';

export const produtosProviders = [{
    provide: 'PRODUTO_REPOSITORY',
    useValue: Produto,
}]