const links = {
  Product: ["Marketplace", "Pricing", "Documentation", "API Reference"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xs">JN</span>
              </div>
              <span className="font-display font-semibold text-foreground">
                Jelly<span className="text-primary">Net</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Jelly Network — an agentic marketplace for unused digital resources. Powered by Algorand.
            </p>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-foreground text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 JellyNet. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built on <span className="text-primary">Algorand</span> · x402 Protocol
          </p>
        </div>
      </div>
    </footer>
  );
}
