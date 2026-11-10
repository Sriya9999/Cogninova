import {
  ArrowRight, Bot, ChartColumn, Check, Code, Database, Factory, FileText, GraduationCap,
  HeartPulse, Landmark, LayoutGrid, Layers, Mail, MessageSquare, Mic, ShieldCheck,
  ShoppingCart, Sparkles, TrendingUp, Workflow, Zap, type LucideProps,
} from "lucide-react";

const icons = {
  arrow: ArrowRight, bot: Bot, analytics: ChartColumn, check: Check, code: Code,
  database: Database, manufacturing: Factory, document: FileText, education: GraduationCap,
  healthcare: HeartPulse, finance: Landmark, grid: LayoutGrid, layers: Layers, mail: Mail,
  chat: MessageSquare, voice: Mic, shield: ShieldCheck, retail: ShoppingCart,
  sparkles: Sparkles, trend: TrendingUp, workflow: Workflow, zap: Zap,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp aria-hidden strokeWidth={1.75} {...props} />;
}

/** Icon inside the soft violet tile used on cards. */
export function IconTile({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet-deep ${className}`}>
      <Icon name={name} className="size-5" />
    </span>
  );
}
