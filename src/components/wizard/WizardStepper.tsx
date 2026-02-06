import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  description?: string;
}

interface WizardStepperProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function WizardStepper({ steps, currentStep, onStepClick }: WizardStepperProps) {
  return (
    <nav aria-label="Fortschritt" className="w-full overflow-x-auto pb-2">
      <ol className="flex items-center min-w-max md:min-w-0 md:justify-between gap-1 md:gap-0">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const isClickable = onStepClick && (isCompleted || isCurrent || currentStep > step.id - 1);

          return (
            <li key={step.id} className="flex-shrink-0 md:flex-1 relative">
              <div className="flex flex-col items-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div 
                    className={cn(
                      "absolute top-5 left-1/2 w-full h-0.5 -translate-y-1/2 hidden md:block",
                      isCompleted ? "bg-stepper-completed" : "bg-stepper-pending"
                    )}
                    style={{ left: '50%' }}
                  />
                )}
                
                {/* Step circle */}
                <button
                  type="button"
                  onClick={() => isClickable && onStepClick?.(step.id)}
                  disabled={!isClickable}
                  className={cn(
                    "relative z-10 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 text-xs md:text-sm font-semibold transition-all",
                    isCompleted && "bg-stepper-completed border-stepper-completed text-white",
                    isCurrent && "bg-stepper-active border-stepper-active text-white",
                    !isCompleted && !isCurrent && "bg-background border-stepper-pending text-muted-foreground",
                    isClickable && "cursor-pointer hover:opacity-80",
                    !isClickable && "cursor-default"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4 md:h-5 md:w-5" />
                  ) : (
                    step.id
                  )}
                </button>

                {/* Step label - hidden on mobile, visible on md+ */}
                <div className="mt-1 md:mt-2 text-center">
                  <span 
                    className={cn(
                      "text-[10px] md:text-xs font-medium hidden md:inline",
                      (isCurrent || isCompleted) ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      
      {/* Mobile: Show current step title below */}
      <div className="md:hidden text-center mt-2 pt-2 border-t border-border">
        <span className="text-sm font-medium text-foreground">
          {steps.find(s => s.id === currentStep)?.title}
        </span>
      </div>
    </nav>
  );
}
