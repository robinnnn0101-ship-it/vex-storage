// Load app config
export async function loadConfig() {
  try {
    const res = await fetch('../config.json');
    return await res.json();
  } catch {
    return { defaultChunkSize: 1048576, creditRatio: 1 };
  }
}
