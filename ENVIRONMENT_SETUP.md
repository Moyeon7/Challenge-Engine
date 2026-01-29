# Environment Variables Setup

## Required Environment Variables

### None Required
The system works without any environment variables. All features are optional or have fallbacks.

## Optional Environment Variables

### GROQ_API_KEY (Optional) – Turn on AI review
Enables AI code review feature (5% of total score).

**Turn everything on (including AI):** Set `GROQ_API_KEY` in your environment or in a `.env` file in the course project (or repo root). Then run reviews as usual; AI review will run and score. Verify with: `npm run test:ai-review`.

**What it does:**
- Enables AI-powered code review using Groq API (Llama 3.1 8B)
- Provides qualitative feedback on code readability and maintainability
- If not set, AI review is skipped (score = 0) and review continues with other layers

**How to set:**

#### Windows (PowerShell)
```powershell
$env:GROQ_API_KEY="your_api_key_here"
```

#### Windows (CMD)
```cmd
set GROQ_API_KEY=your_api_key_here
```

#### Linux/Mac
```bash
export GROQ_API_KEY=your_api_key_here
```

#### Using .env file (recommended)
Create a `.env` file in the course project directory:

```bash
# courses/01-react-fundamentals/project/.env
GROQ_API_KEY=your_api_key_here
```

**Note**: `.env` files are already in `.gitignore` and will not be committed.

**Getting a Groq API Key:**
1. Visit https://console.groq.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy and set it as `GROQ_API_KEY`

**Security:**
- Never commit API keys to version control
- Use environment variables or `.env` files (already in `.gitignore`)
- For CI/CD, use GitHub Secrets (see `.github/workflows/solo-skill-review.yml`)

---

## Verification

To verify environment variables are set:

```bash
# Windows (PowerShell)
echo $env:GROQ_API_KEY

# Windows (CMD)
echo %GROQ_API_KEY%

# Linux/Mac
echo $GROQ_API_KEY
```

To **test that AI review is connected and responding** (from repo root):

```bash
npm run test:ai-review
```

This calls the Groq API with a minimal request. If `GROQ_API_KEY` is set and valid, you'll see "AI review is connected and responding." If not, you'll see a clear error (e.g. missing key, 401 invalid key).

---

## CI/CD Setup

For GitHub Actions, set the secret in repository settings:
1. Go to Settings → Secrets and variables → Actions
2. Add new secret: `GROQ_API_KEY`
3. The workflow will automatically use it (see `.github/workflows/solo-skill-review.yml`)

---

## Troubleshooting

### AI Review Shows 0% Score
- Check if `GROQ_API_KEY` is set: `echo $GROQ_API_KEY` (or equivalent)
- Verify the API key is valid
- Check review output for error messages
- AI review is optional - other evaluation layers still work

### Environment Variable Not Working
- Ensure you're setting it in the same terminal session where you run `npm run review`
- For `.env` files, ensure they're in the correct directory
- Restart your terminal/IDE after setting environment variables

---

**Remember**: AI review is optional. The system works perfectly without it - you'll just get 0% for that layer (5% of total score).
