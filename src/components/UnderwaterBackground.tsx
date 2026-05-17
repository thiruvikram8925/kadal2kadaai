/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { motion } from 'motion/react';
import { useEffect, useState, useMemo } from 'react';
import { Fish } from 'lucide-react';

interface FishInstance {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  direction: 'left' | 'right';
  opacity: number;
}

export default function UnderwaterBackground() {
  const [fishes, setFishes] = useState<FishInstance[]>([]);

  useEffect(() => {
    // Generate a set of fishes with random properties
    const newFishes: FishInstance[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: Math.random() * 90 + 5, // 5% to 95%
      size: Math.random() * 40 + 20, // 20px to 60px
      duration: Math.random() * 20 + 15, // 15s to 35s
      delay: Math.random() * -30, // Start at different points in their paths
      direction: Math.random() > 0.5 ? 'left' : 'right',
      opacity: Math.random() * 0.3 + 0.05, // 0.05 to 0.35
    }));
    setFishes(newFishes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Deep blue gradient base */}
      <div className="absolute inset-0 bg-ocean-navy" />
      
      {/* Caustics / Light Rays effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-caustics bg-[radial-gradient(circle_at_50%_-20%,var(--color-ocean-aqua)_0%,transparent_50%)]" />
        <div className="absolute inset-0 animate-caustics bg-[radial-gradient(circle_at_20%_-10%,var(--color-ocean-blue)_0%,transparent_40%)] delay-700" />
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            initial={{ y: '110%', x: `${Math.random() * 100}%`, scale: 0 }}
            animate={{ 
              y: '-10%', 
              x: `${(Math.random() * 10 - 5) + (i * 5)}%`, 
              scale: [0, 1, 1, 0.5] 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-2 h-2 rounded-full border border-white/10 bg-white/5 blur-[1px]"
          />
        ))}
      </div>

      {/* Swimming Fishes */}
      {fishes.map((fish) => (
        <motion.div
          key={fish.id}
          initial={{ x: fish.direction === 'left' ? '110vw' : '-10vw' }}
          animate={{ x: fish.direction === 'left' ? '-10vw' : '110vw' }}
          transition={{
            duration: fish.duration,
            repeat: Infinity,
            delay: fish.delay,
            ease: "linear"
          }}
          style={{ 
            top: `${fish.top}%`, 
            opacity: fish.opacity,
            position: 'absolute'
          }}
          className="flex items-center"
        >
          <Fish 
            size={fish.size} 
            className={fish.direction === 'left' ? 'scale-x-[-1]' : ''} 
            strokeWidth={1}
            color="var(--color-ocean-aqua)"
          />
        </motion.div>
      ))}

      {/* Dark overlay for depth feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ocean-deep/60" />
    </div>
  );
}
