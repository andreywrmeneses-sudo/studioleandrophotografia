import { useState } from "react";
import { Check, Send } from "lucide-react";
import { CONTACT } from "@/data/photos";

type Errors = { nome?: string; email?: string; proposta?: string; consent?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [proposta, setProposta] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    const n = nome.trim();
    const m = email.trim();
    const p = proposta.trim();
    if (!n) e.nome = "Informe seu nome completo.";
    else if (n.length > 100) e.nome = "O nome deve ter no máximo 100 caracteres.";
    if (!m) e.email = "Informe seu e-mail.";
    else if (!EMAIL_RE.test(m) || m.length > 255) e.email = "Informe um e-mail válido.";
    if (!p) e.proposta = "Descreva sua proposta de foto.";
    else if (p.length > 1500) e.proposta = "A proposta deve ter no máximo 1500 caracteres.";
    if (!consent)
      e.consent = "É necessário aceitar os termos de uso de dados (LGPD) para enviar.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const message = `Nome Completo:\n${nome.trim()}\n\nE-mail:\n${email.trim()}\n\nProposta:\n${proposta.trim()}`;
    window.open(
      `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  const field =
    "w-full rounded-xl bg-white/5 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 border border-white/12 outline-none transition-all duration-300 focus:border-primary/60 focus:bg-white/8 focus:ring-2 focus:ring-primary/25";

  if (sent) {
    return (
      <div className="glass rounded-3xl p-10 text-center" role="status" aria-live="polite">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-display mt-6 text-2xl text-foreground">Proposta preparada.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Abrimos o WhatsApp com sua mensagem pronta. Se a janela não apareceu, toque no botão
          abaixo para enviar.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(
              `Nome Completo:\n${nome.trim()}\n\nE-mail:\n${email.trim()}\n\nProposta:\n${proposta.trim()}`,
            )}`}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Abrir WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setNome("");
              setEmail("");
              setProposta("");
              setConsent(false);
            }}
            className="glass glass-hover rounded-full px-6 py-3 text-sm text-foreground"
          >
            Enviar outra proposta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="nome" className="eyebrow mb-2 block">
            Nome completo
          </label>
          <input
            id="nome"
            name="nome"
            value={nome}
            maxLength={100}
            onChange={(e) => setNome(e.target.value)}
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "erro-nome" : undefined}
            className={field}
            placeholder="Seu nome"
          />
          {errors.nome && (
            <p id="erro-nome" className="mt-2 text-xs text-destructive">
              {errors.nome}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <label htmlFor="email" className="eyebrow mb-2 block">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            maxLength={255}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "erro-email" : undefined}
            className={field}
            placeholder="voce@email.com"
          />
          {errors.email && (
            <p id="erro-email" className="mt-2 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="proposta" className="eyebrow mb-2 block">
            Proposta de foto
          </label>
          <textarea
            id="proposta"
            name="proposta"
            rows={6}
            value={proposta}
            maxLength={1500}
            onChange={(e) => setProposta(e.target.value)}
            aria-invalid={!!errors.proposta}
            aria-describedby={errors.proposta ? "erro-proposta" : undefined}
            className={`${field} resize-y`}
            placeholder="Conte sobre o momento: tipo de cobertura, data, local e o que você imagina."
          />
          {errors.proposta && (
            <p id="erro-proposta" className="mt-2 text-xs text-destructive">
              {errors.proposta}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/12 bg-white/5 p-5">
        <span className="eyebrow block text-primary">Termos de aceitação — LGPD</span>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Ao enviar sua proposta, seus dados (nome, e-mail e a descrição enviada) serão utilizados
          exclusivamente para que o Studio Leandro Photografia entre em contato e elabore o
          orçamento solicitado. Não compartilhamos suas informações com terceiros e você pode
          solicitar a correção ou exclusão dos seus dados a qualquer momento, conforme a Lei Geral
          de Proteção de Dados (Lei nº 13.709/2018).
        </p>
        <label htmlFor="consent" className="mt-4 flex cursor-pointer items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "erro-consent" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/25 bg-white/10 accent-[var(--color-cyan-signature)]"
          />
          <span className="text-xs leading-relaxed text-foreground">
            Li e aceito os termos de uso e tratamento dos meus dados pessoais.
          </span>
        </label>
        {errors.consent && (
          <p id="erro-consent" className="mt-2 text-xs text-destructive">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!consent}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-highlight px-8 py-4 text-sm font-semibold text-highlight-foreground shadow-[0_18px_50px_-20px_var(--color-highlight)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:brightness-100 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Enviar proposta
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Sua proposta é enviada diretamente pelo WhatsApp do studio.
      </p>
    </form>
  );
}