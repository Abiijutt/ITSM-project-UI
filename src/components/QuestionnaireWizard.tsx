
import React, { useState } from 'react';
import { services, pricingTiers } from '@/lib/pricingData';
import { useColorShift } from '@/hooks/useColorShift';
import ServiceCard from './ServiceCard';
import QuoteCalculator from './QuoteCalculator';
import { X } from 'lucide-react';

interface QuestionnaireWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestionnaireWizard: React.FC<QuestionnaireWizardProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const accentColor = useColorShift();
  
  // Form state
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [revenueTier, setRevenueTier] = useState('startup');
  const [competitorUrls, setCompetitorUrls] = useState(['', '', '']);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleCompetitorUrlChange = (index: number, value: string) => {
    const newUrls = [...competitorUrls];
    newUrls[index] = value;
    setCompetitorUrls(newUrls);
  };
  
  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };
  
  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !businessName || !industry;
      case 2:
        return !revenueTier;
      case 3:
        // At least one competitor URL should be filled
        return !competitorUrls[0] && !competitorUrls[1] && !competitorUrls[2];
      case 4:
        // No validation for uploading images
        return false;
      case 5:
        return selectedServices.length === 0;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto animate-fade-in-up">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center border-b p-6">
          <h2 className="font-bold text-2xl" style={{ color: accentColor }}>
            AI WALA Digital Agency Questionnaire
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Indicator */}
          <div className="flex mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step} 
                className="flex-1 relative"
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                    step <= currentStep ? 'bg-aiwala-accent text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                  style={{ 
                    backgroundColor: step <= currentStep ? accentColor : undefined 
                  }}
                >
                  {step}
                </div>
                {step < 5 && (
                  <div 
                    className={`absolute top-4 left-[calc(50%+16px)] right-[calc(50%-16px)] h-[2px] ${
                      step < currentStep ? 'bg-aiwala-accent' : 'bg-gray-200'
                    }`}
                    style={{ 
                      backgroundColor: step < currentStep ? accentColor : undefined 
                    }}
                  ></div>
                )}
                <div className="text-xs text-center mt-2">
                  {step === 1 && 'Business Info'}
                  {step === 2 && 'Revenue'}
                  {step === 3 && 'Competitors'}
                  {step === 4 && 'References'}
                  {step === 5 && 'Services'}
                </div>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {/* Step 1: Business Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold">What's your business name & industry?</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-aiwala-accent"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      style={{ 
                        outlineColor: accentColor,
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry / Vertical</label>
                    <select 
                      className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-aiwala-accent"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      style={{ 
                        outlineColor: accentColor,
                      }}
                    >
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="service">Service-based Business</option>
                      <option value="saas">Software / SaaS</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Revenue */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold">What's your current annual revenue (PKR)?</h3>
                <div className="space-y-4">
                  {pricingTiers.map((tier) => (
                    <div 
                      key={tier.revenueBracket}
                      className={`p-4 rounded-lg border cursor-pointer ${
                        tier.revenueBracket === revenueTier 
                          ? 'border-aiwala-accent bg-aiwala-accent bg-opacity-5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ 
                        borderColor: tier.revenueBracket === revenueTier ? accentColor : undefined,
                      }}
                      onClick={() => setRevenueTier(tier.revenueBracket)}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            tier.revenueBracket === revenueTier 
                              ? 'bg-aiwala-accent' 
                              : 'border border-gray-400'
                          }`}
                          style={{ 
                            backgroundColor: tier.revenueBracket === revenueTier ? accentColor : undefined,
                          }}
                        >
                          {tier.revenueBracket === revenueTier && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="font-medium">{tier.name}: {tier.revenueRange}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Competitors */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold">Link 2-3 competitor websites or social profiles</h3>
                <div className="space-y-4">
                  {[0, 1, 2].map((index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium mb-2">
                        Competitor {index + 1} {index === 0 ? '(required)' : '(optional)'}
                      </label>
                      <input 
                        type="url" 
                        placeholder="https://example.com"
                        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-aiwala-accent"
                        value={competitorUrls[index]}
                        onChange={(e) => handleCompetitorUrlChange(index, e.target.value)}
                        style={{ 
                          outlineColor: accentColor,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Reference Images */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-xl font-semibold">Upload up to 5 reference images (logos, ads, etc.)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div 
                      key={index}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-aiwala-accent cursor-pointer"
                      style={{ 
                        borderColor: index === 1 ? accentColor : undefined,
                      }}
                    >
                      {index === 1 ? (
                        <div>
                          <div className="mb-2 font-medium" style={{ color: accentColor }}>
                            Image uploaded
                          </div>
                          <div className="text-xs text-gray-500">example.jpg</div>
                        </div>
                      ) : (
                        <div>
                          <div className="mb-2 text-gray-500">Click to upload</div>
                          <div className="text-xs text-gray-500">PNG, JPG or GIF</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 italic">
                  This step is optional but helps our AI understand your visual preferences.
                </p>
              </div>
            )}

            {/* Step 5: Services Selection */}
            {currentStep === 5 && (
              <div className="animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-6">Choose the services you need:</h3>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedServices.includes(service.id)}
                      onClick={() => handleServiceToggle(service.id)}
                      index={index}
                    />
                  ))}
                </div>
                
                {selectedServices.length > 0 && (
                  <QuoteCalculator
                    selectedTier={revenueTier}
                    selectedServices={selectedServices}
                  />
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t">
            <button
              onClick={handlePreviousStep}
              className={`px-6 py-2 rounded font-medium ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            
            <button
              onClick={handleNextStep}
              className={`px-6 py-2 rounded font-medium ${
                isNextDisabled() || currentStep === 5
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'btn-aiwala'
              }`}
              style={{
                backgroundColor: isNextDisabled() || currentStep === 5 ? undefined : accentColor
              }}
              disabled={isNextDisabled() || currentStep === 5}
            >
              {currentStep < 5 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireWizard;
