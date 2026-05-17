/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Process from '../components/Process';

export default function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Process />
      
      {/* Extra detailed info for a full page feel */}
      <section className="py-24 px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Standards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-ocean-aqua font-bold mb-2">Sustainable Practices</h4>
              <p className="text-sm text-slate-400">We exclusively partner with small-scale artisanal fishermen who use traditional hand-line and net methods that preserve the marine ecosystem.</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-ocean-aqua font-bold mb-2">Transparency</h4>
              <p className="text-sm text-slate-400">Every package comes with a QR code. Scan to see the exact boat, the captain, and the time of catch.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
