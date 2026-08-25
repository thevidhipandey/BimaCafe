import {
  Car,
  HardHat,
  HeartPulse,
  Home,
  Scale,
  ShieldCheck,
  Ship,
  TrendingUp,
  Umbrella,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  icon: LucideIcon;
  name: string;
  note: string;
  slug: string;
};

export const products: Product[] = [
  { icon: HeartPulse, name: "Health Insurance", note: "Cashless at 12,000+ hospitals", slug: "health-insurance" },
  { icon: ShieldCheck, name: "Term Insurance", note: "Up to ₹5 Cr cover", slug: "term-insurance" },
  { icon: TrendingUp, name: "Investment Plans", note: "Guaranteed & market-linked", slug: "investment-plans" },
  { icon: Car, name: "Motor Insurance", note: "Instant policy, 60-second quote", slug: "motor-insurance" },
  { icon: HardHat, name: "Workmen Compensation", note: "Statutory cover for your crew", slug: "workmen-compensation" },
  { icon: Scale, name: "Liability Insurance", note: "Directors, products, public", slug: "liability-insurance" },
  { icon: Ship, name: "Marine Insurance", note: "Cargo, transit & hull", slug: "marine-insurance" },
  { icon: Users, name: "Employee Benefits", note: "Group health & GPA", slug: "employee-benefits" },
  { icon: Home, name: "Property Insurance", note: "Home, plant & stock", slug: "property-insurance" },
  { icon: Umbrella, name: "Other Insurance", note: "Travel, pet, event, cyber", slug: "other-insurance" },
];
