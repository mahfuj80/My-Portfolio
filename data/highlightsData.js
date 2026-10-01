import { FaNetworkWired, FaMoneyBillWave, FaPuzzlePiece } from "react-icons/fa";

// Production work from the resume's "Key Architectural & Product Highlights".
// These are proprietary/client systems, so they carry no public links.
const highlights = [
  {
    id: 1,
    title: "Multi-Tenant SaaS & Reseller Platforms",
    icon: FaNetworkWired,
    description:
      "Architected automated tenant provisioning, dynamic wildcard subdomains, and isolated per-tenant database schemas.",
    tags: ["NestJS", "PostgreSQL", "Nginx", "Docker"],
  },
  {
    id: 2,
    title: "Global Multi-Gateway Billing Engine",
    icon: FaMoneyBillWave,
    description:
      "Integrated fiat and cryptocurrency payment channels (Stripe, NOWPayments, Plisio, SSLCommerz) with asynchronous webhook processing and PDF invoice generation.",
    tags: ["Stripe", "Crypto (BTC · ETH · USDT · SOL)", "Webhooks"],
  },
  {
    id: 3,
    title: "Custom WordPress & Gutenberg Plugin Ecosystem",
    icon: FaPuzzlePiece,
    description:
      "Engineered modern Gutenberg blocks with block.json and decoupled frontend/backend renderers.",
    tags: ["WordPress", "Gutenberg", "PHP", "React"],
  },
];

export default highlights;
