# 👋 Welcome to Challenge Engine

## Start Here!

This is a **production-ready, automated skill assessment system** for hands-on developer learning.

### Quick Navigation

- **Learner?** → Read [LEARNER_GUIDE.md](./LEARNER_GUIDE.md) (help vs strict completion) then [QUICK_START.md](./QUICK_START.md)
- **New to the system?** → Read [QUICK_START.md](./QUICK_START.md)
- **Setting up?** → Follow [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **Understanding the system?** → Read [SYSTEM_OVERVIEW.md](./SYSTEM_OVERVIEW.md)
- **Why no solutions?** → [LEARNING_PHILOSOPHY.md](./LEARNING_PHILOSOPHY.md), [COMPLETION_POLICY.md](./COMPLETION_POLICY.md)
- **Want to contribute?** → See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Deploying?** → Check [DEPLOYMENT.md](./DEPLOYMENT.md)

### For Learners

- **Read first**: [LEARNER_GUIDE.md](./LEARNER_GUIDE.md) — what help you get and what you must do yourself (strict on completion, no solution code).
- **Then**: [QUICK_START.md](./QUICK_START.md) for workflow.

1. **Pick a course** from `courses/` directory
2. **Read the course README** in `project/README.md`
3. **Start the app**: `cd project && npm install && npm run dev`
4. **Work on challenges** by implementing requirements in `src/` or `app/` (see each challenge's `README.md` and `requirements.md`)
5. **Run review**: `npm run review` to get scored — completion is determined only by the automated review

### For Administrators

- **Run global review**: `node global-review/run-all-reviews.js`
- **Check results**: See `pathway-review/pathway-summary.json`
- **Monitor**: Check GitHub Actions workflow

### System Status

✅ **Complete and Production Ready**
- 3 courses implemented
- 9 challenges created
- Comprehensive review system
- Full automation
- Complete documentation

### Test the System

```bash
node test-system.js
```

Should show: **84/84 tests passed** ✅

---

**Ready to start?** → [QUICK_START.md](./QUICK_START.md)
