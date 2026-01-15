import React from "react";

export default function PoliticaPrivacidade(): JSX.Element {
  const handlePrint = () => window.print();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById("policy")?.innerText || "");
      // @ts-ignore
      alert("Política copiada para a área de transferência");
    } catch (e) {
      // @ts-ignore
      alert("Não foi possível copiar. Permita acesso à área de transferência ou copie manualmente.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Política de Privacidade — PF Dedetizadora</h1>
            <p className="text-sm text-gray-500 mt-1">Última atualização: 11/12/2025</p>
          </div>
          <div className="flex gap-2">
            <button onClick={handleCopy} className="px-4 py-2 rounded-md border hover:bg-gray-100">Copiar</button>
            <button onClick={handlePrint} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Imprimir</button>
          </div>
        </header>

        <main id="policy" className="prose prose-slate mt-6 max-w-none">
          <p>
            Esta Política de Privacidade descreve como o <strong>PF Dedetizadora</strong> coleta, usa, armazena e protege as
            informações dos usuários. Ao utilizar nosso aplicativo, você concorda com as práticas descritas neste documento.
          </p>

          <h2>1. Informações que Coletamos</h2>

          <h3>1.1. Informações Fornecidas pelo Usuário</h3>
          <p>
            Podemos coletar informações que você fornece diretamente no aplicativo, como: nome, e-mail, telefone e dados
            inseridos em formulários.
          </p>

          <h3>1.2. Informações Coletadas Automaticamente</h3>
          <p>
            O aplicativo pode coletar automaticamente dados de uso e interação, identificadores do dispositivo, sistema
            operacional e versão, e endereço IP.
          </p>

          <h3>1.3. Permissões do Dispositivo</h3>
          <p>
            O aplicativo pode solicitar permissões como câmera, localização, armazenamento e notificações. Essas permissões
            são utilizadas exclusivamente para o funcionamento correto das funcionalidades do app.
          </p>

          <h2>2. Como Usamos as Informações</h2>
          <p>
            Utilizamos os dados coletados para oferecer e melhorar as funcionalidades do app, personalizar a experiência do
            usuário, garantir segurança e prevenção contra fraude, enviar notificações ou comunicações relacionadas ao
            serviço e prestar suporte técnico.
          </p>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar dados apenas com fornecedores e parceiros que
            auxiliam no funcionamento do app, para cumprir obrigações legais ou para proteger direitos e segurança de
            usuários.
          </p>

          <h2>4. Armazenamento e Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo criptografia quando aplicável,
            controles de acesso restrito e monitoramento de segurança. Apesar disso, nenhum sistema é 100% seguro.
          </p>

          <h2>5. Retenção de Dados</h2>
          <p>
            Manteremos seus dados somente pelo tempo necessário para cumprir as finalidades desta política ou conforme exigido
            por lei.
          </p>

          <h2>6. Direitos do Usuário</h2>
          <p>
            Você pode solicitar acesso aos seus dados, corrigir informações imprecisas, solicitar exclusão, revogar
            consentimento e pedir portabilidade (quando aplicável). Para exercer seus direitos, entre em contato conosco.
          </p>

          <h2>7. Serviços de Terceiros</h2>
          <p>
            O app pode utilizar serviços de terceiros (ex: Google, APIs externas). Cada serviço possui sua própria política de
            privacidade.
          </p>

          <h2>8. Crianças e Adolescentes</h2>
          <p>
            Não coletamos intencionalmente dados de menores de 13 anos. Caso identifiquemos dados coletados sem consentimento
            dos responsáveis, iremos removê-los.
          </p>

          <h2>9. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade a qualquer momento. A nova versão será publicada nesta página.
          </p>

          <h2>10. Contato</h2>
          <p>
            Se tiver dúvidas, entre em contato:
            <br />
            <strong>E-mail:</strong> programacaoaguiar@gmail.com
            <br />
            <strong>Responsável:</strong> Rafael Aguiar
          </p>

          <p className="text-sm text-gray-500">Recomenda-se hospedar esta política em uma página pública (ex: GitHub Pages, Netlify, Vercel ou domínio próprio) para envio ao Google Play Console.</p>
        </main>

        <footer className="mt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PF Dedetizadora. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
