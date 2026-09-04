export type Diagram = { type: 'path'|'layers'|'screen'|'plan'|'letters'|'sample'; labels: string[]; alt: string; caption: string };
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]!));
export function diagramSvg(visual: Diagram, id: string) {
  const panel = 'M25 0H225L250 25V280H0V25Z';
  const drawings = visual.labels.map((label, i) => {
    const x = 50 + i * 285;
    let geometry = '';
    if (visual.type === 'layers') geometry = [2,1,0].map(n => `<path d="M15 95L135 25L235 90L115 160Z" transform="translate(0 ${n*36})" fill="${['#d5decf','#8da995','#315d48'][n]}" stroke="#122c25"/>`).join('');
    else if (visual.type === 'screen') geometry = `<path d="${panel}" fill="${i===1?'#bacbb7':'#315d48'}"/>` + Array.from({length:5},(_,r)=>Array.from({length:i+3},(_,c)=>`<path d="M${16+c*(216/(i+3))} ${24+r*48}l${125/(i+3)} 0l-12 28h-${125/(i+3)}Z" fill="#eef0e8"/>`).join('')).join('');
    else if (visual.type === 'plan') geometry = `<path d="M10 40H235V240H10ZM${65+i*22} 40V240M10 ${95+i*24}H235" fill="none" stroke="#315d48" stroke-width="3"/><path d="M10 20H235M10 12V28M235 12V28M10 265H${80+i*60}" fill="none" stroke="#a83b1c" stroke-width="2"/><path d="M40 65l35 35m0-35l-35 35" stroke="#a83b1c"/>`;
    else if (visual.type === 'letters') geometry = `<path d="M25 50H210V90H65V190H210V230H25Z" fill="#315d48"/><path d="M${95+i*15} 105H210V175H${95+i*15}Z" fill="${i===1?'#ec8056':'#8da995'}"/><path d="M15 250H225M15 242V258M225 242V258" stroke="#a83b1c"/>`;
    else if (visual.type === 'sample') geometry = `<path d="${panel}" fill="#315d48"/>` + Array.from({length:4},(_,r)=>`<rect x="${22+i*7}" y="${30+r*58}" width="${160+r*10-i*12}" height="${12+i*8}" rx="${i*5}" fill="#eef0e8"/>`).join('');
    else geometry = `<path d="M25 230V45H210V230H80V100H155V180" fill="none" stroke="#8da995" stroke-width="${18+i*8}"/><path d="M25 230V45H210V230H80V100H155V180" fill="none" stroke="#122c25" stroke-width="2" stroke-dasharray="7 6"/><circle cx="155" cy="180" r="${10+i*6}" fill="#ec8056"/><path d="M155 180L225 275" stroke="#a83b1c"/>`;
    return `<g transform="translate(${x} 70)">${geometry}<text x="0" y="330" fill="#122c25" font-family="Arial,sans-serif" font-size="19">${esc(label)}</text><text x="0" y="-22" fill="#536559" font-family="monospace" font-size="15">0${i+1} / STUDI</text></g>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 450" role="img" aria-labelledby="${esc(id)}" class="editorial-diagram"><title id="${esc(id)}">${esc(visual.alt)}</title><rect width="900" height="450" fill="#e0e5da"/><path d="M24 24H876V426H24ZM24 42H876M42 24V426" fill="none" stroke="#bac7b9"/>${drawings}</svg>`;
}
export function socialSvg(title: string, visual?: Diagram) {
  const words = title.split(' '); const lines: string[] = []; let line = '';
  for (const word of words) { if ((line+' '+word).length > 24) {lines.push(line);line=word;} else line = (line+' '+word).trim(); } if(line)lines.push(line);
  const art = visual ? diagramSvg(visual,'og-art').replace('viewBox="0 0 900 450"','x="550" y="170" width="620" height="330" viewBox="0 0 900 450"') : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#122c25"/><path d="M35 35H1165V595H35Z" fill="none" stroke="#6d8975"/><text x="65" y="95" fill="#ff7947" font-family="Arial" font-size="22">CUTTING LASER LAMPUNG / CATATAN FABRIKASI</text>${art}${lines.slice(0,5).map((l,i)=>`<text x="65" y="${215+i*55}" fill="#f8faf0" font-family="Arial" font-size="38" font-weight="bold">${esc(l)}</text>`).join('')}<text x="65" y="550" fill="#d6e0ce" font-family="Arial" font-size="22">Panduan desain, material, dan perencanaan • Ilustrasi konsep</text></svg>`;
}
