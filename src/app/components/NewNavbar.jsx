// components/StepsSection.tsx
import { ClipboardEdit } from "lucide-react";
import { PenTool } from "lucide-react";
import { Layers } from "lucide-react";
import { CheckCircle } from "lucide-react";
import React from "react";
import { useState } from "react";


const steps = [
  {
    title: 'Survey',
    icon: <ClipboardEdit size={48} className="text-orange-500" />,
    desc: 'Conduct a thorough analysis of the site and client requirements.',
  },
  {
    title: 'Design',
    icon: <PenTool size={48} className="text-orange-500" />,
    desc: 'Create detailed architectural plans and 3D models.',
  },
  {
    title: 'Construct',
    icon: <Layers size={48} className="text-orange-500" />,
    desc: 'Execute the construction process with precision and quality.',
  },
  {
    title: 'Handover',
    icon: <CheckCircle size={48} className="text-orange-500" />,
    desc: 'Deliver the completed project to the client.',
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500">4-step process</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1 mb-12">
          Earn More with Avaron
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 sm:gap-x-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
