#!/usr/bin/env python3
"""
Medium RSS feed-ini oxuyub data/medium.json statik faylına çevirir.
GitHub Actions tərəfindən avtomatik işlədilir (bax .github/workflows/medium.yml).
Serverdə işlədiyi üçün CORS/proxy/reklam-bloklayıcı problemi yoxdur.
"""
import json
import os
import sys
import urllib.request
import xml.etree.ElementTree as ET

MEDIUM_USER = "@mahammad.alakbarli"
FEED_URL = f"https://medium.com/feed/{MEDIUM_USER}"
OUT_PATH = os.path.join("data", "medium.json")

NS = {"content": "http://purl.org/rss/1.0/modules/content/"}


def main():
    req = urllib.request.Request(FEED_URL, headers={"User-Agent": "Mozilla/5.0"})
    xml = urllib.request.urlopen(req, timeout=30).read().decode("utf-8")
    root = ET.fromstring(xml)

    items = []
    for it in root.iter("item"):
        content_el = it.find("content:encoded", NS)
        items.append({
            "title": it.findtext("title") or "",
            "link": it.findtext("link") or "",
            "pubDate": it.findtext("pubDate") or "",
            "categories": [c.text for c in it.findall("category") if c.text],
            "content": content_el.text if content_el is not None else (it.findtext("description") or ""),
        })

    os.makedirs("data", exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=1)

    print(f"{len(items)} yazı yazıldı → {OUT_PATH}")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Xəta: {e}", file=sys.stderr)
        sys.exit(1)
