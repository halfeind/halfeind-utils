export const randomHexColor = () => {
    let hexColor= (Math.random()*0xFFFFFF<<0).toString(16);
    hexColor = hexColor.length<6 ? hexColor+"0" : hexColor;
    return '#'+hexColor;
}
export const contrastColor = (color) =>{
    let r = parseInt(color.substr(1,2),16);
	let g = parseInt(color.substr(3,2),16);
	let b = parseInt(color.substr(5,2),16);
    let yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? 'black' : 'white';
}
export const hsvToRgb = (h, s, v) => {
    let r, g, b;
      
    if(s<0) s=0;
    else s = s>1?1:s;
    if(v<0) v=0;
    else v = v>1?1:v;

    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
  
    switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }
  
    return {r: r * 255, g: g * 255, b: b * 255 };
}
export const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return {h:h, s:s,l:l} ;
}
export const hexToRgb = (hex) => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}
export const hsvToHsl = (hue,sat,val) =>{
  let h,s,l;

  h=hue;
  if(sat<0) 
    sat=0;
  else sat = sat>1?1:sat;
  if(val<0) val=0;
  else val = val>1?1:val;

  s = sat*val/((hue=(2-sat)*val)<1?hue:2-hue);
  s = isNaN(s)? 1:s;
  l= hue/2;
  
  return{h:h,s:s,l:l}
}
export const rgbToHex = (r, g, b) => {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
export const rgbToHsv = (r,g,b) => {
    let computedH = 0;
    let computedS = 0;
    let computedV = 0;
   
    r = parseInt( (''+r).replace(/\s/g,''),10 ); 
    g = parseInt( (''+g).replace(/\s/g,''),10 ); 
    b = parseInt( (''+b).replace(/\s/g,''),10 ); 
   
    if ( r==null || g==null || b==null ||
        isNaN(r) || isNaN(g)|| isNaN(b) ) {
      return;
    }
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
      return;
    }
    r=r/255; g=g/255; b=b/255;
    let minRGB = Math.min(r,Math.min(g,b));
    let maxRGB = Math.max(r,Math.max(g,b));
   
    if (minRGB==maxRGB) {
     computedV = minRGB;
     return {h:0,s:0,v:computedV};
    }
   
    let d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
    let h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
    computedH = 60*(h - d/(maxRGB - minRGB));
    computedS = (maxRGB - minRGB)/maxRGB;
    computedV = maxRGB;
    return {h:computedH,s:computedS,v:computedV};
   
} 
export const hslToRgb = (h,s,l) => {
    if (s === 0) return [l, l, l]
    h /= 360
  
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
  
    return {
      r:Math.round(hueToRgb(p, q, h + 1/3) * 255),
      g:Math.round(hueToRgb(p, q, h) * 255),
      b:Math.round(hueToRgb(p, q, h - 1/3) * 255)
    }
  }
  
export const hueToRgb = (p, q, t) =>{
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1/6) return p + (q - p) * 6 * t
    if (t < 1/2) return q
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
  
    return p
}