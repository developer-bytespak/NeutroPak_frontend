import React from 'react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title = 'Our Process',
  subtitle = 'From Hive to Bottle',
  steps,
}) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="card p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">{step.id}</span>
            </div>
            {step.icon && (
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
