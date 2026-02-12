# Voice Up Athletics Landing Page (Node 22)

Minimal Node.js app for Azure App Service (Windows).

## Run locally

```bash
npm install
npm start
```

Open: http://localhost:8080

## Deploy to Azure App Service (Windows)

1. Push this folder to a Git repo (GitHub/Azure DevOps).
2. In Azure Portal, open your Web App.
3. Go to **Deployment Center** and connect your repo.
4. In **Configuration > General settings**:
   - Stack: **Node**
   - Node version: **22 LTS**
   - Startup command: leave empty (uses `npm start`)
5. Save and restart the app.

## Health check endpoint

- `GET /health` returns `{ "ok": true }`
