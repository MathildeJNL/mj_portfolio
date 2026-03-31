#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys

def fix_encoding(filepath):
    # Read the file with UTF-8 encoding (which will read the double-encoded text)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix all double-encoded UTF-8 characters
    replacements = {
        'Ã©': 'é',
        'Ã¨': 'è',
        'Ã®': 'î',
        'Ã´': 'ô',
        'Ã§': 'ç',
        'Ã ': 'à',
        'Ã¢': 'â',
        'Ã»': 'û',
        'Ã¹': 'ù',
        'Ã«': 'ë',
        'Ã¯': 'ï',
        'Ãª': 'ê',
        'Ã‰': 'É',
    }
    
    for bad, good in replacements.items():
        content = content.replace(bad, good)
    
    # Write the fixed content back
    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    
    print(f"Fixed encoding in {filepath}")

if __name__ == '__main__':
    fix_encoding('src/app/shared/data/skills-enriched-data.ts')
