with open('js/script.js', 'r') as f:
    js = f.read()

# Find and remove the duplicate theme toggle logic
start_str = "// ========================================================="
end_str = "    });\n});"

# Find where THEME TOGGLE LOGIC starts
if "THEME TOGGLE LOGIC" in js:
    parts = js.split("// THEME TOGGLE LOGIC")
    before = parts[0][:parts[0].rfind(start_str)]
    
    # We just want to truncate everything from the start of THEME TOGGLE LOGIC
    # because it was appended at the very end of the file.
    
    js = before.strip() + "\n"

    with open('js/script.js', 'w') as f:
        f.write(js)
    
    print("Removed duplicate theme toggle logic from script.js")
else:
    print("Theme toggle logic not found in script.js")
