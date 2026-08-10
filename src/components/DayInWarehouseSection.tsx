import React from 'react';
import { Sun, CloudSun, Moon } from 'lucide-react';

export const DayInWarehouseSection: React.FC = () => {
  const schedule = [
    {
      time: 'Morning',
      icon: Sun,
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      events: [
        'Receive incoming truck.',
        'Warehouse operator scans barcode.',
        'Inventory automatically created.',
        'System recommends storage location.',
        'Manager receives confirmation.'
      ]
    },
    {
      time: 'Afternoon',
      icon: CloudSun,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      events: [
        'Customer order received.',
        'Picker receives picking task.',
        'Products scanned.',
        'Packing completed.',
        'Shipping label generated.',
        'Inventory updated instantly.'
      ]
    },
    {
      time: 'Evening',
      icon: Moon,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      events: [
        'Cycle count performed.',
        'Inventory discrepancies identified.',
        'Reports generated.',
        'Manager reviews warehouse performance.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF] block mb-2">
            Real Operational Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            A Day Inside a Warehouse Using Acrely WMS
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            See how operations flow from shift to shift with a fully digitized floor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {schedule.map((shift, idx) => (
            <div key={idx} className="bg-slate-50 border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm">
              <div className={`${shift.bgColor} border-b ${shift.borderColor} p-6 text-center flex flex-col items-center justify-center`}>
                <shift.icon className={`w-10 h-10 ${shift.color} mb-3`} />
                <h3 className="text-xl font-bold text-[#0F172A]">{shift.time}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {shift.events.map((event, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {eIdx + 1}
                      </span>
                      <span className="text-[#334155] font-medium leading-relaxed">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
