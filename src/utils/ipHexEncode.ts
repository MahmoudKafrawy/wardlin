export function ipHexEncode(ip: string) {
  // Split IP into octets
  const octets = ip.split(".");

  // Convert each octet to hex with padding
  const hexOctets = octets.map((octet) => {
    const hexStr = parseInt(octet).toString(16);
    return hexStr.padStart(2, "0");
  });

  // Join the hex octets into a color hex
  const colorHex = "#" + hexOctets.join("");

  return colorHex.slice(0, 7);
}
