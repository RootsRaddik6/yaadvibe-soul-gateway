export const checkSentinel = async () => {
  try {
    const url = process.env.AI_KERNEL_URL + "/api/sentinel";
    const res = await fetch(url);
    return await res.json();
  } catch {
    return { status: "offline", message: "sentinel unreachable" };
  }
};
