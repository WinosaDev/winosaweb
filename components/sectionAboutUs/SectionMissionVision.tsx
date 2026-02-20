"use client";

import { Target, Rocket, ShieldCheck, Users } from "lucide-react";

export default function SectionMissionVision() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT SIDE - GOLD TARGET */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            
            <div className="absolute w-64 h-64 rounded-full bg-yellow-400/20"></div>
            <div className="absolute w-48 h-48 rounded-full bg-yellow-500/30"></div>
            <div className="absolute w-32 h-32 rounded-full bg-yellow-600/40"></div>
            
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl">
              <Target className="text-white w-8 h-8" />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed max-w-xl">
            We aim to deliver high-quality digital solutions that empower brands 
            with innovation, performance, and long-term impact.
          </p>

          <div className="grid sm:grid-cols-2 gap-10">

            {/* 1 */}
            <div className="flex gap-4">
              <Rocket className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Innovation</h4>
                <p className="text-gray-500 text-sm">
                  Continuously creating modern and scalable digital solutions.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4">
              <ShieldCheck className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Integrity</h4>
                <p className="text-gray-500 text-sm">
                  Maintaining strong security and reliable performance standards.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4">
              <Users className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Partnership</h4>
                <p className="text-gray-500 text-sm">
                  Building long-term collaboration based on trust and transparency.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-4">
              <Target className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Impact</h4>
                <p className="text-gray-500 text-sm">
                  Delivering measurable results that drive sustainable growth.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
