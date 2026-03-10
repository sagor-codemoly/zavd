# Quick Reference - User Authentication & Data Fetching

**Project:** Zavd Medical
**Last Updated:** December 3, 2025

---

## 🚀 Quick Start

### Register New User

```bash
# 1. Start development server
pnpm dev

# 2. Open browser: http://localhost:3000/register

# 3. Fill form and submit
# - Better Auth creates user
# - Profile created automatically
# - Redirects to /dashboard
```

### Check User Data

```bash
# Open browser console (F12)
# Navigate to: http://localhost:3000/dashboard

# Should see user data loaded:
{
  user: { _id, email, name, ... },
  profile: { _id, userId, bio, ... }
}
```

---

## 🔍 Database Queries

### Check Better Auth User

```bash
mongosh mongodb://127.0.0.1:27017/zavd-db --eval "
  db.user.findOne({ email: 'your-email@example.com' })
"
```

### Check Profile

```bash
mongosh mongodb://127.0.0.1:27017/zavd-db --eval "
  db.profiles.findOne()
"
```

### Verify Relationship

```bash
mongosh mongodb://127.0.0.1:27017/zavd-db --eval "
  const user = db.user.findOne();
  const profile = db.profiles.findOne({ userId: user._id });
  printjson({ user, profile });
"
```

---

## 🏗️ Architecture Overview

```
Better Auth User Collection
{
  _id: ObjectId("692fbcb9...")
  email: "user@example.com"
  name: "John Doe"
}
          ↓
Profiles Collection
{
  userId: ObjectId("692fbcb9...")  ← Same as user._id
  bio: ""
  avatarUrl: null
}
```

**Key Point:** `session.user.id` = Better Auth `user._id` = Profile `userId`

---

## 📝 Code Examples

### Get Current User

```typescript
console.logIn API route
const session = await auth.api.getSession({ headers });
const userId = session.user.id;  console.logThis is Better Auth user._id

console.logFetch user and profile
const { user, profile } = await userService.getUserWithProfile({
  userId
});
```

### Create Profile

```typescript
console.logBetter Auth user already exists
console.logJust create profile
await profileRepository.createForUser(userId, {
  bio: "",
  avatarUrl: null,
  phoneNumber: null,
  address: {}
});
```

### Query User

```typescript
console.logBy _id (recommended)
const user = await User.findById(userId);

console.logBy email
const user = await User.findOne({ email: "user@example.com" });

console.logWith profile (populated)
const user = await User.findById(userId).populate("profile");
```

---

## 🔧 Common Tasks

### Clear Database

```bash
mongosh mongodb://127.0.0.1:27017/zavd-db --eval "
  db.user.deleteMany({});
  db.profiles.deleteMany({});
  db.session.deleteMany({});
  db.account.deleteMany({});
"
```

### Manual Profile Creation

```bash
# Call sync endpoint
curl -X POST http://localhost:3000/api/auth/sync-user \
  -H "Cookie: zavd.session_token=YOUR_TOKEN"
```

### Check Session

```bash
# Browser DevTools → Application → Cookies
# Look for: zavd.session_token
```

---

## 🚨 Troubleshooting

### User Data Not Fetching

**Solution 1: Check session exists**

```javascript
console.logBrowser console
document.cookie  console.logShould include zavd.session_token
```

**Solution 2: Create profile manually**

```bash
curl -X POST http://localhost:3000/api/auth/sync-user \
  -H "Cookie: zavd.session_token=..."
```

**Solution 3: Check database**

```bash
mongosh --eval "db.user.findOne(); db.profiles.findOne();"
```

### Session Not Persisting

**Check:**

1. Cookies enabled in browser
2. `BETTER_AUTH_URL` matches your domain
3. In development: `useSecureCookies` is `false`
4. Session hasn't expired (7 days)

### Profile Not Created

**Fix:**

-  Fallback in `/api/user/me` auto-creates profiles
-  Call `/api/auth/sync-user` manually
-  Check server logs for errors

---

## 📚 Documentation Files

1. **[SIMPLIFIED_AUTH_ARCHITECTURE.md](SIMPLIFIED_AUTH_ARCHITECTURE.md)**

   -  Complete architecture guide
   -  Data flow diagrams
   -  Testing guide

2. **[FIX_SUMMARY.md](FIX_SUMMARY.md)**

   -  Problem analysis
   -  Solution overview
   -  Changes made

3. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** (This file)

   -  Quick commands
   -  Code examples
   -  Troubleshooting

4. **[AUTH_IMPLEMENTATION_DOCS.md](AUTH_IMPLEMENTATION_DOCS.md)**

   -  Better Auth configuration
   -  API documentation

5. **[DATABASE_MODEL_CRUD_GUIDE.md](DATABASE_MODEL_CRUD_GUIDE.md)**
   -  How to create new models
   -  CRUD operations guide

---

## 🎯 Key Takeaways

1. ✅ Better Auth uses MongoDB `_id` as user ID
2. ✅ Use `session.user.id` directly for queries
3. ✅ No need for `betterAuthUserId` field
4. ✅ Only manage `profiles` collection
5. ✅ Profiles auto-created if missing

---

## 🔗 API Endpoints

| Endpoint              | Method | Purpose               |
| --------------------- | ------ | --------------------- |
| `/api/auth/sign-up`   | POST   | Register new user     |
| `/api/auth/sign-in`   | POST   | Login user            |
| `/api/auth/sign-out`  | POST   | Logout user           |
| `/api/auth/sync-user` | POST   | Create user profile   |
| `/api/user/me`        | GET    | Get current user data |

---

## 💡 Pro Tips

1. **Always use `session.user.id`** for user identification
2. **Let Better Auth manage users** - we only manage profiles
3. **Profiles auto-created** - no need to manually create
4. **Check server logs** for detailed error messages
5. **Use MongoDB Compass** for visual database inspection

---

**Need Help?**

-  Check server console for errors
-  Review [SIMPLIFIED_AUTH_ARCHITECTURE.md](SIMPLIFIED_AUTH_ARCHITECTURE.md)
-  Review [FIX_SUMMARY.md](FIX_SUMMARY.md)
-  Check MongoDB collections directly

---

**Version:** 1.0
**Author:** Claude (Anthropic AI Assistant)
