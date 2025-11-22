import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Links */}
          <div>
            <nav className="flex flex-wrap gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-gray-medium hover:text-white transition-colors text-sm"
              >
                Privacy Policy / Politique de confidentialité
              </Link>
              <Link
                href="/user-agreement"
                className="text-gray-medium hover:text-white transition-colors text-sm"
              >
                User Agreement / Accord utilisateur
              </Link>
              <Link
                href="/franchise"
                className="text-gray-medium hover:text-white transition-colors text-sm"
              >
                Franchise / Franchise
              </Link>
              <Link
                href="/social-responsibility"
                className="text-gray-medium hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                Social Responsibility / Responsabilité sociale
                <span className="text-xs">▲</span>
              </Link>
              <Link
                href="/eco"
                className="text-gray-medium hover:text-white transition-colors text-sm"
              >
                Vehicle Environmental Info / Info environnementale
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="text-right">
            <div className="inline-block">
              <p className="text-sm text-gray-medium mb-2">Customer Service / Service client</p>
              <a
                href="tel:400-1799-909"
                className="text-2xl font-bold text-white hover:text-primary transition-colors"
              >
                400-1799-909
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-medium">
            ©2023 Jiangxi JMEV Group New Energy Vehicle Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
