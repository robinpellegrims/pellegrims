# Name of the app to check. Change this to your application name!
APP=$1

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nx/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# Install @nx/workspace in order to run the affected command
pnpm install -D @nx/workspace@$NX_VERSION --prefer-offline
pnpm install -D typescript@$TS_VERSION --prefer-offline

# Run the affected command, comparing latest commit to the one before that
# In the future, there should be an environment variable in Vercel to determine what the base for the affected comparison should be.
npx nx affected:apps --plain --base HEAD~1 --head HEAD | grep $APP -q

# Store result of the previous command (grep)
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Build cancelled"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Build can proceed"
  exit 1
fi
