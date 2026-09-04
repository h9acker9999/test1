# AppLauncher

Tiny Tauri Windows desktop test application.

## GitHub test

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Open **Actions**.
4. Select **Build Windows EXE**.
5. Click **Run workflow**.
6. When it finishes, open the workflow run and download **AppLauncher-Windows-Installer**.

The downloaded ZIP contains the Windows `.exe` installer.

## Local build

Requires Node.js and Rust/Tauri prerequisites on Windows:

```text
npm install
npm run desktop:build
```

The installer should appear under:

```text
src-tauri/target/release/bundle/nsis/
```
