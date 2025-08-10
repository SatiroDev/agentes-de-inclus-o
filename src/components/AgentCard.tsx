import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const AgentCard = ({ name, description, icon: Icon, onClick }: AgentCardProps) => {
  return (
    <div className="group cursor-pointer ">
      <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:scale-105 active:scale-95 hover:border-primary/30 min-h-[280px] flex flex-col ">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className={`p-4 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="h-10 w-10 text-primary-foreground " />
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col text-center space-y-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 overflow-hidden">
            {description}
          </p>
        </div>
        
        {/* CTA */}
        <div className="pt-4 mt-auto">
          <Button
            onClick={onClick}
            className="w-full text-sm font-semibold"
            size="sm"
            aria-label={`Ativar ${name}: ${description}`}
          >
            Ativar →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;