import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BookDemoPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    companyName: '',
    businessEmail: '',
    contactPerson: '',
    jobTitle: '',
    mobileNumber: '',
    companyWebsite: '',
    industry: '',
    companySize: '',
    numberOfWarehouses: '',
    totalWarehouseArea: '',
    country: '',
    stateRegion: '',
    city: '',
    currentManagement: '',
    averageDailyOrders: '',
    averageDailyReceiving: '',
    numberOfWarehouseEmployees: '',
    numberOfWarehouseUsers: '',
    requirements: [] as string[],
    operationalChallenges: '',
    implementationTimeline: '',
    additionalRequirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleRequirement = (req: string) => {
    setFormData(prev => {
      const isSelected = prev.requirements.includes(req);
      if (isSelected) {
        return { ...prev, requirements: prev.requirements.filter(r => r !== req) };
      } else {
        return { ...prev, requirements: [...prev.requirements, req] };
      }
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Invalid email format';
    }
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact Person is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.companySize) newErrors.companySize = 'Company Size is required';
    if (!formData.numberOfWarehouses.trim()) newErrors.numberOfWarehouses = 'Number of Warehouses is required';
    if (!formData.totalWarehouseArea.trim()) newErrors.totalWarehouseArea = 'Total Warehouse Area is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const requirementsList = [
    'Inventory Management', 'Barcode Scanning', 'Receiving', 'Putaway',
    'Picking', 'Packing', 'Dispatch', 'Returns', 'Cycle Counting',
    'Multi-Warehouse', 'Reporting', 'API / Integrations', 'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-[calc(100vh-80px)] flex flex-col items-center pt-24 px-4 pb-20">
        <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-sm text-center max-w-2xl w-full">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Thank you. Your enquiry has been received.</h2>
          <p className="text-lg text-slate-600 mb-10">
            An Acrely team member will review your requirements and contact you shortly to arrange your personalized enterprise demonstration.
          </p>
          <Link to="/" className="inline-block px-8 py-4 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-[#0F172A] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Book an Enterprise Demo
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Tell us about your warehouse operations and requirements. Our team will review your information and contact you to arrange a personalized Acrely WMS demonstration.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12 space-y-12">
          
          {/* SECTION 01: COMPANY INFORMATION */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-sm font-bold text-[#1E40AF] tracking-wider uppercase mb-1">Section 01</h2>
              <h3 className="text-2xl font-bold text-[#0F172A]">Company Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Company Name <span className="text-red-500">*</span></label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.companyName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.companyName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.companyName}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Company Website</label>
                <input type="text" name="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Contact Person <span className="text-red-500">*</span></label>
                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.contactPerson ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.contactPerson && <p className="text-red-500 text-xs mt-1 font-bold">{errors.contactPerson}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Job Title <span className="text-red-500">*</span></label>
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.jobTitle ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.jobTitle && <p className="text-red-500 text-xs mt-1 font-bold">{errors.jobTitle}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Business Email <span className="text-red-500">*</span></label>
                <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.businessEmail ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.businessEmail && <p className="text-red-500 text-xs mt-1 font-bold">{errors.businessEmail}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Mobile Number <span className="text-red-500">*</span></label>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.mobileNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.mobileNumber && <p className="text-red-500 text-xs mt-1 font-bold">{errors.mobileNumber}</p>}
              </div>
            </div>
          </div>

          {/* SECTION 02: BUSINESS PROFILE */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-sm font-bold text-[#1E40AF] tracking-wider uppercase mb-1">Section 02</h2>
              <h3 className="text-2xl font-bold text-[#0F172A]">Business Profile</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Industry <span className="text-red-500">*</span></label>
                <select name="industry" value={formData.industry} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors appearance-none ${errors.industry ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`}>
                  <option value="">Select Industry</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Cold Storage">Cold Storage</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="FMCG">FMCG</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Other">Other</option>
                </select>
                {errors.industry && <p className="text-red-500 text-xs mt-1 font-bold">{errors.industry}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Company Size <span className="text-red-500">*</span></label>
                <select name="companySize" value={formData.companySize} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors appearance-none ${errors.companySize ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`}>
                  <option value="">Select Size</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-500">201–500</option>
                  <option value="500+">500+</option>
                </select>
                {errors.companySize && <p className="text-red-500 text-xs mt-1 font-bold">{errors.companySize}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Number of Warehouses <span className="text-red-500">*</span></label>
                <input type="text" name="numberOfWarehouses" value={formData.numberOfWarehouses} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.numberOfWarehouses ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.numberOfWarehouses && <p className="text-red-500 text-xs mt-1 font-bold">{errors.numberOfWarehouses}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Total Warehouse Area (sq ft/m) <span className="text-red-500">*</span></label>
                <input type="text" name="totalWarehouseArea" value={formData.totalWarehouseArea} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.totalWarehouseArea ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.totalWarehouseArea && <p className="text-red-500 text-xs mt-1 font-bold">{errors.totalWarehouseArea}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Country <span className="text-red-500">*</span></label>
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} className={`w-full px-4 py-3 bg-slate-50 border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors ${errors.country ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'}`} />
                {errors.country && <p className="text-red-500 text-xs mt-1 font-bold">{errors.country}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">State / Region</label>
                <input type="text" name="stateRegion" value={formData.stateRegion} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
            </div>
          </div>

          {/* SECTION 03: WAREHOUSE OPERATIONS */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-sm font-bold text-[#1E40AF] tracking-wider uppercase mb-1">Section 03</h2>
              <h3 className="text-2xl font-bold text-[#0F172A]">Warehouse Operations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-[#0F172A] mb-2">How do you currently manage warehouse operations?</label>
                <select name="currentManagement" value={formData.currentManagement} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors appearance-none">
                  <option value="">Select option</option>
                  <option value="Excel / Spreadsheets">Excel / Spreadsheets</option>
                  <option value="Existing WMS">Existing WMS</option>
                  <option value="ERP">ERP</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Manual / Paper">Manual / Paper</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Average daily orders</label>
                <input type="text" name="averageDailyOrders" value={formData.averageDailyOrders} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Average daily receiving volume</label>
                <input type="text" name="averageDailyReceiving" value={formData.averageDailyReceiving} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Number of warehouse employees</label>
                <input type="text" name="numberOfWarehouseEmployees" value={formData.numberOfWarehouseEmployees} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0F172A] mb-2">Number of warehouse users (software access)</label>
                <input type="text" name="numberOfWarehouseUsers" value={formData.numberOfWarehouseUsers} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" />
              </div>
            </div>
          </div>

          {/* SECTION 04: REQUIREMENTS */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-sm font-bold text-[#1E40AF] tracking-wider uppercase mb-1">Section 04</h2>
              <h3 className="text-2xl font-bold text-[#0F172A]">Requirements</h3>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-4">What are you looking for?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {requirementsList.map((req) => (
                  <label key={req} className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${formData.requirements.includes(req) ? 'bg-blue-50 border-[#1E40AF] text-[#1E40AF]' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                    <input type="checkbox" checked={formData.requirements.includes(req)} onChange={() => toggleRequirement(req)} className="w-4 h-4 text-[#1E40AF] rounded focus:ring-[#1E40AF] border-slate-300" />
                    <span className="text-sm font-bold">{req}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">Current operational challenges</label>
              <textarea name="operationalChallenges" value={formData.operationalChallenges} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" placeholder="Describe the main challenges you are facing today..."></textarea>
            </div>
          </div>

          {/* SECTION 05: IMPLEMENTATION */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-sm font-bold text-[#1E40AF] tracking-wider uppercase mb-1">Section 05</h2>
              <h3 className="text-2xl font-bold text-[#0F172A]">Implementation</h3>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">Expected implementation timeline</label>
              <select name="implementationTimeline" value={formData.implementationTimeline} onChange={handleInputChange} className="w-full md:w-1/2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors appearance-none">
                <option value="">Select timeline</option>
                <option value="Immediately">Immediately</option>
                <option value="1-3 months">1–3 months</option>
                <option value="3-6 months">3–6 months</option>
                <option value="6-12 months">6–12 months</option>
                <option value="Exploring">Exploring</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#0F172A] mb-2">Additional requirements</label>
              <textarea name="additionalRequirements" value={formData.additionalRequirements} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1E40AF] transition-colors" placeholder="Any other specific integrations, compliance needs, or constraints?"></textarea>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-[#1E40AF] text-white font-bold rounded-lg hover:bg-[#2563EB] transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};
