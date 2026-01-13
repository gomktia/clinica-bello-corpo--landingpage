# Atualizações da Landing Page

Realizei diversas melhorias e inovações na sua landing page para a Clínica Estética Bello Corpo.

## Principais Mudanças

1.  **Integração com Banco de Dados (Supabase)**:
    *   O formulário agora salva os leads automaticamente na tabela `leads` do Supabase.
    *   Caso as credenciais não estejam configuradas, ele simula o salvamento para demonstração.

2.  **Redirecionamento Automático para WhatsApp**:
    *   Após o cadastro, o usuário vê uma animação de verificação e é redirecionado para o Grupo VIP no WhatsApp.
    *   O link do grupo pode ser configurado via variável de ambiente.

3.  **Visual Premium e Efeitos (Inovação)**:
    *   **Efeito Parallax/Ken Burns**: A imagem de fundo na seção Hero agora tem um movimento suave e contínuo de zoom/respiração.
    *   **Confetti**: Uma animação de celebração ocorre quando o usuário se inscreve.
    *   **Elementos Flutuantes**: Animações sutis nos textos para dar mais dinamismo.

4.  **UX Aprimorada**:
    *   Feedback visual imediato com "Toasts" (mensagens de sucesso/erro).
    *   Campos do formulário são desabilitados durante o envio para evitar duplicação.

## Configuração Necessária

Para que a integração com o Supabase e o Link do WhatsApp funcionem plenamente, você deve configurar o arquivo `.env`.

1.  Criei um arquivo `.env.example`. Renomeie-o para `.env` (ou crie um novo `.env` com base nele).
2.  Preencha as variáveis:

```env
VITE_SUPABASE_URL=sua-url-do-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anonima-do-supabase
VITE_WHATSAPP_GROUP_URL=https://chat.whatsapp.com/SEU_LINK_AQUI
```

## Tabela no Supabase

Se você estiver usando o Supabase, crie uma tabela chamada `leads` com as colunas:
- `id` (int8, primary key)
- `created_at` (timestamptz)
- `name` (text)
- `email` (text)
- `phone` (text)
- `specialty` (text)
