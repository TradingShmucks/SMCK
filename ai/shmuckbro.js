import fetch from 'node-fetch';
export async function getEntryNowSignal(context) {
  const prompt = `Act as an elite crypto trader. Give me an ENTRY NOW signal based on current market sentiment for ${context}.`;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No signal.";
}
