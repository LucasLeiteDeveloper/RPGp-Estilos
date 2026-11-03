# RPGp Estilos

Carregue estilos personalizados para sua ficha universal na [RPGpedia](https://rpgpedia.com).

## Como eu instalo a extensão?

### Navegadores baseados em Chrome

1. Baixe a [versão mais recente do projeto](https://github.com/LucasLeiteDeveloper/RPGp-Estilos/releases/download/v1.1.0-b/rpgp-estilos-1.1.0-b.zip)
2. Vá para a página de extensões do seu navegador ou acesse `chrome://extensions`
3. Ative o **modo desenvolvedor** na página de extensões
4. Arraste o arquivo da extensão para dentro da janela do Chrome

### Navegadores baseados em Firefox ou Edge

A extensão ainda não tem suporte para esses navegadores.

## Como eu uso um estilo personalizado?

Você precisa de um arquivo .css com o estilo que você quer utilizar. Com esse arquivo em mãos, é só entrar na sua ficha universal, clicar no pincel da barra lateral, clicar no botão de importar estilo e selecionar seu arquivo.

### Onde posso encontrar novos estilos?

Você pode usar esse [estilo de exemplo](https://github.com/LucasLeiteDeveloper/RPGp-Estilos/blob/master/extensionstyles/rpgpmenor.css) para testar a extensão.

Atualmente não há uma grande variedade de estilos feitos pela comunidade, mas caso queira achar algum você pode tentar procurar no [servidor do Discord da RPGpedia](https://discord.gg/fa6W4n9jMY)

## Como eu crio meu próprio estilo?

Para criar seu próprio estilo você vai precisar ter conhecimentos básicos sobre CSS e das ferramentas de desenvolvedor do seu navegador. Utilizando as ferramentas de desenvolvedor você pode ver as classes de um elemento da ficha e o estilo dele. Com essas informações você pode usar o nome da classe em um arquivo .css e fazer as alterações que desejar naquele elemento.

**Não utilize !important no CSS**, a extensão adiciona automaticamente !important para todas as linhas quando ela é selecionada. Tentar adicionar !important em uma linha irá inutilizá-la.

> [!WARNING]
> Devido às regras **Regras de Divulgação de Extensões** disponíveis no [servidor do Discord da RPGpedia](https://discord.gg/fa6W4n9jMY), as extensões não podem alterar quaisquer customizações comerciáveis da plataforma, como fundo das fichas, bandeja de dados, ou moldura de perfil.
>
> Para seguir essas diretrizes, os estilos **não podem conter imagens, fontes ou qualquer forma de importação de conteúdo**. Se tentar importar um estilo que não respeite essas regras, a extensão não deixará você importar ou usar ele.

## Roadmap de Atualizações

Algumas funcionalidades que podem vir futuramente.

### Estilo fixo para cada ficha

Atualmente o estilo que estiver selecionado é aplicado em todas as fichas universais. Mas isso será alterado para que cada ficha lembre qual estilo está sendo usado nela, assim os usuários podem usar estilos que são feitos para uma ficha específica sem que isso afete as outras fichas.

### Imagens como capa de estilo

Opção para selecionar uma imagem como capa para seu estilo - similar a como funciona a foto na ficha universal - facilitando a distinção entre os estilos.

### Facilitar a criação de estilos

Uma interface para editar componentes da ficha sem a necessidade de mexer diretamente com CSS, não espere isso para nenhum momento próximo.

### Qualidade de Vida

Funcionalidades menores que melhorem a experiência do usuário como: confirmação dupla para deletar estilos, seleção de múltiplos estilos para excluir em grupo, mostrar as classes dos componentes da ficha universal no Inventário de Seções, entre outros.

## Erros Conhecidos

### Estilos conseguem alterar a interface da extensão

Alguns estilos que modificam classes que são usadas tanto na ficha universal quanto na interface da extensão acabam alterando a aparência da interface, podendo gerar erros visuais e até impedir o funcionamento correto da extensão (escondendo botões cruciais, por exemplo).

## Tecnologias Utilizadas
Essa extensão utiliza o framework WXT + Vue.
