export function validateAccess() {
  if (typeof window === "undefined") return false;

  const flag = sessionStorage.getItem("sbtVerified");
  return flag === "true";
}
