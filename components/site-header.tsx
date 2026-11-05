import Image from "next/image";

export function SiteHeader() {
  return <header className="site-header"><div className="brand-mark"><Image src="/samish-logo-horizontal-dark.png" alt="Samish Digital Wave" width={1920} height={540} priority /></div></header>;
}
