import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, whatsapp, type, budget, message, company } = await req.json();

    // Honeypot check
    if (company) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Dados incompletos" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { ok: false, error: "Configuração de e-mail pendente" },
        { status: 500 }
      );
    }

    // Prepare email payload
    const emailPayload = {
      from: "FCC Sites <noreply@fccsites.com.br>",
      to: process.env.NEXT_PUBLIC_EMAIL || "felipe.caltabiano.castro@gmail.com",
      subject: "Novo lead — FCC Sites",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #0B1220; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0A1538; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #F6F7FA; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0A1538; display: block; margin-bottom: 5px; }
            .value { color: #0B1220; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #E9EDF3; font-size: 12px; color: #98A2B3; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🎉 Novo lead do site FCC Sites</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nome:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">E-mail:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              ${whatsapp ? `
              <div class="field">
                <span class="label">WhatsApp:</span>
                <span class="value"><a href="https://wa.me/${whatsapp.replace(/\D/g, '')}">${whatsapp}</a></span>
              </div>
              ` : ''}
              ${type ? `
              <div class="field">
                <span class="label">Tipo de site:</span>
                <span class="value">${type}</span>
              </div>
              ` : ''}
              ${budget ? `
              <div class="field">
                <span class="label">Orçamento estimado:</span>
                <span class="value">${budget}</span>
              </div>
              ` : ''}
              <div class="field">
                <span class="label">Mensagem:</span>
                <div class="value" style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">${message}</div>
              </div>
              <div class="footer">
                <p>Este e-mail foi enviado automaticamente pelo formulário de contato do site FCC Sites.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      return NextResponse.json(
        { ok: false, error: "Falha no envio de e-mail" },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log("Email sent successfully:", result);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: error.message || "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
