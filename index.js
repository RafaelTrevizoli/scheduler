import cron from "node-cron";
import fetch from "node-fetch";

const URL = "https://estornospp.up.railway.app/api/whatsapp/webhook/";

cron.schedule("30 12 * * *", async () => {
  console.log("⏰ Executando alerta de estornos...");
  try {
    const res = await fetch(URL, { method: "POST" });
    const text = await res.text();
    console.log("✅ Sucesso:", text);
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}, { timezone: "America/Sao_Paulo" });

// Mantém o processo ativo
console.log("🚀 Scheduler iniciado...");
setInterval(() => {}, 60 * 1000);
