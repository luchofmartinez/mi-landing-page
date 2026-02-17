import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-lab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-24 right-6 z-[100] flex flex-col gap-3 bg-slate-800/80 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
      <p class="text-[10px] font-black text-white/50 uppercase tracking-widest text-center mb-1">Paletas</p>
      
      <button (click)="setTheme('#121417', '#1c1f24', '#00d2d3', '#a1a1aa')" 
              class="w-10 h-10 rounded-full border-2 border-white/20 bg-[#00d2d3] hover:scale-110 transition-transform" title="Graphite Dawn"></button>
      
      <button (click)="setTheme('#050505', '#111111', '#fbbf24', '#94a3b8')" 
              class="w-10 h-10 rounded-full border-2 border-white/20 bg-[#fbbf24] hover:scale-110 transition-transform" title="Cyber Gold"></button>
      
      <button (click)="setTheme('#0f0a1f', '#191233', '#a855f7', '#94a3b8')" 
              class="w-10 h-10 rounded-full border-2 border-white/20 bg-[#a855f7] hover:scale-110 transition-transform" title="Midnight Purple"></button>
      
      <button (click)="setTheme('#060a09', '#0d1412', '#10b981', '#889997')" 
              class="w-10 h-10 rounded-full border-2 border-white/20 bg-[#10b981] hover:scale-110 transition-transform" title="Forest Tech"></button>
    </div>
  `
})
export class ThemeLabComponent {
  setTheme(bg: string, card: string, accent: string, textDim: string) {
    const root = document.documentElement;
    root.style.setProperty('--bg-main', bg);
    root.style.setProperty('--bg-card', card);
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--text-dim', textDim);
  }
}