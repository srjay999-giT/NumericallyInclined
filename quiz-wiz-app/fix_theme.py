import re

with open('css/style.css', 'r') as f:
    css = f.read()

# Replace the dark-theme colors with the newly requested ones
css = re.sub(r'--bg-color:\s*#[0-9a-fA-F]+;', '--bg-color: #09090B;', css, count=1, flags=re.IGNORECASE)
css = re.sub(r'--bg-gradient:\s*#[0-9a-fA-F]+;', '--bg-gradient: #09090B;', css, count=1, flags=re.IGNORECASE)
css = re.sub(r'--navbar-bg:\s*rgba\([^)]+\);', '--navbar-bg: #111827;', css, count=1, flags=re.IGNORECASE)
css = re.sub(r'--card-bg:\s*rgba\([^)]+\);', '--card-bg: #18181B;', css, count=1, flags=re.IGNORECASE)
css = re.sub(r'--navbar-border:\s*#[0-9a-fA-F]+;', '--navbar-border: #27272A;', css, count=1, flags=re.IGNORECASE)
css = re.sub(r'--card-border:\s*#[0-9a-fA-F]+;', '--card-border: #27272A;', css, count=1, flags=re.IGNORECASE)

# This assumes we want to replace only inside the body.dark-theme block.
# A safer way using regex targeting just the block:
dark_theme_pattern = r'(body\.dark-theme\s*\{)([^}]+)(\})'

def replace_colors(match):
    content = match.group(2)
    content = re.sub(r'--bg-color:\s*[^;]+;', '--bg-color: #09090B;', content)
    content = re.sub(r'--bg-gradient:\s*[^;]+;', '--bg-gradient: #09090B;', content)
    content = re.sub(r'--navbar-bg:\s*[^;]+;', '--navbar-bg: #111827;', content)
    content = re.sub(r'--card-bg:\s*[^;]+;', '--card-bg: #18181B;', content)
    content = re.sub(r'--navbar-border:\s*[^;]+;', '--navbar-border: #27272A;', content)
    content = re.sub(r'--card-border:\s*[^;]+;', '--card-border: #27272A;', content)
    content = re.sub(r'--text-primary:\s*[^;]+;', '--text-primary: #F8FAFC;', content)
    content = re.sub(r'--text-secondary:\s*[^;]+;', '--text-secondary: #CBD5E1;', content)
    return match.group(1) + content + match.group(3)

css = re.sub(dark_theme_pattern, replace_colors, css)

with open('css/style.css', 'w') as f:
    f.write(css)

print("Updated colors.")
