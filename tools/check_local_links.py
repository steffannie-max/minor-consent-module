#!/usr/bin/env python3
from pathlib import Path
import re, sys
root = Path(__file__).resolve().parents[1]
html = (root / "index.html").read_text(encoding="utf-8")
refs = re.findall(r'(?:src|href)="([^"]+)"', html)
missing = []
for ref in refs:
    if ref.startswith(("http://","https://","#","mailto:","data:")) or '${' in ref:
        continue
    path = (root / ref.split("#",1)[0]).resolve()
    if not path.exists():
        missing.append(ref)
print(f"Checked {len(refs)} references.")
if missing:
    print("Missing local files:")
    for item in sorted(set(missing)): print(f"  - {item}")
    sys.exit(1)
print("All local references exist.")
