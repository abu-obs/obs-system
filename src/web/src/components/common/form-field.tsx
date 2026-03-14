import * as React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <Label htmlFor={fieldId} className="text-sm font-medium text-foreground">
          {label}
        </Label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <Input
            ref={ref}
            id={fieldId}
            className={cn(
              icon && 'pl-10',
              error && 'border-destructive focus-visible:ring-destructive',
              className,
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  },
);
FormField.displayName = 'FormField';

export { FormField };
