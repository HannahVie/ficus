# Home Module

Este módulo representa a página **/home** do site.

## Regras específicas (formulário)
- **Nome**: apenas letras (inclui acentos), espaço, apóstrofo e hífen.
- **E-mail**: precisa seguir o padrão de e-mail válido.
- **Telefone**: formatado automaticamente enquanto digita e aceita somente números, no formato `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`.
- **Mensagem**: mínimo de 10 caracteres.
- **Validação**: os balões aparecem apenas quando o campo está inválido e já foi tocado.
- **Envio**: botão fica desativado enquanto o formulário for inválido.

## Implementação
- Template: `home.component.html`
- Lógica de validação/formatos: `home.component.ts`
- Estilos globais: `src/styles.css`
