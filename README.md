# Alto Mourão Empreendimentos Imobiliários - Site Institucional (V1)

Website institucional estático da **Alto Mourão Empreendimentos Imobiliários**, otimizado para alta conversão, responsividade móvel e publicação simplificada no **GitHub Pages**.

---

## 🏛️ Identidade Visual e Inspiração

- **Origem da Marca:** Inspirada no **Alto Mourão** (popularmente conhecido como *Pedra do Elefante*), marco geográfico de 412m situado na divisa de Niterói e Maricá (Praia de Itaipuaçu).
- **Símbolo:** O elefante poligonal estilizado com as letras **AM** reflete força, solidez, longevidade e visão estratégica no mercado imobiliário.
- **Paleta de Cores:**
  - Azul Marinho Noturno (`#06111F` / `#0D2038`)
  - Dourado & Bronze Nobre (`#C5A059` / `#9F8560` / `#DFB76C`)
  - Branco Puro & Tons Neutros (`#F8FAFC` / `#FFFFFF`)

---

## 📂 Estrutura de Arquivos

```text
automourao.com.br/
│
├── index.html                   # Página principal (Landing Page V1)
├── CNAME                        # Configuração de domínio customizado no GitHub Pages
├── README.md                    # Documentação do projeto
└── assets/
    ├── css/
    │   └── style.css            # Folha de estilos moderna e responsiva
    ├── js/
    │   └── main.js              # Interações, drawer mobile, máscara de telefone e envio WhatsApp
    └── images/
        ├── logo.png             # Logo oficial com fundo transparente
        ├── logo-icon.png        # Ícone do Elefante AM com fundo transparente
        ├── logo-horizontal.png  # Versão horizontal do logo
        ├── favicon.png          # Ícone de favoritos (64x64)
        ├── hero.jpg             # Foto aérea de empreendimento de alto padrão
        ├── marica-pedra-elefante.jpg # Vista panorâmica do Alto Mourão / Maricá
        └── empreendimentos.jpg  # Conceito de condomínio/loteamento planejado
```

---

## 🚀 Como Publicar no GitHub Pages

1. Crie um repositório no seu GitHub (exemplo: `automourao` ou `automourao.com.br`).
2. Faça o upload ou push dos arquivos desta pasta para o repositório:
   ```bash
   git init
   git add .
   git commit -m "feat: V1 do site institucional Alto Mourao"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/automourao.git
   git push -u origin main
   ```
3. No GitHub, acesse **Settings > Pages**.
4. Em **Build and deployment > Source**, selecione **Deploy from a branch** e aponte para `main` / `root`.
5. Se for utilizar o domínio próprio `automourao.com.br`, o arquivo `CNAME` já está configurado. Basta configurar as entradas DNS (tipo `A` e `CNAME` para `SEU_USUARIO.github.io`).

---

## ⚙️ Como Personalizar os Dados de Contato

### 1. Número de WhatsApp
- No arquivo `assets/js/main.js`, altere a constante na linha 8:
  ```javascript
  const DEFAULT_WHATSAPP = '5521999999999'; // Insira 55 + DDD + Número sem traços
  ```
- No arquivo `index.html`, procure por `5521999999999` e `(21) 99999-9999` e atualize para o número real desejado.

### 2. Endereço e E-mail
- No arquivo `index.html`, procure pela seção `#contato` e altere o texto do endereço da sede e o e-mail de contato conforme sua preferência.

### 3. Instagram
- O link já está apontando para o perfil oficial:
  `https://www.instagram.com/altomourao_empreendimentosimob/`
