# Fix GitHub Authentication

## Quick Fix - Option 1: Run the Script

**Double-click: `change-github-auth.bat`**

It will ask for:
1. Your correct GitHub username
2. Your correct GitHub email

Then it updates the git config automatically.

---

## Manual Fix - Option 2: Command Line

Open Command Prompt in the Website folder and run:

```cmd
git config user.name "YourGitHubUsername"
git config user.email "your-email@example.com"
```

Replace with your actual GitHub credentials.

---

## If You Still Get Authentication Errors

You may need to clear cached credentials:

### Step 1: Open Credential Manager
1. Press **Windows Key**
2. Type **"Credential Manager"**
3. Click on it

### Step 2: Remove Old GitHub Credentials
1. Click **"Windows Credentials"**
2. Scroll down to find **"git:https://github.com"**
3. Click on it
4. Click **"Remove"**

### Step 3: Try Again
Next time you push, Git will ask for your credentials again. Use the correct ones.

---

## Alternative: Use GitHub Personal Access Token

If you're still having issues, use a Personal Access Token instead of password:

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name (e.g., "Personhood Website")
4. Check **"repo"** scope
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token as Password
When Git asks for password, paste the token instead.

---

## What Info Do I Need?

**Tell me:**
1. Your correct GitHub username
2. Your correct GitHub email

I can update the deploy.bat file to use the right credentials automatically.

---

## Current Repository

The repository you're deploying to is:
**https://github.com/Vibraneum/Cady.Social**

Make sure you have access to this repository with your correct account!
