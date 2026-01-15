import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Título */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-white">
            Política de Privacidade – FinancIA
          </h1>
          <p className="text-sm text-slate-400">
            Data de vigência: 14/01/2026
          </p>
        </header>

        {/* Introdução */}
        <section className="space-y-4">
          <p className="leading-relaxed text-slate-300">
            A <strong>Aguiar Programação LTDA</strong>, inscrita no CNPJ
            54.819.426/0001-09 (&quot;Aguiar Programação&quot;, &quot;nós&quot;),
            é a responsável pelo aplicativo <strong>FinancIA</strong>.
            Esta Política de Privacidade descreve como tratamos dados pessoais
            no aplicativo, em conformidade com a Lei Geral de Proteção de Dados
            (LGPD – Lei nº 13.709/2018).
          </p>

          <p className="text-slate-300">
            Contato:{" "}
            <a
              href="mailto:programacaoaguiar@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              programacaoaguiar@gmail.com
            </a>
          </p>
        </section>

        {/* Seções */}
        <Section title="1. Dados pessoais tratados">
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>
              <strong>Cadastro e autenticação:</strong> nome, e-mail e senha
              (tratada pelo backend).
            </li>
            <li>
              <strong>Perfil:</strong> remuneração e foto de perfil (opcional).
            </li>
            <li>
              <strong>Finanças:</strong> transações (tipo, valor, descrição,
              data, categoria, forma de pagamento e observações).
            </li>
            <li>
              <strong>Objetivos:</strong> metas, valor economizado, prazo e
              aportes.
            </li>
            <li>
              <strong>Preferências:</strong> configurações de notificações
              (push e e-mail).
            </li>
            <li>
              <strong>Identificadores técnicos:</strong> token de sessão e token
              de notificação push.
            </li>
            <li>
              <strong>Informações do dispositivo:</strong> nome/modelo do
              dispositivo e sistema operacional (enviados no login para
              identificação da sessão).
            </li>
          </ul>
        </Section>

        <Section title="2. Finalidades do tratamento">
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>Autenticar e manter a sessão do usuário.</li>
            <li>Registrar e exibir transações, objetivos e gráficos.</li>
            <li>Gerar resumos e insights financeiros no dashboard.</li>
            <li>Enviar notificações relacionadas ao app (quando habilitado).</li>
            <li>Permitir exportação de dados (CSV, JSON e PDF).</li>
            <li>
              Reforçar a segurança (2FA, gerenciamento de sessões e biometria
              local).
            </li>
          </ul>
        </Section>

        <Section title="3. Base legal (LGPD)">
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>
              <strong>Execução de contrato:</strong> para operar o app e entregar
              suas funcionalidades.
            </li>
            <li>
              <strong>Consentimento:</strong> para notificações e recursos
              opcionais.
            </li>
            <li>
              <strong>Legítimo interesse:</strong> para segurança e prevenção de
              uso indevido.
            </li>
          </ul>
        </Section>

        <Section title="4. Compartilhamento de dados">
          <p className="text-slate-300">
            Não vendemos dados pessoais. O aplicativo integra-se com:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>Backend do FinancIA (API) para processamento e autenticação.</li>
            <li>Serviços do Expo para notificações push (quando habilitado).</li>
            <li>
              Serviços do sistema operacional para biometria local e seleção de
              imagens.
            </li>
          </ul>
          <p className="mt-2 text-slate-300">
            Não há compartilhamento de dados para fins publicitários.
          </p>
        </Section>

        <Section title="5. Armazenamento e segurança">
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>
              <strong>Dados locais:</strong> token de sessão, usuário,
              configurações e token de push são armazenados via AsyncStorage.
            </li>
            <li>
              Utilizamos medidas de segurança como autenticação, 2FA e controle
              de sessões.
            </li>
          </ul>
        </Section>

        <Section title="6. Retenção">
          <p className="text-slate-300">
            Não há um período de retenção específico definido no app. Os dados
            são mantidos enquanto necessários para o funcionamento do FinancIA.
            Para esclarecimentos, entre em contato pelo e-mail informado.
          </p>
        </Section>

        <Section title="7. Direitos do titular">
          <p className="text-slate-300">
            Você pode solicitar informações, correções e esclarecimentos sobre
            seus dados pessoais pelo e-mail de contato. No momento, o aplicativo
            não oferece funcionalidade de exclusão de conta ou eliminação de
            dados.
          </p>
        </Section>

        <Section title="8. Crianças e adolescentes">
          <p className="text-slate-300">
            O aplicativo não é direcionado a crianças ou adolescentes e não
            realiza tratamento intencional de dados de menores.
          </p>
        </Section>

        <Section title="9. Alterações desta política">
          <p className="text-slate-300">
            Esta política pode ser atualizada periodicamente. A versão vigente
            estará sempre disponível junto ao aplicativo.
          </p>
        </Section>

        <Section title="10. Controlador">
          <p className="text-slate-300">
            <strong>Aguiar Programação LTDA</strong>
            <br />
            CNPJ: 54.819.426/0001-09
            <br />
            E-mail: programacaoaguiar@gmail.com
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}
