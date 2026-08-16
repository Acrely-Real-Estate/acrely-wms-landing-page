import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import {
  requirementsList,
  initialFormData,
  validateBookDemoForm,
  handleFormInputChange,
  toggleRequirement,
  submitBookDemo,
  type BookDemoFormData,
  type FormErrors,
} from "../logic/bookDemoLogic";

const BookDemoPage: React.FC = () => {
  const [formData, setFormData] =
    useState<BookDemoFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    handleFormInputChange(event, setFormData);

    const fieldName =
      event.target.name as keyof BookDemoFormData;

    if (errors[fieldName]) {
      setErrors((previous) => ({
        ...previous,
        [fieldName]: undefined,
      }));
    }
  };

  const handleRequirementToggle = (
    requirement: string
  ) => {
    toggleRequirement(requirement, setFormData);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors =
      validateBookDemoForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await submitBookDemo(formData);

      setFormData(initialFormData);
      setIsSubmitted(true);

      setTimeout(() => {
        document
          .getElementById("book-demo")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    } catch (error) {
      console.error(
        "Book demo submission error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * ============================================================
   * SUCCESS STATE
   * ============================================================
   */

  if (isSubmitted) {
    return (
      <section
        id="book-demo"
        className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex min-h-[500px] max-w-2xl items-center justify-center">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h2 className="mb-4 text-3xl font-extrabold text-[#0F172A]">
              Thank you. Your enquiry has been received.
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              An Acrely team member will review your
              requirements and contact you shortly to arrange
              your personalized enterprise demonstration.
            </p>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);

                setTimeout(() => {
                  document
                    .getElementById("book-demo")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }, 50);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E40AF] px-8 py-4 font-bold text-white transition-colors hover:bg-[#2563EB]"
            >
              Submit Another Enquiry
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  /*
   * ============================================================
   * MAIN FORM
   * ============================================================
   */

  return (
    <section
      id="book-demo"
      className="bg-slate-50"
    >
      {/* ========================================================
          HEADER
      ========================================================= */}

      <div className="border-b border-slate-800 bg-[#0F172A] px-4 pb-16 pt-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-[#60A5FA]">
            Acrely WMS
          </p>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Book an Enterprise Demo
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-400">
            Tell us about your warehouse operations and
            requirements. Our team will review your information
            and contact you to arrange a personalized Acrely
            WMS demonstration.
          </p>
        </div>
      </div>

      {/* ========================================================
          FORM CONTAINER
      ========================================================= */}

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"
        >
          {/* ====================================================
              SECTION 01
          ==================================================== */}

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1E40AF]">
                Section 01
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Company Information
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Company Name{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.companyName
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.companyName && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Company Website
                </label>

                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Contact Person{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.contactPerson
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.contactPerson && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.contactPerson}
                  </p>
                )}
              </div>

              {/* Job Title */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Job Title{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.jobTitle
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.jobTitle && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.jobTitle}
                  </p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Business Email{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.businessEmail
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.businessEmail && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.businessEmail}
                  </p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Mobile Number{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.mobileNumber
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.mobileNumber && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ====================================================
              SECTION 02
          ==================================================== */}

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1E40AF]">
                Section 02
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Business Profile
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Industry */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Industry{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className={`w-full appearance-none rounded-lg border bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.industry
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                >
                  <option value="">
                    Select Industry
                  </option>
                  <option value="Warehouse">
                    Warehouse
                  </option>
                  <option value="Logistics">
                    Logistics
                  </option>
                  <option value="Manufacturing">
                    Manufacturing
                  </option>
                  <option value="Retail">
                    Retail
                  </option>
                  <option value="Distribution">
                    Distribution
                  </option>
                  <option value="Cold Storage">
                    Cold Storage
                  </option>
                  <option value="Food & Beverage">
                    Food & Beverage
                  </option>
                  <option value="FMCG">
                    FMCG
                  </option>
                  <option value="Agriculture">
                    Agriculture
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>

                {errors.industry && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.industry}
                  </p>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Company Size{" "}
                  <span className="text-red-500">*</span>
                </label>

                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className={`w-full appearance-none rounded-lg border bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.companySize
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                >
                  <option value="">
                    Select Size
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-500">201–500</option>
                  <option value="500+">500+</option>
                </select>

                {errors.companySize && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.companySize}
                  </p>
                )}
              </div>

              {/* Warehouses */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Number of Warehouses{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="numberOfWarehouses"
                  value={formData.numberOfWarehouses}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.numberOfWarehouses
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.numberOfWarehouses && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.numberOfWarehouses}
                  </p>
                )}
              </div>

              {/* Warehouse Area */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Total Warehouse Area (sq ft/m){" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="totalWarehouseArea"
                  value={formData.totalWarehouseArea}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.totalWarehouseArea
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.totalWarehouseArea && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.totalWarehouseArea}
                  </p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Country{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full rounded-lg border bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] ${
                    errors.country
                      ? "border-red-500"
                      : "border-slate-200"
                  }`}
                />

                {errors.country && (
                  <p className="mt-1 text-xs font-bold text-red-500">
                    {errors.country}
                  </p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  State / Region
                </label>

                <input
                  type="text"
                  name="stateRegion"
                  value={formData.stateRegion}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>
            </div>
          </div>

          {/* ====================================================
              SECTION 03
          ==================================================== */}

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1E40AF]">
                Section 03
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Warehouse Operations
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Current Management */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  How do you currently manage warehouse
                  operations?
                </label>

                <select
                  name="currentManagement"
                  value={formData.currentManagement}
                  onChange={handleInputChange}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                >
                  <option value="">
                    Select option
                  </option>
                  <option value="Excel / Spreadsheets">
                    Excel / Spreadsheets
                  </option>
                  <option value="Existing WMS">
                    Existing WMS
                  </option>
                  <option value="ERP">ERP</option>
                  <option value="Custom Software">
                    Custom Software
                  </option>
                  <option value="Manual / Paper">
                    Manual / Paper
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Daily Orders */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Average daily orders
                </label>

                <input
                  type="text"
                  name="averageDailyOrders"
                  value={formData.averageDailyOrders}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>

              {/* Daily Receiving */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Average daily receiving volume
                </label>

                <input
                  type="text"
                  name="averageDailyReceiving"
                  value={formData.averageDailyReceiving}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>

              {/* Employees */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Number of warehouse employees
                </label>

                <input
                  type="text"
                  name="numberOfWarehouseEmployees"
                  value={
                    formData.numberOfWarehouseEmployees
                  }
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>

              {/* Users */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                  Number of warehouse users
                  (software access)
                </label>

                <input
                  type="text"
                  name="numberOfWarehouseUsers"
                  value={
                    formData.numberOfWarehouseUsers
                  }
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
                />
              </div>
            </div>
          </div>

          {/* ====================================================
              SECTION 04
          ==================================================== */}

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1E40AF]">
                Section 04
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Requirements
              </h3>
            </div>

            <div>
              <label className="mb-4 block text-sm font-bold text-[#0F172A]">
                What are you looking for?
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {requirementsList.map((requirement) => {
                  const selected =
                    formData.requirements.includes(
                      requirement
                    );

                  return (
                    <label
                      key={requirement}
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                        selected
                          ? "border-[#1E40AF] bg-blue-50 text-[#1E40AF]"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() =>
                          handleRequirementToggle(
                            requirement
                          )
                        }
                        className="h-4 w-4 rounded border-slate-300 text-[#1E40AF] focus:ring-[#1E40AF]"
                      />

                      <span className="text-sm font-bold">
                        {requirement}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Operational Challenges */}
            <div>
              <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                Current operational challenges
              </label>

              <textarea
                name="operationalChallenges"
                value={formData.operationalChallenges}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe the main challenges you are facing today..."
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            </div>
          </div>

          {/* ====================================================
              SECTION 05
          ==================================================== */}

          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#1E40AF]">
                Section 05
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                Implementation
              </h3>
            </div>

            {/* Timeline */}
            <div>
              <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                Expected implementation timeline
              </label>

              <select
                name="implementationTimeline"
                value={formData.implementationTimeline}
                onChange={handleInputChange}
                className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] md:w-1/2"
              >
                <option value="">
                  Select timeline
                </option>
                <option value="Immediately">
                  Immediately
                </option>
                <option value="1-3 months">
                  1–3 months
                </option>
                <option value="3-6 months">
                  3–6 months
                </option>
                <option value="6-12 months">
                  6–12 months
                </option>
                <option value="Exploring">
                  Exploring
                </option>
              </select>
            </div>

            {/* Additional Requirements */}
            <div>
              <label className="mb-2 block text-sm font-bold text-[#0F172A]">
                Additional requirements
              </label>

              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                rows={4}
                placeholder="Any other specific integrations, compliance needs, or constraints?"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            </div>
          </div>

          {/* ====================================================
              SUBMIT
          ==================================================== */}

          <div className="flex justify-end border-t border-slate-200 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E40AF] px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookDemoPage;