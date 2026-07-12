import re

with open('css/style.css', 'r') as f:
    css = f.read()

# Introduce new variables in :root
root_repl = """    --button-primary: var(--button-primary); /* placeholder */
    --nav-active-color: var(--button-primary);
    --nav-active-border: #CBD5E1;
    --nav-icon-hover: var(--accent-primary);
    --nav-text-hover: var(--text-primary);
"""

# Wait, it's easier to just append specific overrides
# First, let's update .premium-nav-link to use variables
css = css.replace("border: 1px solid #CBD5E1;", "border: 1px solid var(--nav-active-border, #CBD5E1);")
css = css.replace("color: var(--button-primary);", "color: var(--nav-active-color, var(--button-primary));")
# The icon hover
css = css.replace("color: var(--accent-primary);", "color: var(--nav-icon-hover, var(--accent-primary));")

# The hover colors in premium-nav-link:hover
# Let's search for premium-nav-link:hover
