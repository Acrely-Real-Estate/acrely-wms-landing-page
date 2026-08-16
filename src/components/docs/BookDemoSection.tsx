import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BookDemoSection = () => {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 sm:p-12 lg:p-16">

          <div className="max-w-3xl">

            <p className="text-[#60A5FA] font-bold uppercase tracking-wider text-sm mb-4">
              Ready to see Acrely WMS in action?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              See how Acrely WMS can transform your warehouse.
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Tell us about your warehouse operations and
              requirements. Our team will arrange a
              personalized demonstration of Acrely WMS.
            </p>

            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#1E40AF] hover:bg-[#2563EB] text-white font-bold rounded-lg transition-colors"
            >
              Book an Enterprise Demo
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export { BookDemoSection };