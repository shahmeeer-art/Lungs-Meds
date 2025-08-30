Lung Knowledge Atlas - PWA bundle

Files:
- index.html
- manifest.json
- service-worker.js
- icon.svg

How to use:
1) Put these files into a folder on your phone or PC.
2) (Optional but recommended for full PWA features) Serve them over HTTP:
   - On PC: run a tiny server (Python: `python -m http.server 8000` in the folder) then open http://localhost:8000/index.html
   - On Android: use any simple web server app (e.g., "Simple HTTP Server", "Web Server for Android") and point it to the folder, then open the provided local URL in Chrome.
3) If you open index.html directly (file://), the UI works but service worker (offline + install) may not register.
4) To install as an app: open in Chrome (served via http/https or localhost). Chrome will show "Install app" or "Add to Home screen". Follow prompts.
5) To make ZIP: select all files and compress (Android file manager or Zip app; on PC right-click -> Send to -> Compressed folder).

Note: This project is educational. Not a substitute for professional medical advice.