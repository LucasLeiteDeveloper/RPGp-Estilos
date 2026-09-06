__README incompleto__

# RPGp Estilos

Carregue estilos personalizados para sua ficha universal na [RPGpedia]().

## Como eu instalo a extensão?

### Navegadores baseados em Chrome

1. Baixe a [versão mais recente do projeto]()
2. Vá para a página de extensões do seu navegador - ou acesse `chrome://extensions`
3. Ative o **modo desenvolvedor** nas página de extensões
4. Arraste o arquivo da extensão para dentro da janela do Chrome

### Navegadores baseados em Firefox ou Edge

A extensão ainda não tem suporte para esses navegadores.

## Como eu uso um estilo personalizado?

Você precisa de um arquivo .css com o estilo que você quer utilizar. Com esse arquivo em mãos, é só entrar na sua ficha universal, clicar no pincel da barra lateral, clicar no botão de importar estilo e selecionar seu arquivo.

### Aonde posso encontrar novos estilos?

Você pode baixar esse [estilo de exemplo]() para testar a extensão.

Atualmente não há uma grande variedade de estilos feitos pela comunidade, mas caso queira achar algum você pode tentar procurar no [servidor do Discord da RPGpedia]()

## Como eu crio meu próprio estilo?

Para criar seu próprio estilo você vai precisar ter conhecimentos básicos sobre CSS e das ferramentas de desenvolvedor do seu navegador. Utilizando as ferramentas de desenvolvedor você pode ver as classes de um elemento da ficha e o estilo dele. Com essas informações você pode usar o nome da classe em um arquivo .css e fazer as alterações que desejar naquele elemento.

> [!WARNING]
> Devido as regras **Regras de Divulgação de Extensões** os estilos que você for criar para a extensão não podem alterar quaisquer customizações comerciáveis da plataforma, como fundo das fichas, bandeja de dados, ou moldura de perfil. Resumindo, **não é possível utilizar imagens** ou **não é possivel importar fontes de texto**.

## Erros Conhecidos

### Estilos conseguem alterar a interface da extensão

Alguns estilos que modificam classes que são usadas tanto na ficha universal quanto interface da extensão acabam alterando a aparência da interface, podendo gerar erros visuais e até impedir o funcionamento correto da extensão (escondendo botões cruciais por exemplo).

## Tecnologias Utilizadas
Para criar essa extensão foi utilizado o framework WXT + Vue.