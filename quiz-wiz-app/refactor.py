import re

with open('css/style.css', 'r') as f:
    css = f.read()

# We will just append the CSS variables to the top of the file
variables = """
:root {
    --bg-color: #ffffff;
    --bg-gradient: linear-gradient(135deg, #eef6ff, #ffffff);
    --navbar-bg: rgba(243, 244, 246, 0.92);
    --navbar-border: #E5E7EB;
    --text-primary: #1F2937;
    --text-secondary: #374151;
    --text-muted: #475569;
    --accent-primary: #FF8A00;
    --accent-hover: #F97316;
    --accent-active: #EA580C;
    --accent-light: #EEF2FF;
    --card-bg: rgba(255, 255, 255, 0.7);
    --card-border: rgba(255, 255, 255, 0.5);
    
    --button-primary: #3b82f6;
    --button-primary-hover: #2563eb;
    --button-text: #ffffff;
    --correct-color: #10b981;
    --wrong-color: #ef4444;
}

body.dark-theme {
    --bg-color: #0B1020;
    --bg-gradient: #0B1020;
    --navbar-bg: rgba(15, 23, 42, 0.92);
    --navbar-border: #2B3448;
    --text-primary: #F8FAFC;
    --text-secondary: #CBD5E1;
    --text-muted: #94A3B8;
    
    --accent-primary: #8B5CF6;
    --accent-hover: #A855F7;
    --accent-active: #7C3AED;
    --accent-light: rgba(139, 92, 246, 0.15);

    --card-bg: rgba(20, 27, 45, 0.7);
    --card-border: #2B3448;

    --button-primary: #8B5CF6;
    --button-primary-hover: #A855F7;
    --button-text: #F8FAFC;
}

body, nav, div, button, a, svg, span, p, h1, h2, h3, header, main, section, article, .glass-card, input, select {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
}

"""

# Add the root at the beginning
if ":root" not in css:
    css = variables + css

# Perform targeted replacements

# Backgrounds
css = css.replace("background-color: #ffffff;", "background-color: var(--bg-color);")
css = css.replace("background: linear-gradient(135deg, #eef6ff, #ffffff);", "background: var(--bg-gradient);")
css = css.replace("background-color: rgba(243, 244, 246, 0.92);", "background-color: var(--navbar-bg);")

# Cards
css = css.replace("background: rgba(255, 255, 255, 0.7);", "background: var(--card-bg);")
css = css.replace("border: 1px solid rgba(255, 255, 255, 0.5);", "border: 1px solid var(--card-border);")

# Text
css = css.replace("color: #1F2937;", "color: var(--text-primary);")
css = css.replace("color: #111827;", "color: var(--text-primary);")
css = css.replace("color: #1e293b;", "color: var(--text-primary);")

css = css.replace("color: #374151;", "color: var(--text-secondary);")
css = css.replace("color: #475569;", "color: var(--text-muted);")
css = css.replace("color: #1e3a8a;", "color: var(--text-primary);") # Many quiz texts were dark blue

# Accents
css = css.replace("background-color: #FF8A00;", "background-color: var(--accent-primary);")
css = css.replace("color: #FF8A00;", "color: var(--accent-primary);")
css = css.replace("background: #EEF2FF;", "background: var(--accent-light);")

# Navbar specific
css = css.replace("border-bottom: 1px solid #E5E7EB;", "border-bottom: 1px solid var(--navbar-border);")
css = css.replace("stroke=\"#374151\"", "stroke=\"var(--text-secondary)\"")

# Buttons (Quiz)
css = css.replace("background: #3b82f6;", "background: var(--button-primary);")
css = css.replace("background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);", "background: var(--button-primary);")
css = css.replace("border-color: #3b82f6;", "border-color: var(--button-primary);")
css = css.replace("color: #3b82f6;", "color: var(--button-primary);")
css = css.replace("color: #2563EB;", "color: var(--button-primary);")

with open('css/style.css', 'w') as f:
    f.write(css)

print("Done replacing.")
