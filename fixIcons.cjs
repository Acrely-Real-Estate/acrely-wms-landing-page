const fs = require('fs');
 // Not available? We can just use hardcoded paths.

const files = [
  'src/components/common/Navbar.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/IndustriesSection.tsx',
  'src/components/sections/WhyAcrelySection.tsx',
  'src/pages/product/IntegrationsPage.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Regex to match `<someVar.icon ... />` and replace with proper React capitalized component.
  // This is tricky because we need to insert `const Icon = someVar.icon;` before the return, or inside `{(() => { ... })()}`
  // Let's just use the `{(() => { const Icon = ...; return <Icon ... />; })()}` pattern for inline fixes where it's deeply nested, 
  // as it avoids breaking the return block. Or better, just map the data with the Icon variable.

  // In Navbar.tsx
  content = content.replace(/<item\.icon className="h-4 w-4" \/>/g, 
    "{(() => { const Icon = item.icon; return Icon ? <Icon className=\"h-4 w-4\" /> : null; })()}");

  // In Hero.tsx
  content = content.replace(/<indicator\.icon className="w-5 h-5 text-\\[#1E40AF\\]" \/>/g, 
    "{(() => { const Icon = indicator.icon; return Icon ? <Icon className=\"w-5 h-5 text-[#1E40AF]\" /> : null; })()}");

  // In IndustriesSection.tsx
  content = content.replace(/<industry\.icon className="w-6 h-6" \/>/g, 
    "{(() => { const Icon = industry.icon; return Icon ? <Icon className=\"w-6 h-6\" /> : null; })()}");

  // In WhyAcrelySection.tsx
  content = content.replace(/<usp\.icon className="w-6 h-6" \/>/g, 
    "{(() => { const Icon = usp.icon; return Icon ? <Icon className=\"w-6 h-6\" /> : null; })()}");

  // In IntegrationsPage.tsx
  content = content.replace(/<item\.icon className="w-6 h-6" \/>/g, 
    "{(() => { const Icon = item.icon; return Icon ? <Icon className=\"w-6 h-6\" /> : null; })()}");

  fs.writeFileSync(file, content);
});

console.log('Fixed icon renderings');
